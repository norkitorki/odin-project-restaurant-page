import css from './stylesheets/style.css';
import { createMainImage } from './components/main-image';
import { createNav, createNavItem } from './components/nav';
import { createFooter } from './components/footer';
import { homeTemplate } from "./pages/home";
import { galleryTemplate } from './pages/gallery';
import { menuTemplate } from './pages/menu';
import { reservationTemplate } from './pages/reservation';

const content    = document.getElementById('content'),
      main       = document.createElement('main'),
      navigation = createNav('navigation'),
      footer     = createFooter('footer'),
      mainImage  = createMainImage();

createNavItem.call(navigation, 'Home',        main, homeTemplate);
createNavItem.call(navigation, 'Gallery',     main, galleryTemplate);
createNavItem.call(navigation, 'Menu',        main, menuTemplate);
createNavItem.call(navigation, 'Reservation', main, reservationTemplate);

[mainImage, navigation, main, footer].forEach(el => content.appendChild(el));
homeTemplate.call(main);
