# Fonts

Gordita is a paid font from Coreyhart Type Co. and is not redistributed in
this repo. Once you've purchased the license, drop the following files into
this folder:

- `Gordita-Regular.woff2`
- `Gordita-Medium.woff2`
- `Gordita-Bold.woff2`

`styles.css` already declares `@font-face` rules pointing at these
filenames, so they'll be picked up automatically once they're present.

Until then, the site falls back to **Outfit** (loaded from Google Fonts),
which is visually close.
