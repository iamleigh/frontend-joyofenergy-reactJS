# Package File

## Overall Analysis

The file at first glance looks fine since we're inspecting a very simple app. It has a simple
structure and is based in **ReactJS**. There's no trace of **TypeScript** installed anywhere.

However, there's a clear miss on declaring the type of module letting Node assume this is a
`CommonJS` project. In order to resolve that, is better to include it:
```json
"type": "module"
```

## Contributors

The package lists all the contributors in the app, which is correct since every member in the
team should be recognized by its contribution to the project.

However, I would encourage my team to detail their `contributors` data in the list by including:
`name`, `email`, and `url` (in case they have a website). I found most developers care more about
the product they build by having this sense of ownership when disclosing their data as recognition.

## Dependencies

There are a couple of things that call my attention regarding the project dependencies:

1. The project relies in **Snowpack**, an outdated library that's no longer under maintenance which
might incur in security risks and some maintenance headaches in the future. Instead, I would transition
the project into **Vite**.

2. There's a `@types/jest` package installed as a dev dependency; however, the project does not support
TypeScript, so the package is unnecessary. Either migrate the project to **TypeScript** or remove the
dependency from the project.

3. The `@babel/preset-env` and `@babel/preset-env` packages should be installed under `devDependencies`
because these are only used during development.

4. ⚠️ According to the [README.md](../README.md) file the project uses [BassCSS](https://basscss.com/#getting-started);
however, there's no trace of any package related installed. So it should either was intalled through CDN Link
or there's nowhere in the project causing a possible break in the UI.

5. There's a version mismatch between `babel-jest` and `jest` which might cause compatibility issues and
potentially stop **Jest** from running. In order to resolve it, both should be using the same major version,
either: v26+ or v27+

6. There's `prettier` installed but the configurations are missing. However, since this is important for the
project I will keep to setup configurations later.

## Engines

Based on the [README.md](../README.md) file the project requires **Node 18 or higher** version; however,
the `package.json` file says the contrary, since the `engine` for `node` version is using a **caret range**
(`^`) instead of **greater than** (`>`) or **equal to** (`=`) symbols.

We should either replace the caret with a greater than and equal to symbols or update the [README.md](../README.md)
file to disclose the constraints of the Node version to use:

```md
## Replace this text:
The project requires Node v18 or higher.

## With this text:
The project requires any Node version within the 18.x.x range.
```