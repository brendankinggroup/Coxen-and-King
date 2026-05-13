# Coxen & King — Coming Soon Site

A single-page coming-soon site for Coxen & King Real Estate Advisors. Plain
HTML/CSS/JS — no build step, no dependencies. Open `index.html` in any
browser to preview locally.

## Working together (2-person workflow)

We share one branch by default. Pull before you start, commit small, push
often. If we're both editing the same file at the same time, switch to a
feature branch and open a PR.

```bash
# First time
git clone https://github.com/brendankinggroup/coxen-and-king.git
cd coxen-and-king

# Each session
git pull origin main                                   # start fresh
# … make changes …
git add -p                                            # stage what you meant
git commit -m "tweak hero copy"
git push origin main
```

If `git pull` reports conflicts, open the conflicted file, look for the
`<<<<<<<` markers, pick the version you want, save, then `git add` and
`git commit`.

## What to edit, where

| Want to change…                | Open…                       |
| ------------------------------ | --------------------------- |
| Headline / about copy / contact| `index.html`                |
| Launch date for the countdown  | `script.js` (`LAUNCH_DATE`) |
| Colors, type sizes, spacing    | `styles.css` (top of file)  |
| Hero photo                     | `assets/hero.jpg`           |

## Placeholders to swap

- **`assets/hero.jpg`** — drop in the real hero photo (same filename).
- **`LAUNCH_DATE`** in `script.js` — set the real launch date.
- **Contact info** in `index.html` — email, phone, social URLs.
- **Stats** in `index.html` — transactions, volume, years.

## Fonts

- **Manrope** loads from Google Fonts automatically.
- **Gordita** is a paid font — drop the `.woff2` files into `fonts/` (see
  `fonts/README.md`). Until then, the site falls back to **Outfit**, which
  is visually close and also loads from Google Fonts.

## Hosting

This is a static site. Any of these work without changes:

- **GitHub Pages** — Settings → Pages → deploy from the branch root.
- **Netlify / Vercel** — drag the folder onto the dashboard, or connect the
  GitHub repo.
