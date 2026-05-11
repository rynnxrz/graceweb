# Originals sort manifest

Source: `/Users/rz/Downloads/Links/` — 167 files total.
Destination: each project's `originals/` subfolder.
Method: copy (not move) — source files remain in `/Links` for safety.

149 of 167 files classified into project folders. 18 files left in `/Links` (not project source material — resume scans, portfolio PDFs, QR codes, undergrad-era screenshots).

## v3 — uncertain pile + originals-only mapping (2026-05-08, second pass)

29 borderline files moved into a single shared **`_uncertain/originals/`** folder at the root of `extracted-portfolio/`. These are files where the v2 visual match was either medium-confidence, extrapolated from a sibling file, or unviewable (`.ai` / `.psd` vector / Photoshop sources). Pulling them out of the project folders means each project's `originals/` now contains only files I'm confident belong there — safe to point the curated webp pipeline at without producing miss-attributed plates.

**Co-Silo Ferry Station** received its first MAPPING entry in `scripts/convert-originals-to-webp.py`. Six originals were converted to webp (page-size + lightbox-size pairs); two skipped this pass (`CORAL GRWOTH.ai` is vector, `IMG_0394.jpeg` is 51 MB and not needed for the MVP set). The dossier in `project-detail.js` was rewritten to use the new curated stems with the modern `kind: 'fullbleed' | 'pair' | 'strip'` row shape, replacing the prior PDF-block layout.

**Files moved into `_uncertain/originals/`** — 29 total:

- **Medium-confidence visual match (3)** — `IMG_7184.jpeg`, `Untitled-1-01.png`, `handwall.png`. Looks plausibly Co-Silo / Seeds of Change but no 1:1 PDF block match.
- **Vector / Photoshop source (5)** — `MOMENTS.ai`, `simulation.ai`, `sequence (1).ai`, `MYCE [Converted].ai`, `render3 (1).ai`, `render2.psd`. Unviewable through Read tool; need Illustrator/Photoshop to check content.
- **Extrapolated from sibling (3)** — `untitled3.png`, `untitled5.png`, `untitled17 1.png`. Assigned to Tide via `untitled1.png`'s confirmed match; not visually verified individually.
- **Generic exports lacking a clear visual signature (15)** — `2 [转换].png`, `A3.png`, `Artboard 2.png`, `DSC08416.JPG`, `FLOWCHART.png`, `IMG_0016 Small.jpeg`, `PG 1.png`, `PG 2.png`, `explode_画板 1.png`, `画板 1.png`, `page02 (1).jpg`, `page02 copy.png`, `perspective [转换] [已恢复].png`, `tension 1.png`, `tension 2 - 后面可以接labphoto.png`. Generic Adobe export filenames (Chinese 画板 = Artboard) — could belong to MycoTerra / EcoFlow / Co-Silo / Ultra-Plant.
- **Hash-named / sticker sheet (2)** — `99a481b4491c809e66a77cf10db04dd2.jpg`, `stickersheetsArtboard 2.PNG`. Hash and generic sticker filename — sticker sheet was likely Les-Chardonneuses but not provable from filename alone.
- **Unique exception (1)** — `IMG_7415.jpeg` is NOT in `_uncertain/`; was visually confirmed as MycoTerra (salt-water crystallization, p18 match) and stays in `mycoterra/originals/`.

To resolve `_uncertain/` later: open each in Illustrator / Photoshop / Quick Look, decide, and `mv` to the right project folder. Don't run the webp conversion script over `_uncertain/` — that folder is intentionally out of the published pipeline.

## v2 re-sort (2026-05-08)

The v1 sort treated MycoTerra as the catch-all default because it had the largest file count. Cross-checking each `originals/` file against the project's already-extracted `blocks/` and `images/` (which are reliable, since they're sliced directly from the portfolio PDF) revealed that the v1 sort had pushed several visually-distinct file clusters into MycoTerra that actually belong elsewhere — most notably the white branching coral 3-D prints (Co-Silo Ferry Station), the Ivy J Studio headpiece prototypes (Les-Chardonneuses), and one Micrasterias microscope photo (Tide-ReWoven). 16 files moved across 6 destinations.

### Moves applied

