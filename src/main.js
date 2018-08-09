import React from 'react';
import ReactDom from 'react-dom';
import {log} from './logging';

const element = document.createElement('div');
element.innerText = 'main';
document.body.appendChild(element);

ReactDom.render(<h1 className="main-element">Hussah, React!</h1>, element);

setTimeout(() => import('./dependency1.js'), 2000);

log('Main is done!');
