import css from './style.css';
import { buildGallery, initGallery } from './gallery.js';

const content = document.getElementById('content'),
         main = document.createElement('main');

function appendElements(...elements) {
  elements.forEach(el => this.appendChild(el));
};

const pullTemplateContent = (e) => {
  if (e.target.nodeName !== 'A') return;

  const targetId = e.target.textContent.toLowerCase();
  const template = document.getElementById(targetId).content.cloneNode(true);
  main.innerHTML = '';
  main.appendChild(template);
  if (targetId === 'gallery') {
    initGallery(gallery);
  }
};

