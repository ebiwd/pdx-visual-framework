# pdx-visual-framework
The CSS and JS front-end framework for PDX Finder. Based on the [Life sciences framework](https://github.com/ebiwd/Lifesciences-framework).

## Getting started

You'll need to use npm to develop with this.

### 1. Install

Clone this repo and run `npm install`

### 2. Customise

Edit the `.scss` files in `/scss`

### 3. Build

- `npm run sass:build`: build the sass into `./css/app.css`
- `npm run sass:watch`: watch for changes to the sass files and run `sass:build`
- `npm run devel`: watch for changes and serve them via browser-sync

### 4. Deploy

- Option 1, manual: Once you generate your css assets, you'll need to put them somewhere to use them.
- Option 2, automatic: This repo is currently configured to use Travis CI. The sass will be automatically compiled and the CSS will be pushed to the gh-pages branch.

## Roadmap

- 0.1: Initial proof of concept
- 0.2: Integrate final version of PDX conceptual design
