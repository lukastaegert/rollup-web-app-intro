# Bundling a web app with Rollup

## ES modules in browser

* Run `npm run serve-src`, check developer console for network waterfall


## Bundle via rollup

* `npx rollup -c` to create bundle
* Run `npm run serve`, check developer console for network waterfall

## Wrap bundle as IIFE

* Use bundle without `type="module"` without leaking global variables

## Create production bundle

* `terser` is a modern JS compatible fork of the (unmaintained) uglify-es

## Add CLI option for a production build

* The CLI flags can be read and edited in the config file

## Add environment specific config

* `rollup-plugin-alias` can route imports to different files. JSON files allow for nice tree-shaking optimizations

## Add a frontend framework

* `rollup-plugin-node-resolve` is needed to resolve imports from `node_modules`
* `rollup-plugin-commonjs` is needed to parse commonJS files
* `rollup-plugin-replace` can set `process.env.NODE_ENV` to the correct values

## Add ESM code-splitting

* needs `experimentalCodeSplitting` for now
* no code duplication, no runtime
* only works in modern browsers
