# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command builds and serves all locales together, so both `http://localhost:3000/` (English) and `http://localhost:3000/vi/` (Vietnamese) are available.

If `/vi/` appears blank after switching scripts, do a hard refresh (`Ctrl+F5`) to clear stale browser assets.

For live-reload development in English only:

```bash
yarn start:en
```

For live-reload development in Vietnamese only:

```bash
yarn start:vi
```

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
