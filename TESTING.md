# Running tests

This project uses Vitest + React Testing Library for unit tests.

1. Install dev dependencies (run in project root):

```bash
# using npm
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react

# or using pnpm
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react

# or using yarn
yarn add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react
```

2. Add the following scripts to your `package.json` under "scripts":

```json
"test": "vitest",
"test:ui": "vitest --ui",
"test:coverage": "vitest run --coverage"
```

3. Run tests:

```bash
npm run test
# or
npm run test:ui
# to get coverage
npm run test:coverage
```

Notes:
- The Vitest config file (`vitest.config.ts`) has `environment: 'jsdom'` and points to `src/setupTests.ts` for setup.
- If TypeScript complains about Vitest globals, add `"types": ["vite/client", "vitest/globals"]` to the `compilerOptions` -> `types` array in `tsconfig.json`.