| From | To | File | Reason |
|---|---|---|---|
| mycoterra | **co-silo-ferry-station** | IMG_0353.jpeg | White branching coral 3-D print → matches Co-Silo p27/p28 "Coral Growth Pattern Simulation" / "Design Logic" |
| mycoterra | **co-silo-ferry-station** | IMG_0358.jpeg | Same series, white branching coral form |
| mycoterra | **co-silo-ferry-station** | IMG_0368.jpeg | Same series, white branching coral form |
| mycoterra | **co-silo-ferry-station** | IMG_0393.jpeg | White mushroom-cap 3-D print held in fingers — exact match for Co-Silo p28 |
| mycoterra | **co-silo-ferry-station** | IMG_0394.jpeg | Same series (51 MB; not viewed but consistent batch) |
| mycoterra | **co-silo-ferry-station** | IMG_00005_1.jpg | Layout shows "Food court / Departure hall / Waiting hall / Arrival path" — ferry-station program; coastal organic architecture |
| mycoterra | **co-silo-ferry-station** | IMG_7184.jpeg | White faceted/folded 3-D print; not earth-tone, doesn't match MycoTerra (medium confidence) |
| mycoterra | **co-silo-ferry-station** | CORAL GRWOTH.ai | Filename matches Co-Silo p27 "CORAL GROWTH PATTERN SIMULATION" |
| mycoterra | **co-silo-ferry-station** | Untitled-1-01.png | Coastal architecture axo + section with seagulls + water reflections (medium confidence) |
| heishui-river-resort | **co-silo-ferry-station** | Enscape_2022-10-11-22-11-29.png | Oct 2022 timestamp = undergrad timeline, not Heishui (Mar 2023). Curved organic structure on pier → Co-Silo |
| mycoterra | **les-chardonneuses** | flowers with foot.png | Three rows of flower decay/morphing sequences = couture "flower lifecycle" theme |
| mycoterra | **les-chardonneuses** | IMG_1319.jpg | Clear-resin floral couture headpiece in studio scene |
| mycoterra | **les-chardonneuses** | IMG_9833.JPG | Sticker sheet with butterfly/floral motifs, "IVY J STUDIO" branding |
| mycoterra | **les-chardonneuses** | deya1.JPG | 3-D render of organic floral headpiece on head form |
| mycoterra | **tide-rewoven** | Image063.jpeg | Microscope photo of green Micrasterias algae — Tide's described biological inspiration |
| mycoterra | **seeds-of-change** | handwall.png | Wall-mounted floral exhibition documentation; matches Seeds of Change wall display layouts (medium confidence) |
| les-chardonneuses | **tide-rewoven** | untitled30.png | Colorful wave-form terrain mesh, identical format to Tide's untitled1.png |
| les-chardonneuses | **tide-rewoven** | untitled41.png | Same wave-terrain series |
| les-chardonneuses | **tide-rewoven** | untitled45.png | Same wave-terrain series |
| les-chardonneuses | **tide-rewoven** | untitled47.png | Same wave-terrain series |

Created empty `originals/` folders for **co-silo-ferry-station**, **project-ultra-plant**, **neptunes-dawn**, **project-ecoflow** (only co-silo received files this pass).

## Counts by project (v2)

| Project | v1 | v2 | Δ |
|---|---|---|---|
| **MycoTerra** | 72 | 57 | −15 |
| **Les-Chardonneuses** (Couture) | 33 | 33 | 0 (4 untitled out → 4 from MycoTerra in: flowers with foot, IMG_1319, IMG_9833, deya1) |
| **Tide-ReWoven** | 18 | 23 | +5 (untitled30/41/45/47, Image063) |
| **Heishui River Resort** | 16 | 15 | −1 (Enscape_2022 out) |
| **Co-Silo Ferry Station** | — | 10 | +10 (new folder) |
| **Seeds of Change** | 10 | 11 | +1 (handwall) |
| **Project EcoFlow** | 0 | 0 | 0 |
| **Project-Ultra-Plant** | — | 0 | empty folder created |
| **Neptune's Dawn** | — | 0 | empty folder created |

## Visual signatures used for matching

| Project | Visual signature (from blocks/images + source-pages) |
|---|---|
| MycoTerra | Earth-tone clay 3-D prints, mycelium-membrane crystallization, Y1 Almanac pages, salt-water/rain-water comparison sections |
| Les-Chardonneuses | Clear/black 3-D-printed floral headpieces, runway photos, Ivy J Studio branding, Germanier SS26 |
| Tide-ReWoven | Colorful wave-form terrain meshes, algae GAN, Micrasterias diagrams, Aberdeen waterfront, fishnet-chitosan |
| Heishui River Resort | Dark angular cabin buildings with sloped roofs by water/mountains, charcoal palette |
| Co-Silo Ferry Station | White branching coral 3-D prints, mushroom-cap forms, organic curved architecture on pier/water, Auckland 2022 |
| Seeds of Change | Translucent floral exhibition pieces, Canon-EOS exhibition documentation, wall display layouts |
| Project EcoFlow | Moss-textured façade renders, gold/green palette, growth/erosion simulations |
| Project-Ultra-Plant | Sci-fi tree systems, post-WW3 narrative comics, modular plant-architecture, NZ map with orange zones |
| Neptune's Dawn | Marine theme, blue palette, underwater city, whales/fish, Shanghai 2024 |

