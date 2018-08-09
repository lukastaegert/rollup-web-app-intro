import {showLogs} from 'config.json';

export const log = (...args) => showLogs && console.log(...args);
