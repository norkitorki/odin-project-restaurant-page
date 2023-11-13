import css from './style.css';
import { buildGallery, initGallery } from './gallery.js';

const content = document.getElementById('content'),
         main = document.createElement('main');

function appendElements(...elements) {
  elements.forEach(el => this.appendChild(el));
};

