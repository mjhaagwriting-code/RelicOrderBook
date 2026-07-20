# Matt Haag / The Relic Order

The site for **relicorderbook.com** — Matt Haag's author site and the home of *The Relic
Order: The Treacherous Theatre*. Plain HTML/CSS/JS, no build step, no dependencies. Shares
its visual style (dark vintage academia: Playfair Display + EB Garamond + Caveat, gold/red
on near-black) with `haaghousepress-site` and `spartacusdesign-site` so the three properties
read as one brand family.

## What's here

- `index.html` — Matt Haag bio/landing page, with a teaser for The Relic Order and an email
  sign-up.
- `relic-order.html` — the dedicated book page: story, book details, character cards
  (placeholders until final character art is ready), author bio, and email sign-up.
- `assets/images/site/` — the illustrations actually used on the live site, pulled from
  Matt's illustrated manuscript.
- The footer links out to `haaghousepress.com` (the publishing imprint) and
  `spartacusdesign.com` (Matt's art business). Update those links if either domain changes.
- The newsletter form posts to the same MailerLite list used on the Haag House Press site.

## Preview locally

```
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open http://localhost:5500/

## Deploy to Netlify

Push to a GitHub repo, import into Netlify (publish directory `.`, no build command —
already set in `netlify.toml`), then point **relicorderbook.com** at it via Netlify's domain
settings (add A/CNAME records at your registrar, or delegate DNS to Netlify).

## Still open

- Character art for Cedric, Suzy, and Oliver (currently placeholder boxes in the "Meet the
  Characters" section on `relic-order.html`).
- Final book cover art for the hero background and social-share image (`og:image`), to
  replace the manuscript-illustration placeholder currently in use.
