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

// Main image
const mainImage = document.createElement('img');
mainImage.classList.add('main-image');
mainImage.src = '../src/images/juli-kosolapova-q_jKuy-cURg-unsplash.jpg';

// Content wrapper
const wrapper = document.createElement('div');
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
const gallery = buildGallery(8, 'image-gallery');
appendElements.call(document.getElementById('gallery').content, gallery);

// Menu page
const menuImage = document.createElement('img'), menuGallery = document.createElement('div');
menuImage.classList.add('menu-image');
menuImage.src = '../src/images/menu.jpg';
appendElements.call(document.getElementById('menu').content, menuImage);

// Book page
const createLabel = (text, input = nil) => {
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
fbLogo.src = '../src/images/facebook.png';
xLogo.src  = '../src/images/logo.svg';
liLogo.src = '../src/images/linkedin.png';
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
