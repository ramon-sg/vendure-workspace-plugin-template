# Vendure Internal Plugin Template

## How to Use

Install degit

```bash
yarn global add degit
```

In your terminal, run the following command

```bash
yarn exec degit ramon-sg/vendure-workspace-plugin-template vendure-plugin
cd web
yarn install
```

## Description

This is a template for a plugin for the [Vendure e-commerce framework](https://www.vendure.io/).

It is intended for plugins which are to be **distributed as npm packages**, either publicly or privately. If you are building a one-off plugin for a specific project, it probably makes more sense to simply nest those plugins into the project source, as is demonstrated by the [real-world-vendure folder structure](https://github.com/vendure-ecommerce/real-world-vendure)

Further information on how Vendure plugins can be used can be found in the [vendure.io Plugins documentation](https://www.vendure.io/docs/plugins/).

## e2e Testing

See `src/e2e` for details, run tests with:

```bash
yarn test
```

## GraphQL Codegen

This repository can automatically generate GraphQL types for use in the plugin code (see `src/e2e/plugin.e2e-spec.ts`). To generate the types, ensure the development server is running, and use the command:

```bash
yarn generate-types
```

## Linting

This repository uses [eslint](https://eslint.org/) & [Prettier](https://prettier.io/) for finding and fixing common code issues and formatting your code in a standard way. To identify and fix issues, use the command:

```bash
yarn lint:fix
```

## Admin UI

This repository also implements a basic Admin UI extension, which displays and allows editing of the `Example` entity. These UI screens make use of the `BaseList`, `BaseDetail`, and `BaseResolver` classes, which are helpful for handling CRUD operations.

## Development Server

A development server is configured in the `dev-server` folder, using [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to spin up a Postgres database, as well as a server and worker. This is used to test the plugin during development.

To populate or reset the database, run the following command:

```bash
yarn setup
```

To start the server, run:

```bash
yarn dev
```
