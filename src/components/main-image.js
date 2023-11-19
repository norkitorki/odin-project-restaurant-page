import mainImageImport from '../images/main-image.jpg';
import mainImageSmall from '../images/main-image-small.jpg';
import { imageCredit } from './image-credit';

export function createMainImage() {
  const picture    = document.createElement('picture'),
        source = document.createElement('source'),
        image      = document.createElement('img');

  source.srcset = mainImageSmall;
  source.media = '(max-width: 1050px)';

  const div = imageCredit('Juli Kosolapova', 'https://unsplash.com/@yuli_superson');
  
  image.src = mainImageImport;
  image.alt = 'a narrow alleyway with tables and chairs';

  [source, image, div].forEach(el => picture.appendChild(el));

  return picture;
};
