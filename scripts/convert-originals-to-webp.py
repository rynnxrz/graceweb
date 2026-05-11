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
        ('Generated Image October 01, 2025 - 6_26PM.png', 'myco-render-urban'),
        ('2024-08-11 1.00.57.png',              'myco-lifecycle'),
        ('A3.png',                              'myco-voxel-board'),
        ('Y1_23-24_MycoTerra_Y1 Almanac_page-0038.jpg', 'myco-almanac-material'),
        ('Y1_23-24_MycoTerra_Y1 Almanac_page-0074.jpg', 'myco-almanac-proto'),
        ('Y1_23-24_MycoTerra_Y1 Almanac_page-0087.jpg', 'myco-almanac-site'),
        ('Y1_23-24_MycoTerra_Y1 Almanac_page-0096.jpg', 'myco-almanac-render'),
        ('IMG_7415.jpeg',                       'myco-fab-crystal'),
    ],
    'tide-rewoven': [
        ('newzonArtboard 1.png',                'tide-hero-section'),
        ('term4pre055画板 1.png',                'tide-board-01'),
        ('term4pre055画板 4.png',                'tide-board-02'),
        ('alage to computation.png',            'tide-method-gan'),
        ('untitled1.png',                       'tide-method-wave-01'),
        ('untitled3.png',                       'tide-method-wave-02'),
        ('untitled5.png',                       'tide-method-wave-03'),
        ('untitled17 1.png',                    'tide-method-wave-04'),
        ('NewLevelSequence.0282.png',           'tide-method-render'),
        ('rendersep画板 1.png',                  'tide-system-01'),
        ('rendersep画板 6.png',                  'tide-system-02'),
        ('iteration1画板 3.png',                 'tide-iter-01'),
        ('iteration1画板 4.png',                 'tide-iter-02'),
        ('newzon2画板 3.png',                    'tide-iter-03'),
        ('Generated Image September 28, 2025 - 11_46PM.png', 'tide-iter-04'),
        ('WechatIMG70.jpeg',                    'tide-aerial'),
        ('Untitled-1-01.png',                   'tide-harbour-iso'),
        ('explode_画板 1.png',                   'tide-explode'),
        ('fish market study 03.jpg',            'tide-site-photo'),
        ('page02 (1).jpg',                      'tide-site-analysis'),
        ('plan画板 8@600x-100.jpg',              'tide-plan'),
        ('Image063.jpeg',                       'tide-algae-micro'),
        ('fabrications画板 1 副本 15.png',        'tide-fab-01'),
        ('fabrications画板 1 副本 25.png',        'tide-fab-02'),
        ('fabrications画板 1 副本 29.png',        'tide-fab-03'),
        ('untitled30.png',                      'tide-wave-terrain-01'),
        ('untitled41.png',                      'tide-wave-terrain-02'),
        ('untitled45.png',                      'tide-wave-terrain-03'),
        ('untitled47.png',                      'tide-wave-terrain-04'),
        ('tension 1.png',                       'tide-tension-01'),
        ('tension 2 - 后面可以接labphoto.png',   'tide-tension-02'),
        ('微信图片_20250321220730.jpg',          'tide-process-wechat-01'),
        ('微信图片_20250621153337.png',          'tide-process-wechat-02'),
        ('image - 2025-08-26T211312.795.png',   'tide-doc-aug'),
    ],
    'heishui-river-resort': [
        ('IMG_4253.JPG',                        'heishui-hero-resort'),
        ('heishuihezone.png',                   'heishui-axo-zone'),
        ('blackriversitemap.png',               'heishui-site-map'),
        ('IMG_4258.PNG',                        'heishui-render-01'),
        ('IMG_4259.JPG',                        'heishui-render-02'),
        ('IMG_4260.PNG',                        'heishui-render-03'),
        ('IMG_4254.JPG',                        'heishui-render-04'),
        ('IMG_4252.JPG',                        'heishui-render-05'),
        ('IMG_4255.JPG',                        'heishui-render-06'),
        ('IMG_4251.PNG',                        'heishui-render-waterfall'),
        ('IMG_4257.PNG',                        'heishui-interior'),
        ('截屏2025-10-09 下午11.13.31.png',      'heishui-plan-villa'),
        ('截屏2025-10-09 下午11.14.00.png',      'heishui-plan-villa-detail'),
        ('截屏2025-10-09 下午11.14.21.png',      'heishui-plan-hotel'),
    ],
    'les-chardonneuses': [
        ('fxn 2026-01-29 160025DBF9E0632AE7.JPG',  'lc-hero-thistle'),
        ('classicu 2025-10-25 185124.524.JPG',     'lc-process-01'),
        ('classicu 2025-10-25 165750.771.JPG',     'lc-process-02'),
        ('classicu 2025-10-25 190616.755.JPG',     'lc-process-03'),
        ('classicu 2025-10-26 221822.245.JPG',     'lc-process-04'),
        ('fxn 2026-01-29 16004351DF49BF567B.JPG',  'lc-process-05'),
        ('fxn 2026-01-29 1629107CF4CBBEB74F.JPG',  'lc-process-06'),
        ('EA650C9E-CBFA-4BEF-B211-5F770A448F07-710-00000014FFB7A0A8.JPG', 'lc-proto-black'),
        ('5c05a7e9-b0b6-4949-96f8-b7103fb92e8e.JPG', 'lc-proto-clear-01'),
        ('DB667BA9-645A-445B-AFF2-06E89CE4F9F6-710-00000015ABCF22D9.JPG', 'lc-proto-clear-02'),
        ('3597adc5-813c-4210-9bb1-6e01430433a3.JPG', 'lc-proto-detail'),
        ('fxn 2026-01-29 16585174AAB8C1111E.JPG',  'lc-final-detail'),
        ('1591770393026_.pic_hd.jpg',               'lc-render-bloom'),
        ('1601770393029_.pic_hd.jpg',               'lc-render-detail'),
        ('1641770393041_.pic_hd.jpg',               'lc-render-branch'),
        ('1761770393092_.pic_hd.jpg',               'lc-resin-sphere'),
        ('1791770393107_.pic_hd.jpg',               'lc-proto-black-top'),
        ('1821770393125_.pic_hd.jpg',               'lc-resin-hand'),
        ('1851770393140_.pic_hd.jpg',               'lc-proto-full'),
        ('18621761602750_.pic_hd.jpg',              'lc-wall-install'),
        ('IMG_1319.jpg',                            'lc-backstage'),
        ('deya1.JPG',                               'lc-render-sculpture'),
        ('99a481b4491c809e66a77cf10db04dd2.jpg',    'lc-ref-hydrangea'),
        ('image - 2026-02-06T182310.966.png',       'lc-concept-01'),
        ('image - 2026-02-06T182315.523.png',       'lc-concept-02'),
        ('image - 2026-02-06T182333.794.png',       'lc-concept-03'),
    ],
    'seeds-of-change': [
        ('UL6A4013.JPG',                        'seeds-hero-installation'),
        ('UL6A3099.jpg',                        'seeds-doc-01'),
        ('UL6A3120.jpg',                        'seeds-doc-02'),
        ('UL6A3223.JPG',                        'seeds-doc-03'),
        ('UL6A3606.JPG',                        'seeds-doc-04'),
        ('UL6A3654.JPG',                        'seeds-doc-05'),
        ('poster.JPG',                          'seeds-poster'),
        ('poster3.JPG',                         'seeds-poster-03'),
        ('poster4.JPG',                         'seeds-poster-04'),
        ('741761573552_.pic_hd.jpg',            'seeds-headpiece'),
        ('flowers with foot.png',               'seeds-flora-study'),
        ('handwall.png',                        'seeds-wall-display'),
        ('stickersheetsArtboard 2.PNG',         'seeds-sticker-sheet'),
        ('IMG_9833.JPG',                        'seeds-sticker-photo'),
    ],
    'co-silo-ferry-station': [
        ('Enscape_2022-10-11-22-11-29.png', 'silo-hero-dusk'),
        ('IMG_00005_1.jpg',                  'silo-interior-program'),
        ('IMG_0393.jpeg',                    'silo-fab-hero'),
        ('IMG_0353.jpeg',                    'silo-fab-coral-01'),
        ('IMG_0358.jpeg',                    'silo-fab-coral-02'),
        ('IMG_0368.jpeg',                    'silo-fab-coral-03'),
        ('Generated Image September 28, 2025 - 11_46PM.png', 'silo-hero-glow'),
        ('Artboard 2.png',                  'silo-section-dark'),
        ('gsCapture.JPG',                   'silo-preform-slicer'),
        ('IMG_0016 Small.jpeg',             'silo-model-topdown'),
    ],
    'project-ultra-plant': [
        ('PERSPECTIVE SECTION.png',             'ultra-section-comic'),
        ('perspective 02.png',                  'ultra-perspective'),
        ('2 [转换].png',                        'ultra-typology-sheet'),
        ('FLOWCHART.png',                       'ultra-flowchart'),
        ('SUBD5_画板 1-07.png',                 'ultra-subd-07'),
        ('SUBD5_画板 1-08.png',                 'ultra-subd-08'),
        ('perspective [转换] [已恢复].png',      'ultra-perspective-02'),
        ('截屏2022-06-26 下午8.53.08.png',       'ultra-model-01'),
        ('截屏2022-06-26 下午9.24.33.png',       'ultra-model-02'),
        ('EA650C9E-CBFA-4BEF-B211-5F770A448F07-710-00000014FFB7A0A8.JPG', 'ultra-print-dark'),
        ('DB667BA9-645A-445B-AFF2-06E89CE4F9F6-710-00000015ABCF22D9.JPG', 'ultra-print-wax'),
        ('IMG_7184.jpeg',                       'ultra-print-shell'),
    ],
    'neptunes-dawn': [
        ('PG 1.png',                            'neptune-sheet-01'),
        ('PG 2.png',                            'neptune-sheet-02'),
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
