import { defineConfig, globalIgnores } from 'eslint/config'

import next from 'eslint-config-next'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  ...next,
  { rules: { 'react/no-unescaped-entities': 'off' } },
  prettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
])
