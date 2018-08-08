import './dependency1.js';
import React from 'react';
import ReactDom from 'react-dom';
import {log} from './logging';

const element = document.createElement('div');
element.innerText = 'main';
document.body.appendChild(element);

ReactDom.render(<h1>Hussah, React!</h1>, element);

log('Main is done!');
