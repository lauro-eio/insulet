# Video production — Mexico Manager Compliance Pitch

Locked decisions for piece creation and later assembly.  
Presenter lines: [`presenter-script`](presenter-script). Shot briefs: [`presenter-shot-sheet.md`](presenter-shot-sheet.md).  
Assembly script (separate): [`video-script.md`](video-script.md). Lookbook: [`../screen-shots/`](../screen-shots/).

## Deliverable

**Final master:** one finished file with picture and sound muxed (e.g. MP4).  
**Pieces:** each generated clip also ships picture + sound together. Do not deliver silent video + separate WAV as the client package.

Optional on master: burn-in or sidecar captions; loudness-normalize before export.

## Character & environment lock

**Status: LOCKED** (canon = `screen-shots/models/`). All plates must match these heroes. Do not introduce a second talent or location.

### Presenter (anonymous expert — no on-screen name)

| | |
| --- | --- |
| Canon | [`models/variant-4.png`](../screen-shots/models/variant-4.png) (face) · [`models/variant-4-wardrobe.png`](../screen-shots/models/variant-4-wardrobe.png) (full body) |
| Aliases | [`lock-presenter.png`](../screen-shots/lock-presenter.png) · [`lock-presenter-wardrobe.png`](../screen-shots/lock-presenter-wardrobe.png) |
| Identity | Adult woman, mid-30s look; shoulder-length wavy dark brown hair |
| Wardrobe | Medium-grey tailored blazer, soft cream blouse, charcoal trousers |
| Details | Pearl drop earrings; watch (silver face, dark strap) on left wrist; sleeves neat |
| Demeanor | Serious, calm, authoritative — not smiling sales |
| Cast | Presenter only — no extras |

### Environment

| | |
| --- | --- |
| Canon | [`models/atrium.png`](../screen-shots/models/atrium.png) |
| Alias | [`lock-environment.png`](../screen-shots/lock-environment.png) |
| Place | Single brutalist concrete atrium — board-formed concrete, angular pillars, geometric stairs, polished floor |
| Grade | Cool monochrome grey; high directional side/skylight; long crisp shadows |
| Space | Empty of other people, logos, furniture props |
| Forbidden | Executive office, conference room, workshop B-roll sets, warm “corporate HQ” looks |

### Claim-card system

| | |
| --- | --- |
| Canon | [`models/text-card.png`](../screen-shots/models/text-card.png) |
| Alias | [`lock-claim-card.png`](../screen-shots/lock-claim-card.png) |
| Use | Full-screen hard cuts only — not overlays on the presenter; not a second “location” for talent plates |

Legacy stills (`image-01`–`image-07`, old `lock-presenter-mcu`, `lock-environment-walk`) are **mood archive only** — do not use as identity/place locks.

### Generator prompt seed (paste)

```text
Same woman as models/variant-4 + variant-4-wardrobe: mid-30s, shoulder-length wavy dark brown hair,
grey blazer, cream blouse, charcoal trousers, pearl drop earrings, watch, serious professional expression.
Same location as models/atrium: vast brutalist concrete atrium, board-formed concrete, geometric stairs
and pillars, cool grey grade, high side light, long shadows.
Continuous presence. No other people. No logos. No office furniture. Cinematic plate, 16:9.
```

### Reject if

- Different face, hair, or wardrobe vs `models/` canon
- Warm grade, wood-office, glass boardroom, or any second location
- Extra cast, props (paper/clipboard), or on-screen name badge unless later approved
- Soft dissolve from atrium into claim-card world (hard cut only)

## Piece-creation rules (presenter plates)

See [`presenter-shot-sheet.md`](presenter-shot-sheet.md) for S01–S08.

| Rule | Spec |
| --- | --- |
| Unit | One clip per sentence in `presenter-script` |
| Presence | Continuous presence (not phoneme lipsync) |
| Buffer | ~1–2s before talk window, ~1–2s after |
| Duration | Spoken length + ~2–4s (do not force 15s) |
| Camera | One primary move per clip (or locked-off); slow |
| Format | 16:9; A/V in the same file |

## What we mean by “no lipsync”

| Do | Don’t |
| --- | --- |
| Ship audio and video **in the same file** | Deliver VO as a separate client asset |
| Continuous presence plates with head/tail buffer | Require phoneme-perfect mouth match |
| Gesture / walk / mid-speech faces for life | Build a dedicated lipsync / avatar-mouth pipeline |

Tools that generate video **with audio in one job** are fine (“same go”). Continuity rules still apply.

## Visual system

**One presenter. One atrium. Sentence plates + separate claim cards.**

| Element | Spec |
| --- | --- |
| Talent / location | Locked — `models/` |
| Framing set | Per shot sheet: wide · mw · med · mclose · MCU |
| Claim cards | From `text-card` system; hard cuts in post |

## Continuity bible (freeze)

- Match `variant-4` / `variant-4-wardrobe` every plate
- Match `atrium` grade and materials every plate
- Eye line: to-cam for denser lines; walk OK on wide openers
- No prop paper / clipboard
- One move per clip; keep it slow so post can trim buffers

## Claim cards (copy deck — assembly)

Full-screen **hard cuts**. Style lock: `models/text-card.png`.

| ID | Lead | Sub |
| --- | --- | --- |
| C1 | No at-will employment | Months of aggregate salary at risk |
| C2 | Contract lapse becomes indefinite | Auto-conversion by law |
| C3 | Flat bonus is not overtime | Wage-claim liability |
| C4 | Escalate before you act | First line of defense — not DIY Legal |
| C5 | Schedule your workshop | CTA (end card; may use brand end slate instead) |

## Build order

1. Generate S01–S08 per [`presenter-shot-sheet.md`](presenter-shot-sheet.md) — must pass Character & environment lock
2. Build claim cards from `models/text-card.png` (as needed for post)
3. Assemble in post (order / cards / CTA — separate from piece creation)
4. One master mux → loudness → captions if needed

## Out of scope

- Phoneme lipsync / talking-head mouth match as a pipeline step
- Multi-location B-roll
- Named on-screen facilitator (presenter stays anonymous expert unless later approved)
- Forcing every plate to 15 seconds
