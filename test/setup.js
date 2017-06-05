import { JSDOM } from 'jsdom'; // only required for full dom rendering (mount)
import { noop } from 'lodash'

//mocha doesn't understand webpack loaders
//alternatively, install npm install --save-dev ignore-styles
require.extensions['.css'] = noop
require.extensions['.less'] = noop
require.extensions['.scss'] = noop


const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window, window: { document } } = jsdom;
global.document = document;
global.window = window;
global.navigator = window.navigator
