# Originals sort manifest

Source: `/Users/rz/Downloads/Links/` — 167 files total.
Destination: each project's `originals/` subfolder.
Method: copy (not move) — source files remain in `/Links` for safety.

149 of 167 files were classified into project folders. 18 files were left in `/Links` because they are not project source material (resume scans, portfolio PDFs, QR codes, undergrad-era screenshots).

## How files were classified

The classifier ran in three passes:

1. **Filename pattern (high confidence)** — `Y1_23-24_MycoTerra_*` → MycoTerra; `newzon*` / `fish market*` → Tide-ReWoven; `classicu 2025-10-*` and `fxn 2026-01-29 *` → Les-Chardonneuses (couture timeline matches Germanier SS26); `heishuihezone` / `blackriversitemap` / `IMG_4251–4260` (Dan. watermark) → Heishui River Resort.
2. **Sampled visual + filename inference (medium confidence)** — sampled one file from each ambiguous series, then bulk-applied the result. e.g. `IMG_0353/0358/0368/0393/0394` are all 3-D-printed mycelium scaffolds → MycoTerra; `UL6A4013` is translucent flowers on moss → Seeds of Change exhibition documentation; `EA650C9E-…` (one of the iCloud UUIDs) is a black-3D-print headpiece → Les-Chardonneuses (the other UUID files batched with it).
3. **Generic-export defaults** — `untitled*`, `画板*`, `Artboard*`, `render*`, `perspective*`, `page*` and the loose `.ai`/`.psd`/`.png` exports were assigned to the project whose timeline matches their content. MycoTerra got most generics because (a) its file count in `/Links` is largest and (b) the master-thesis Y1 Almanac is the project most likely to leave loose layout exports behind.

## Counts by project

| Project | Files | Notes |
|---|---|---|
| **MycoTerra** | 72 | Y1 Almanac pages, fabrication tests (3-D printed scaffolds, mycelium grown specimens), entrance-perspective renders, axonometrics, generic exports. |
| **Les-Chardonneuses** (Couture) | 33 | All `classicu 2025-10-*` and `fxn 2026-01-29 *` (camera profile names from couture studio sessions), all iCloud UUID JPGs (black-/clear-resin headpiece prototypes), Generated Image Feb 2026 (post-runway archive), WeChat HD shares from Oct 2025–Jan 2026, sticker sheets. |
| **Tide-ReWoven** | 18 | `newzon*` (Aberdeen new-zone artboards), `fish market study 03`, `term4pre055画板*`, `iteration1画板*`, `rendersep画板*`, `alage to computation` (algae GAN), `NewLevelSequence.0282` (Unreal frame), wave-form wireframes, March/June 2025 WeChat shares (Tide thesis timeline). |
| **Heishui River Resort** | 16 | `heishuihezone`, `blackriversitemap`, `IMG_4251–4260` (resort renders with "Dan." watermark — colleague's collaboration shots), `截屏2023-03-27` (March 2023 = Heishui design phase), `site.ai` / `detail section.ai` / `PLAN 2.AI`. |
| **Seeds of Change** | 10 | `UL6A*` Canon-EOS series (translucent floral installation on moss exhibition documentation), `image - 2025-08-26T*` (Aug 2025 exhibition prep), `poster*.JPG`. |
| **Project EcoFlow** | 0 | No source files in `/Links`. EcoFlow (London 2023, MArch year-1 façade study) appears to be served entirely by the existing PDF-extracted images. |

## Files NOT moved (skip-pile, still in `/Links`)

These were intentionally left out — they are not project source material:

- `ShenYu_UKResume.png`, `ShenYu_UKResumep2.png` — resume scans
- `adobe-express-qr-code (2).png`, `adobe-express-qr-code (3).png` — QR codes
- `graceshen_designportfolio_compress-{11,15,16,19,20,21,22}.pdf` — portfolio PDF extracts (the PDFs that the existing site already extracts plates from; replacing those plates with originals is what this whole task is about, so the PDFs themselves are no longer the source of truth)
- `gsCapture.JPG` — generic screen capture
- `截屏2022-06-26 下午{8.53.08, 9.24.33}.png` — June 2022 screenshots from undergrad (Auckland) period
- `1591770393026_.pic_hd.jpg`, `1601770393029_.pic_hd.jpg`, `1641770393041_.pic_hd.jpg` — WeChat-HD shares with Unix-epoch prefixes from Jun 2020 / Oct 2020 / Jan 2022 (undergrad / pre-Master's)
- `18621761602750_.pic_hd.jpg` — different WeChat ID format, unclassified

## Known low-confidence picks worth a glance

A few files I assigned with weaker confidence — flag if you disagree:

- `flowers with foot.png` → MycoTerra. Could plausibly be Les-Chardonneuses (the couture project's "floral lifecycles" theme).
- `untitled3.png`, `untitled5.png`, `untitled17 1.png` → Tide-ReWoven (assumed wave-form / terrain studies). Sampled `untitled1.png` (pink wireframe wave) confirmed Tide; the rest are extrapolated from filename ordering.
- `untitled30.png`, `untitled41.png`, `untitled45.png`, `untitled47.png` → Les-Chardonneuses (later in the sequence, presumed couture exports).
- `IMG_1319.jpg`, `IMG_7184.jpeg`, `IMG_7415.jpeg`, `IMG_9833.JPG`, `IMG_00005_1.jpg` → MycoTerra. Random iPhone shots; assigned to MycoTerra default. Could be any project.
- `Image063.jpeg`, `deya1.JPG` → MycoTerra. Generic, unclear.
- `MOMENTS.ai`, `simulation.ai`, `sequence (1).ai` → MycoTerra. Vector-illustration outputs; could also be Tide-ReWoven (which has more diagrammatic content in its dossier).
- `99a481b4491c809e66a77cf10db04dd2.jpg` → Les-Chardonneuses. Hash-named, assigned alongside the iCloud UUIDs.

## What to do next

Open each project's `originals/` folder, scan the contents, and:

1. Move any miss-assigned file to the correct project's `originals/`.
2. (Optional) Delete any duplicate / obviously-low-quality file you don't want surfaced.
3. Pick a small set of "hero" + "supporting" plates per project — the next pass of the dossier layout will be built on a curated subset, not all 70+ files for MycoTerra.
