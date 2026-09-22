# Insulet — Compliance workshop

Mexico Manager Compliance Guide → workshop sessions. Source of truth starts in `source/`.

| Path | Role |
| --- | --- |
| [`source/`](source/) | Client PDF, extract, pitch script + production lock |
| [`screen-shots/`](screen-shots/) | Presenter / atrium lookbook + claim-card template |
| [`sessions/`](sessions/) | Locked agenda, pre-read, facilitator guides, decks ([agenda](sessions/agenda.md) · [pre-read](sessions/pre-read-brief.md) · [S01](sessions/session-01-facilitator.md) · [S02](sessions/session-02-facilitator.md) · [S01 deck](sessions/s01-deck-slides.md) · [S02 deck](sessions/s02-deck-slides.md)) |
| [`handouts/`](handouts/) | Participant handouts ([H1](handouts/handout-01-statutory-benefits.md) · [H2](handouts/handout-02-consequence-matrix.md) locked) |
| [`client-gate/`](client-gate/) | Legal/HR review pack ([HTML](client-gate/review-pack.html)) |

## Source

| File | Notes |
| --- | --- |
| [`source/Mexico-Manager-Compliance-Guide_FV.pdf`](source/Mexico-Manager-Compliance-Guide_FV.pdf) | Client guide (23 pp, Canva) |
| [`source/Mexico-Manager-Compliance-Guide_FV.txt`](source/Mexico-Manager-Compliance-Guide_FV.txt) | `pdftotext -layout` extract (raw) |
| [`source/Mexico-Manager-Compliance-Guide_FV.clean.md`](source/Mexico-Manager-Compliance-Guide_FV.clean.md) | Cleaned markdown with chapter headings |
| [`source/video-script.md`](source/video-script.md) | ~60s pitch script (Visual / Spoken / On-screen) — assembly |
| [`source/presenter-script`](source/presenter-script) | Presenter VO lines (piece source) |
| [`source/presenter-shot-sheet.md`](source/presenter-shot-sheet.md) | S01–S08 FOV / move / buffer briefs |
| [`source/video-production.md`](source/video-production.md) | Locks = `screen-shots/models/`; piece + ship rules |

Re-extract after a new PDF drop:

```bash
pdftotext -layout \
  source/Mexico-Manager-Compliance-Guide_FV.pdf \
  source/Mexico-Manager-Compliance-Guide_FV.txt
```
