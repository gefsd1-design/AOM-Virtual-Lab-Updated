# AOM Virtual Lab

Interactive 3D virtual lab for acousto-optic modulation (Vite + React + Three.js).

## Live demo (GitHub Pages)

After Pages is enabled, the app is at:

**https://gefsd1-design.github.io/AOM-Virtual-Lab-Updated/**

### One-time: enable GitHub Pages (required for deploy)

If the **deploy** workflow fails on the Deploy step, Pages is not turned on yet:

1. Open [Repository Settings → Pages](https://github.com/gefsd1-design/AOM-Virtual-Lab-Updated/settings/pages)
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Re-run the failed workflow: **Actions** → latest run → **Re-run all jobs**

Pushes to `main` will then build and publish automatically.

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
