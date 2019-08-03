import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import typescript from 'rollup-plugin-typescript2';
import tscompile from 'typescript';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
import { string } from 'rollup-plugin-string';
import json from 'rollup-plugin-json';
import getPreprocessor from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;
const mode = production ? 'production' : (process.env.NODE_ENV || 'development');
const dev = mode === 'development';
const buildDir = production ? 'docs/dist' : 'public/dist';

console.log('mode', mode);

const postcssPlugins = require("./postcss.config.js");
const preprocess = getPreprocessor({
  transformers: {
    postcss: {
      plugins: postcssPlugins(),
    },
  },
});

export default {
  input: 'src/main.ts',
  output: {
    format: 'esm',
    sourcemap: true,
    name: 'app',
    dir: buildDir,
  },
  plugins: [
    replace({
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify(mode),
    }),
    string({
      include: ['**/*.txt', '../smelte/examples/*'],
    }),
    json({
      includes: '**./*.json',
    }),
    svelte({
      dev: dev,
      preprocess,
      css: css => {
        css.write(`${buildDir}/components.css`);
      },
    }),    
    typescript({typescript: tscompile}),
    // resolve({ mainFields: ['svelte', 'module', 'main'] }),
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      plugins: postcssPlugins(!dev),
    }),
    dev && livereload('public'),
    !dev && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
