# AOM Virtual Lab

Interactive 3D virtual lab for acousto-optic modulation (Vite + React + Three.js).

## Live demo (GitHub Pages)

After Pages is enabled, the app is at:

**https://gefsd1-design.github.io/AOM-Virtual-Lab-Updated/**

### One-time: enable GitHub Pages (required for the live site)

After the first successful workflow run, a `gh-pages` branch is created. Then:

1. Open [Repository Settings → Pages](https://github.com/gefsd1-design/AOM-Virtual-Lab-Updated/settings/pages)
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. **Branch:** `gh-pages` · **Folder:** `/ (root)` · **Save**
4. Wait 1–2 minutes, then open the live URL above

Pushes to `main` rebuild and update the site automatically.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173/AOM-Virtual-Lab-Updated/ (base path matches GitHub Pages).

```bash
npm run build
npm run preview
```
