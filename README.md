# Insulet (client) — publish mirror

Mirrored from [egregor-io/egregor-content](https://github.com/egregor-io/egregor-content) → `special-projects/Insulet/`.  
Hosted on **lauro-eio** so Vercel can deploy without `egregor-io` access.

| Engagement | Path | Role |
| --- | --- | --- |
| Compliance workshop | [`compliance-workshop/`](compliance-workshop/) | Mexico Manager Compliance (`source/` → `sessions/` → `handouts/` → [`client-gate/`](compliance-workshop/client-gate/)) |
| Seguridad psicológica | [`seguridad-psi/`](seguridad-psi/) | Talleres EOF / microagresiones |

## Vercel (client-gate review pack)

1. Import **this** repo (`lauro-eio/insulet`) in Vercel.
2. Framework: **Other** · Build: empty · Output: `.`
3. Root Directory: leave **repo root** (uses [`vercel.json`](vercel.json) rewrite `/` → client-gate HTML).
4. Enable **Deployment Protection** (password / Vercel Auth) — pack has internal contacts.

Direct path if rewrite fails: `/compliance-workshop/client-gate/review-pack.html`

## Sync from egregor-content

After editing the hub copy:

```bash
rsync -a --delete \
  /path/to/egregor-content/special-projects/Insulet/ \
  ./ \
  --exclude .git --exclude vercel.json
# keep vercel.json; commit + push this repo
```

Outside GL factory catalog. Do not treat `INSULET` as a GL `program_id`.
