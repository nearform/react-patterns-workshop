import coreWebVitals from 'eslint-config-next/core-web-vitals'

// Next 16 removed `next lint`, so eslint runs directly. eslint-config-next 16 ships
// a native flat config, which replaces the previous .eslintrc.json that extended
// "next/core-web-vitals".
const config = [
  {
    // `next lint` only walked app/pages/components/lib/src. `eslint .` walks the whole
    // tree, so generated output at the repo root has to be excluded explicitly.
    // `dist/**` is the slidev build output (`npm run slides:build`).
    ignores: ['.next/**', 'out/**', 'dist/**']
  },
  ...coreWebVitals
]

export default config
