# AOM Virtual Lab (3D Acousto-Optic Modulator Experiments)

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

## Overview

This project is an interactive **3D Acousto-Optic Modulator (AOM) Virtual Lab** that helps visualize key diffraction and modulation concepts through a guided set of **20 experiments**.

## Features

🎛️ Real-time experiment selection with guided objectives and procedures  
🧠 Live calculations for AOM concepts (e.g., Bragg angle, efficiency, rise time)  
🧩 Interactive 3D bench (laser diode, mirrors, lens elements, AOM module, detector, RF driver)  
📈 Oscilloscope-style modulation visualization when modulation is enabled  
⚡ Immediate UI/3D updates based on slider controls and toggles

## Tech Stack

| Component | Technology |
|---|---|
| Frontend | React (with hooks) |
| 3D | `@react-three/fiber`, `@react-three/drei`, `three` |
| Styling | Tailwind CSS |
| State | Zustand |
| Charts | Recharts |
| Build/Serve | Vite |

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Then open:
http://localhost:5173/AOM-Virtual-Lab-Updated/

## Production

```bash
npm run build
npm run preview
```

## Project Structure

```text
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx       # React entry point
│   ├── App.jsx        # Virtual lab scene + experiment UI
│   └── store.js       # Zustand store (laser/RF/modulation state)
└── index.css
``` 

## How to Use (Quick Start)

1. Click **Enter Laboratory**.
2. Pick an experiment from the **Select Experiment** dropdown.
3. Toggle the **Laser** power.
4. Adjust available parameters (RF Frequency, RF Power, Modulation Freq, Beam Diameter).
5. Observe the 3D beam behavior and the **Power Meter / Oscilloscope** overlay update live.

## Notes

This is an educational simulation/visualization tool designed to demonstrate AOM theory and experiment workflows in an interactive way.

📬 Contact: theerthamrajasri@gmail.com
