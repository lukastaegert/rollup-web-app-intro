import {terser} from 'rollup-plugin-terser';
import alias from 'rollup-plugin-alias';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import path from 'path';

export default command => {
  const isProduction = command.production;
  delete command.production;
  return ({
    input: 'src/main.js',
    plugins: [
      json(),
      commonJs({include: 'node_modules/**'}),
      babel({include: 'src/**'}),
      resolve(),
    ].concat(isProduction ? [
      terser(),
      alias({'config.json': path.resolve(__dirname, './config-prod.json'), resolve: ['.json']}),
      replace({
        'process.env.NODE_ENV': '"production"'
      })
    ] : [
      alias({'config.json': path.resolve(__dirname, './config-dev.json'), resolve: ['.json']}),
      replace({
        'process.env.NODE_ENV': '"development"'
      })
    ]),
    output: {
      file: 'dist/bundle.js',
      format: 'iife'
    }
  });
};
