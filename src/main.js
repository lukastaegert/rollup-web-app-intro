import './dependency1.js';
import {log} from './logging';

const element = document.createElement('div');
element.innerText = 'main';
document.body.appendChild(element);

log('Main is done!');
