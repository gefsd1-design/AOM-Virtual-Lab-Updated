import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// GitHub Pages serves at https://<user>.github.io/<repo-name>/
const repoName = 'AOM-Virtual-Lab-Updated'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})

