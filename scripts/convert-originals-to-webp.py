#!/usr/bin/env python3
"""
Convert curated originals into web-ready webp.

Each entry in MAPPING declares a source path inside a project's
`originals/` folder and the destination file stem. The script writes
two outputs per source:

  <stem>.webp       — max-edge 1400 px, quality 82 (page render)
  <stem>-lg.webp    — max-edge 2000 px, quality 86 (lightbox / retina)

Run from repo root:

  python3 scripts/convert-originals-to-webp.py mycoterra
"""

from __future__ import annotations
import sys
from pathlib import Path
from PIL import Image, ImageOps

REPO = Path(__file__).resolve().parents[1]
PROJECTS = REPO / 'public' / 'images' / 'projects' / 'extracted-portfolio'

# Per-project curated list of (source filename, output stem).
# Keep these short and content-meaningful — the stems land in dossier
# data and are referenced as `img: '<stem>'`.
MAPPING = {
    'mycoterra': [
        ('render 1.png',                        'myco-hero-render'),
        ('section mycoterra 02.png',            'myco-section-01'),
        ('PERSPECTIVE SECTION.png',             'myco-section-02'),
        ('an1.png',                             'myco-massing-01'),
        ('an2.png',                             'myco-massing-02'),
        ('an3.png',                             'myco-massing-03'),
        ('an4.png',                             'myco-massing-04'),
        ('an5.png',                             'myco-massing-05'),
        ('an6.png',                             'myco-massing-06'),
        ('IMG_0358.jpeg',                       'myco-fab-pair-01'),
        ('IMG_0393.jpeg',                       'myco-fab-pair-02'),
        ('IMG_0353.jpeg',                       'myco-fab-detail-01'),
        ('IMG_0368.jpeg',                       'myco-fab-detail-02'),
        ('IMG_0394.jpeg',                       'myco-fab-detail-03'),
        ('DSC08416.JPG',                        'myco-fab-detail-04'),
    ],
}

SIZES = [
    (1400, 82, ''),         # default size
    (2000, 86, '-lg'),      # lightbox / retina
]


def convert_one(src: Path, dst_dir: Path, stem: str) -> list[Path]:
    out_paths: list[Path] = []
    img = Image.open(src)
    img = ImageOps.exif_transpose(img)        # respect EXIF rotation
    if img.mode in ('P', 'CMYK'):
        img = img.convert('RGB')
    elif img.mode == 'RGBA':
        # webp keeps alpha; fine
        pass

    for max_edge, quality, suffix in SIZES:
        scaled = img.copy()
        # Only downscale; never enlarge
        if max(scaled.size) > max_edge:
            scaled.thumbnail((max_edge, max_edge), Image.LANCZOS)
        out_path = dst_dir / f'{stem}{suffix}.webp'
        save_kwargs = {'quality': quality, 'method': 6}
        if scaled.mode == 'RGBA':
            save_kwargs['lossless'] = False
        scaled.save(out_path, 'WEBP', **save_kwargs)
        out_paths.append(out_path)
    return out_paths


def main(project_id: str) -> int:
    if project_id not in MAPPING:
        print(f'no mapping for project: {project_id}', file=sys.stderr)
        return 2

    src_dir = PROJECTS / project_id / 'originals'
    dst_dir = PROJECTS / project_id / 'images' / 'webp'
    dst_dir.mkdir(parents=True, exist_ok=True)

    for src_name, stem in MAPPING[project_id]:
        src = src_dir / src_name
        if not src.exists():
            print(f'  ! missing {src}', file=sys.stderr)
            continue
        outs = convert_one(src, dst_dir, stem)
        sizes = ', '.join(f'{p.name} ({p.stat().st_size // 1024} KB)' for p in outs)
        print(f'  {src_name}  →  {sizes}')

    return 0


if __name__ == '__main__':
    project = sys.argv[1] if len(sys.argv) > 1 else 'mycoterra'
    raise SystemExit(main(project))
