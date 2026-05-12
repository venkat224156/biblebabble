# biblebabble (GitHub Pages mirror)

This repo is intended to host a **static** copy of `https://biblebabble.in/` on GitHub Pages.

## How to build the site (download + rewrite links)

From this folder:

```bash
rm -rf docs
python3 mirror_site.py --start "https://biblebabble.in/" --max-pages 100 --max-assets 1000
```

This creates a `docs/` folder containing the mirrored site content. GitHub Pages can serve directly from `docs/`.

## Preview locally

```bash
python3 -m http.server 5173 -d docs
```

Then open `http://localhost:5173`.

## Publish on GitHub Pages

1. Create a GitHub repo, for example `biblebabble-site`.
2. Push this code to GitHub.
3. In GitHub repo settings:
   - Pages -> **Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/docs`

## Notes / troubleshooting

- This is a Siteswan-style static mirror. The generated HTML, CSS, JavaScript, fonts, routes, and same-origin assets are stored locally.
- Like the example mirror, Siteswan CDN-hosted images and third-party links remain as external URLs so the replica matches the live site behavior.
- Contact forms, reCAPTCHA, analytics, embedded podcast links, and login/password routes still point to the original third-party or Siteswan services.
- If the live site changes, rerun the build command above to refresh the mirror.