## v1 still standing (high-confidence in v1, kept in v2)

- All `Y1_23-24_MycoTerra_Y1 Almanac_page-*` (15 files) — MycoTerra (filename match)
- `classicu 2025-10-*`, `fxn 2026-01-29 *` (8 files) — Les-Chardonneuses (couture studio cameras)
- iCloud UUID JPGs (5 files) — Les-Chardonneuses (headpiece prototypes)
- `1761/1791/1821/1851770393*_.pic_hd.jpg` (4 files) — Les-Chardonneuses (Oct 2025–Jan 2026 WeChat shares)
- `newzon*`, `term4pre055*`, `iteration1*`, `rendersep*` — Tide-ReWoven (Aberdeen new-zone)
- `IMG_4251–4260` (10 files) — Heishui River Resort (Dan. watermark)
- `heishuihezone`, `blackriversitemap`, `site.ai`, `detail section.ai`, `PLAN 2.AI`, `截屏2023-03-27` — Heishui (filename + timestamp)
- `UL6A*` Canon-EOS series, `poster*.JPG`, `image - 2025-08-26T*` — Seeds of Change

## Known low-confidence picks worth a glance (v2)

Still uncertain after v2 re-sort:

- `IMG_7184.jpeg`, `Untitled-1-01.png` → Co-Silo Ferry Station. White folded 3-D print + coastal axo respectively; consistent with Co-Silo aesthetic but not 1:1 matched against PDF blocks.
- `handwall.png` → Seeds of Change. Wall display documentation — matches exhibition theme, but could plausibly stay in MycoTerra if it's a fabrication-test wall.
- `MOMENTS.ai`, `simulation.ai`, `sequence (1).ai` → kept in MycoTerra. Vector files, can't be visually previewed; could be Tide-ReWoven simulations.
- `IMG_7415.jpeg` → confirmed MycoTerra (salt-crystallized fabric, matches p18 "TWO TYPE CRYSTALLIZATION").
- `untitled3.png`, `untitled5.png`, `untitled17 1.png` → Tide-ReWoven (still extrapolated from `untitled1.png`'s confirmed match).
- `99a481b4491c809e66a77cf10db04dd2.jpg` → Les-Chardonneuses (hash-named, batched with iCloud UUIDs).
- All loose `画板*`, `render*`, `perspective*`, `tension*`, `fabrications*` exports in MycoTerra — kept (filename + timeline + visual match where checked).

## Files NOT moved (skip-pile, still in `/Links`)

Not project source material:

- `ShenYu_UKResume.png`, `ShenYu_UKResumep2.png` — resume scans
- `adobe-express-qr-code (2).png`, `adobe-express-qr-code (3).png` — QR codes
- `graceshen_designportfolio_compress-{11,15,16,19,20,21,22}.pdf` — portfolio PDF extracts (replaced by originals)
- `gsCapture.JPG` — generic screen capture
- `截屏2022-06-26 下午{8.53.08, 9.24.33}.png` — June 2022 undergrad screenshots
- `1591/1601/1641770393*_.pic_hd.jpg` — WeChat shares from Jun 2020 / Oct 2020 / Jan 2022 (pre-Master's)
- `18621761602750_.pic_hd.jpg` — different WeChat ID format, unclassified

## What to do next

1. Spot-check the `co-silo-ferry-station/originals/` folder (10 freshly-moved files) — confirm visually before regenerating webps.
2. If `MOMENTS.ai` / `simulation.ai` / `sequence (1).ai` should move to Tide-ReWoven, open them in Illustrator and re-sort (out-of-band — Read tool can't preview vector files).
3. Update `scripts/convert-originals-to-webp.py` `MAPPING` if any moved files were referenced there (they were under their old paths).
4. Pick hero + supporting plates per project for the curated layout pass — Co-Silo Ferry Station and Project-Ultra-Plant / Neptune's Dawn / Project-EcoFlow should now be candidates for adding originals to the curated set (currently 43 webps; only 6 of 9 projects have originals contributing).
