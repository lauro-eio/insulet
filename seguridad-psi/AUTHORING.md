# Authoring — Insulet seguridad-psi workshops

Syllabus spine: [`foundations/INSULET-Syllabus.md`](foundations/INSULET-Syllabus.md). Requirements: [`foundations/06262026-0837-Requirement.md`](foundations/06262026-0837-Requirement.md).

## Layout

```text
foundations/     # locked syllabus + requirements
content/         # INSULET-T{nn}-* markdown, scripts, links
html/            # participant-facing HTML per taller
```

## Add taller N+1

1. Confirm the taller in the syllabus (objectives + 4 bloques).
2. Add source articles / cases as `content/INSULET-T{nn}-*.md` (follow T01 naming).
3. Build or extend `html/INSULET-T{nn}.html` from the T01 pattern.
4. Keep workshop links / Apps Script / compromiso notes in `content/` with dated prefixes when they are ops artifacts.
5. Update this engagement’s [`README.md`](README.md) if a new top-level folder is required (prefer not to).

## Do not

- Put Insulet under `global-leadership/` factories or preview publish
- Use GL `program_id` schemas for these files
- Mix Spanish session copy into GL catalog EN/ES pipelines
