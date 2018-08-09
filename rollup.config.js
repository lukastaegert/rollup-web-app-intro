import {terser} from 'rollup-plugin-terser';

export default command => {
  const isProduction = command.production;
  delete command.production;
  return ({
    input: 'src/main.js',
    plugins: isProduction ? [terser()] : [],
    output: {
      file: 'dist/bundle.js',
      format: 'iife'
    }
  });
};
