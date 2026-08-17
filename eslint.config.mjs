import coreWebVitals from 'eslint-config-next/core-web-vitals'

// Next 16 removed `next lint`, so eslint runs directly. eslint-config-next 16 ships
// a native flat config, which replaces the previous .eslintrc.json that extended
// "next/core-web-vitals".
const config = [
  {
    ignores: ['.next/**', 'out/**']
  },
  ...coreWebVitals
]

export default config
