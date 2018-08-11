# Bundling a web app with Rollup

**How to use this repository**

This repo is organized into [commits](https://github.com/lukastaegert/rollup-web-app-intro/commits/master) where each commit represents one step of my little make-shift presentation. Below is a list of what each step was about. You should check out the corresponding commits and take a look! If something does not work, you probably need an `npm install`. The long version of this document can only be found in the last commit, sorry about that!

## ES modules in browser

* Run `npm run serve-src`, check developer tools network tab to see the waterfall.


## Bundle via rollup

* `npx rollup -c` to create bundle
* Run `npm run serve`, check developer tools network tab again. This should be now much faster. Also look at the created bundle and compare it with your code. All module boundaries have vanished! However there is now the danger of unintendedly polluting the global namespace if the bundle is placed in a script tag without `type="module"`. Module script tags are safe however as they create a namespace for each module.

## Wrap bundle as IIFE

* Use bundle without `type="module"` without leaking global variables. Everyhting is wrapped in an Immediately-Invoked-Function-Expression.

## Create a production bundle

* `terser` is a modern JS compatible fork of the (unmaintained) uglify-es

## Add CLI option for a production build

* The CLI flags can be read and edited in the config file. Run `npx rollup -c --production` and compare the output if you do not add the `--production` option.

## Add environment specific config

* `rollup-plugin-alias` can route imports to different files. JSON files allow for nice tree-shaking optimizations but you could also just export variables from any `.js` file.

## Add a frontend framework

* `rollup-plugin-node-resolve` is needed to resolve imports from `node_modules`
* `rollup-plugin-commonjs` is needed to parse commonJS files
* `rollup-plugin-replace` can set `process.env.NODE_ENV` to the correct values

## Add ESM code-splitting

* needs `experimentalCodeSplitting` for now
* no code duplication, no runtime
* only works in modern browsers

## Add fallback for older browsers

* download e.g. SystemJS runtime
* do feature detection
