import { imageCredit } from "../components/image-credit";
import menuImage from '../images/menu.jpg';

export function menuTemplate() {
  const heading = document.createElement('h1'),
        image   = document.createElement('img'), 
        credit  = imageCredit('freepik', 'https://www.freepik.com/author/freepik');

  heading.classList.add('heading');
  heading.textContent = 'Menu';

  image.classList.add('menu-image');
  image.src = menuImage;

  [heading, image, credit].forEach(el => this.appendChild(el));
};
