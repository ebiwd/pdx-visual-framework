# lifesciences-framework: A visual and UX framework for the life sciences
Leverage tooling and lessons learned at EMBL-EBI to build better websites and services for the life sciences.

## Note

This is a very early conceptual prototype. At the moment it only generates CSS assets.

At the moment the logic revolves around EMBL-EBI's needs, but we're partitioning those out.

If you're interested in being part of this effort, e-mail khawkins [at] ebi.ac.uk

## About

This project is a boilerplate template for projects that would like to leverage the patterns and lessons learned in the [EBI Visual framework](https://github.com/ebiwd/EBI-Framework/) and need to heavily modify that package's look and feel.

By using this framework, you'll be using a design solution that (will hopefully) be more common in life science projects and you'll be able to make use of lessons learn and specific patterns for our problem spaces.

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

Once you generate your css assets, you'll need to put them somewhere to use them.


## Roadmap

- 0.1: Initial proof of concept
- 0.5: Move sass component into this project
- 0.9: Power the EBI Visual Framework with this repo (right now it's the inverse where this consumes the Framework)
