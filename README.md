# lifesciences-framework: A visual and UX framework for the life sciences
Leverage tooling and lessons learned at EMBL-EBI to build better websites and services for the life sciences.

## About

This project is a boilerplate template for projects that would like to leverage the patterns and lessons learned in the [EBI Visual framework](https://github.com/ebiwd/EBI-Framework/) and need to heavily modify that package's look and feel.

## Getting started

You'll need to use npm to develop with this.

`npm install`

### 1. Customise

Edit the `.scss` files in `/scss`

### 2. Build, develop

- `npm run sass:build`: build the sass into `./css/app.css`
- `npm run sass:watch`: watch for changes to the sass files nad run `sass:build`
- `npm run devel`: watch for changes and serve them via browser-sync
