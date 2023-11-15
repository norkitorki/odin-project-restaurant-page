import css from './style.css';
import mainImageImport from './images/main-image.jpg';
import menuImageImport from './images/menu.jpg';
import facebookLogoImport from './images/facebook.png';
import xLogoImport from './images/x.png';
import linkedinLogoImport from './images/linkedin.png';

import { buildGallery, initGallery } from './gallery.js';

const content    = document.getElementById('content'),
      main       = document.createElement('main'),
      gallery    = buildGallery(8, 'image-gallery');

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

const imageCredit = (author, url) => {
  const div = document.createElement('div'),
          a = document.createElement('a');

  [a.textContent, a.href, a.target] = [author, url, '_blank'];
  div.textContent = 'Image by ';
  div.classList.add('image-credit');
  div.appendChild(a);
  return div;
};

// Main image
const mainImage = document.createElement('img');
mainImage.classList.add('main-image');
mainImage.src = mainImageImport;

// Content wrapper
const wrapper         = document.createElement('div'),
      mainImageCredit = imageCredit('Juli Kosolapova', 'https://unsplash.com/@yuli_superson');
wrapper.appendChild(mainImageCredit);
wrapper.classList.add('main-wrapper');

// Navigation
const navigation = document.createElement('nav');
navigation.classList.add('main-navigation');
navigation.addEventListener('click', pullTemplateContent);
['Home', 'Gallery', 'Menu', 'Book'].forEach(str => {
  let anchor = document.createElement('a');
  anchor.textContent = str;
  anchor.href = '#';
  navigation.appendChild(anchor);
});

// Gallery page
appendElements.call(document.getElementById('gallery').content, gallery);

// Menu page
const menuImage = document.createElement('img'), 
      menuImageCredit = imageCredit('freepik', 'https://www.freepik.com/author/freepik');
menuImage.classList.add('menu-image');
menuImage.src = menuImageImport;
appendElements.apply(document.getElementById('menu').content, [menuImage, menuImageCredit]);

// Book page
const createLabel = (text, input = null) => {
  const label = document.createElement('label');
  label.textContent = text;
  if (input) label.appendChild(input);
  return label;
};

const createInput = (attr = {}) => {
  const input = document.createElement('input');
  Object.entries(attr).forEach(a => input[a[0]] = a[1]);
  return input;
}

const bookP       = document.createElement('p'),
      bookForm    = document.createElement('form'),
      nameInput   = createInput({ type: 'text', required: true }),
      nameLabel   = createLabel('Name', nameInput),
      telInput    = createInput({ type: 'tel', required: true }),
      telLabel    = createLabel('Phone Number', telInput),
      emailInput  = createInput({type: 'email', required: true }),
      emailLabel  = createLabel('Email', emailInput),
      dateInput   = createInput({ type: 'date', required: true }),
      dateLabel   = createLabel('Date', dateInput),
      personInput = createInput({ type: 'number', value: 1, min: 0, max: 8, required: true }),
      personLabel = createLabel('Number of Persons', personInput),
      submitBtn   = createInput({type: 'submit', value: 'Send Request' });

bookP.textContent = 'We would love to have you dine with us. Request a table today!';

appendElements.apply(bookForm, [nameLabel, telLabel, emailLabel, dateLabel, personLabel, submitBtn]);
appendElements.apply(document.getElementById('book').content, [bookP, bookForm]);

// Footer
const footer  = document.createElement('footer'),
      address = document.createElement('div'),
      credit  = document.createElement('div'),
      socials = document.createElement('div'),
      fbLogo  = document.createElement('img'),
      xLogo   = document.createElement('img'),
      liLogo  = document.createElement('img');

socials.classList.add('socials');
fbLogo.src = facebookLogoImport;
xLogo.src  = xLogoImport;
liLogo.src = linkedinLogoImport;
appendElements.apply(socials, [fbLogo, xLogo, liLogo]);

address.textContent = 'Lorem Ipsum street Amsterdam, 00001'
credit.textContent = 'odinrestaurant.com';
appendElements.apply(footer, [address, credit, socials]);

// Add elements to DOM
appendElements.apply(wrapper, [navigation, main]);
appendElements.apply(content, [mainImage, wrapper]);
appendElements.call(document.body, footer);

const homeTemplate = document.getElementById('home').content.cloneNode(true);
main.appendChild(homeTemplate);
