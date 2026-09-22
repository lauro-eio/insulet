# Authoring — Insulet hub

One folder per engagement under this hub. Engagement-level authoring lives inside each package.

## Engagements

| Folder | Authoring |
| --- | --- |
| [`seguridad-psi/`](seguridad-psi/) | [`seguridad-psi/AUTHORING.md`](seguridad-psi/AUTHORING.md) |
| [`compliance-workshop/`](compliance-workshop/) | Source PDF → extract → locked facilitators/decks in `sessions/` |

## Add a new engagement

1. Create `special-projects/insulet/<slug>/` with a short `README.md`.
2. Keep client source under `source/` (PDF + text extract when needed).
3. Put locked session materials under `sessions/` (facilitator guides, agendas, slide blueprints). Use `notes/` only for scratch if needed.
4. Link the folder from the hub [`README.md`](README.md).

## Do not

- Nest one git clone inside another under this hub
- Put Insulet under `global-leadership/` factories or preview publish
- Use GL `program_id` schemas for these files
