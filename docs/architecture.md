# Architecture

## 1. Overall Analysis

The project has an organizational idea (attempt) but lacks of a proper architecture avoiding essentials such
source (`src`) and public (`public`) folders.

There's also the **[Snowpack Library](https://www.snowpack.dev/)** situation that's making the project rely
on an old and deprecated library, causing unnecessary headaches on the future when mainting the project.

## 2. Development Environment

Since the project relies on an old and depreacted library called **[Snowpack](https://www.snowpack.dev/)**
it is necessary to replace it in favor of a modern one and for that I belive **[Vite](https://vite.dev/)**
is the best option.

### Why Vite instead of Next?

1. It is lightweight.
2. It is perfect for a SPA (Single Page App).
3. It has minimal requirements when transitioning from **Snowpack**.

### What happens with Babel?

Since **Vite** uses **esbuild** for transpilation is not necessary to rely anymore on **Babel**. I reviewed
the code and there's no plugin that relies on it so it's safe to remove it from the project.

## 3. Folder Structure

The project tries to organize the files by groups (separation of concerns): components, fonts, utils, etc.
However, despite the intention, it lacks of a proper structure and looks disorganized becoming a problem
when the project grows.

To resolve this, I'm going to follow **SOLID Principles** to ensure the logic behind the project gets standardized,
this will also ensure new developers can get onboarded faster. In addition to that, I will also implement an
**Atomic Design** methodology to ensure components are correctly organized and everything is reusable. I will also
follow a **TDD Methodology** to ensure every piece of code is properly tested.

To begin with the improvements is important to re-locate the development files inside a `src` folder and all raw/public
files inside `public` folder.

Here's a breakdown of every step I took:

1. Create a `src` folder and move inside: `__mocks__`, `components`, `fonts`, and `utils` folders, as well as `basscss.css`,
`index.css`, and `index.jsx` files.
2. Create a `public` folder and ensure to move inside any raw/public files (when available).

## 4. Atomic Design

To ensure the components can be reusable I opt to follow an **Atomic Design** methodoly ensuring to organize each
component by level of abstraction.

For the next step is important to review the files and identify the reused components to abstract them into its
own file. That's an easy process when reviewing the UI (rendered view) and visually identify the parts of the app.


## 5. Lint and Format

With the code well structured before doing more changes, is better to install Linters in order to analyze the code
and flag potential issues.

For that, I will rely on **ESLint** and **Stylelint** to check on the logic but will integrate them with **Prettier**
to ensure a consistent formatting everywhere.

To ensure a consistent formatting across the app, I will rely on **Prettier** and configure some basic rules for the
project.

Currently, that dependency is installed but using an old version, so the first thing to do is to upgrade the package.
Then, since the configurations file is missing, I will create `prettier.config.js` file and start applying formatting
rules for app and some overwrites for the specific files.

Once linters and formatters are properly installed and configured, is important to run:
1. `npm run format` to format all files
2. `npm run lint` to check on code insconsistencies

## 6. Testing

The project was relying on **Jest** for testing, but since **Vite** was installed is better to leverage that opportunity
and use **Vitest** instead.

For that will be necessary to:
1. Uninstall `jest` package.
2. Install `vitest` package.
3. Replace `test` and `test-watch` scripts to use `vitest`.
4. Update test files to include `import { describe, it, expect } from "vitest";`.
5. In the case of `App.test.jsx` file, I also need to:
  5.1. Replace `jest.mock` with `vi.mock`.
  5.2. Point `@testing-library/jest-dom` to `vitest` by adding `/vitest` at the end of that line.

Also, ensure to configure **Vitest** to simulate a browser by adding `jsdom` as test environment:
```js
test: {
  environment: "jsdom",
},
```

While testing I found some issues to resolve such:
1. The need to create a global test setup file.
2. The test environment in vite configurations is missing.
3. Incorrectly imported components.
4. Errors in the `App.test.tsx` file to resolve.

## 7. Styles

The project uses **[BassCSS](https://basscss.com/#getting-started)** with direct link to a file in `src/styles/` folder;
however, this is just a copy-paste from the minified file causing unnecessary additional support on it.

To resolve that I will `npm i basscss` and import it directly in the `App` component. Then, remove the current `basscss.css`
file, since it is no longer needed.

For the `index.css` file, let's keep it under `src/styles/` folder, just this time, remove its HTML link and import it inside
the `App.jsx` file directly.

## 8. Utils

At this point is necessary to review and analyze the files under `src/utils/` folder to improve its reusability and readability,
making it comply with SOLID principles.

### `chart.js`

