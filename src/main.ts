/*
 * This is the entrypoint of all the JavaScript files.
 */

import App from './app/app/app.svelte';
import * as config from './config';
import "smelte/src/tailwind.css";

config.init();

const app = new App({
    target: document.querySelector('#app-root'),
});
