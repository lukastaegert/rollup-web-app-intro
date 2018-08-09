import {terser} from 'rollup-plugin-terser';
import alias from 'rollup-plugin-alias';
import json from 'rollup-plugin-json';
import path from 'path';

export default command => {
  const isProduction = command.production;
  delete command.production;
  return ({
    input: 'src/main.js',
    plugins: [json()]. concat(isProduction ? [
      terser(),
      alias({'config.json': path.resolve(__dirname, './config-prod.json'), resolve: ['.json']})
    ] : [
      alias({'config.json': path.resolve(__dirname, './config-dev.json'), resolve: ['.json']})
    ]),
    output: {
      file: 'dist/bundle.js',
      format: 'iife'
    }
  });
};
