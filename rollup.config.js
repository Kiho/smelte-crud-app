import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from '@wessberg/rollup-plugin-ts';
import sveltePreprocess from 'svelte-preprocess';
import { postcssProcessor as smelte } from "smelte/rollup-plugin-smelte";
// const smelte = require("smelte/rollup-plugin-smelte");
const path = require("path");

const production = !process.env.ROLLUP_WATCH;
const mode = production ? 'production' : (process.env.NODE_ENV || 'development');
const dev = mode === 'development';
const buildDir = production ? 'docs/dist' : 'public/dist';

export default {
	input: 'src/main.ts',
	output: {
    format: 'esm',
    sourcemap: !production,
    name: 'app',
    dir: buildDir,
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
      dev: !production,
      preprocess: sveltePreprocess({
        postcss: {
          plugins: smelte({
            purge: production,
            output: path.resolve(`${buildDir}/smelte.css`), // it defaults to static/global.css which is probably what you expect in Sapper
            postcss: [], // Your PostCSS plugins
            whitelist: [], // Array of classnames whitelisted from purging
            whitelistPatterns: [], // Same as above, but list of regexes
            tailwind: {
              colors: {
                primary: "#b027b0",
                secondary: "#009688",
                error: "#f44336",
                success: "#4caf50",
                alert: "#ff9800",
                blue: "#2196f3",
                dark: "#212121"
              }, // Object of colors to generate a palette from, and then all the utility classes
              darkMode: true,
            }, // Any other props will be applied on top of default Smelte tailwind.config.js
          })
        },
      }),
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write(`${buildDir}/components.css`);
      }
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
    commonjs(),
    typescript({}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
