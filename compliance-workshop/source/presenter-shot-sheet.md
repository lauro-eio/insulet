# Presenter shot sheet

Asset briefs for **piece creation** (generate / shoot). Source lines: [`presenter-script`](presenter-script).  
Locks: [`video-production.md`](video-production.md) · heroes in [`../screen-shots/models/`](../screen-shots/models/).

**Do not** treat this as the final edit timeline. Post will trim and assemble.

## Rules (locked)

| Rule | Spec |
| --- | --- |
| Unit | One clip per sentence (S01–S08) |
| Presence | Continuous presence across the plate |
| Buffer | ~1–2s before talk window, ~1–2s after |
| Duration | Spoken length + ~2–4s (not forced to 15s) |
| Move | One primary camera move per clip (or locked-off) |
| Format | 16:9 · picture + sound in the same file when generated |
| Refs | Face `models/variant-4.png` · wardrobe `models/variant-4-wardrobe.png` · place `models/atrium.png` |

## Bin naming

`S{nn}_{fov}_{move}` — e.g. `S01_wide_push.mp4`

| Token | Meaning |
| --- | --- |
| `wide` / `mw` / `med` / `mcu` | Field of view |
| `push` / `pull` / `track` / `orbit` / `lock` | Camera move |

## Shot list

| ID | Bin name | Line (from presenter-script) | FOV | Move | Framing / action | Plate target |
| --- | --- | --- | --- | --- | --- | --- |
| S01 | `S01_wide_push` | Managing a team in Mexico with U.S. 'at-will' habits isn't just risky. | Wide (~24mm) | Slow push-in **or** gentle lateral track | Full / mid-full; walk or enter frame; atrium readable | ~5–7s |
| S02 | `S02_mw_lock` | A single unmanaged termination or contract lapse can cost your company months of aggregate salary in statutory penalties. | Medium-wide (~35mm) | Locked-off **or** very slow push | Mid; stance over walk; weight on the line | ~7–10s |
| S03 | `S03_med_orbit` | Mexico’s labor laws favor the employee by default. | Medium (~40–50mm) | Slow orbit / slight arc | Mid to-cam; stable eye line | ~5–7s |
| S04 | `S04_med_lock` | Letting a temporary contract lapse creates a permanent employee automatically. | Medium | Locked-off | Mid; slight low angle OK; minimal gesture | ~6–8s |
| S05 | `S05_mclose_push` | Paying 'flat bonuses' instead of tracked overtime creates direct wage-claim liability. | Medium-close (~50–70mm) | Slow push-in | Chest-up; stop walking; face sharper | ~6–8s |
| S06 | `S06_med_lock` | The Mexico Manager Compliance Workshop turns your leaders into your primary legal shield. | Medium | Locked **or** tiny push | Mid to-cam; open posture; serious (not smiling) | ~6–8s |
| S07 | `S07_mcu_lock` | We train them to catch high-risk red flags early—so your HR and legal teams aren't left cleaning up costly mistakes. | MCU (~70–85mm) | Locked-off | Head/shoulders; eye contact; smallest gesture | ~7–9s |
| S08 | `S08_med_pull` | Protect your operational strategy and give your managers the exact playbook they need to lead with confidence. | Medium (~40–50mm) | Slow pull-back **or** hold then ease out | Mid; resolve space for later end-card in post | ~6–8s |

## Intensity ladder (FOV)

```text
S01 wide → S02 mw → S03–S04 med → S05 mclose → S06 med → S07 MCU → S08 med (ease out)
```

Alternate moving vs locked across odd/even where possible so adjacent bins don’t twin.

## Generation checklist

- [ ] Attach face + wardrobe + atrium refs
- [ ] Match lock grade (cool grey, side light, long shadows)
- [ ] Continuous presence for full plate length (buffers included)
- [ ] One move only; keep it slow
- [ ] No second person, logos, clipboard, office set
- [ ] Export 16:9 with embedded audio
- [ ] Filename = bin name above

Claim cards are **out of this sheet** — see `models/text-card.png` / `cards/` for separate assets.
