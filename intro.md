# Bundling a web app with Rollup

## ES modules in browser

* Run `npm run serve-src`, check developer console for network waterfall


## Bundle via rollup

* `npx rollup -c` to create bundle
* Run `npm run serve`, check developer console for network waterfall

## Wrap bundle as IIFE

* Use bundle without `type="module"` without leaking global variables
