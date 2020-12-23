# MattManzi.com

_Frontend UI_

This repository compiles into the relevant frontend resources needed for my personal website at [mattmanzi.com](https://mattmanzi.com).

## General Usage

Initially, run

```
npm install
```

to download all dependencies needed and setup the project.

To build the project for local development with hot-reloads, run:

```
npm run local
```

or for minified production code, run:

```
npm run build
```

To update the version string of the UI, please run:

```
npm version [major|minor|patch]
```

## Other Useful `npm` Commands

- `npm run lint` to independently lint code
- `npm run build --report` to report statistics on the build
- `rm -r ./dist/` to remove the build folder
