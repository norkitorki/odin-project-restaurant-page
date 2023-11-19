import facebookLogoImport from '../images/facebook.png';
import xLogoImport from '../images/x.png';
import linkedinLogoImport from '../images/linkedin.png';

export function createFooter(clazz) {
  const footer  = document.createElement('footer'),
        address = document.createElement('div'),
        credit  = document.createElement('div'),
        socials = document.createElement('div'),
        fbLogo  = document.createElement('img'),
        xLogo   = document.createElement('img'),
        liLogo  = document.createElement('img');

  if (clazz) footer.classList.add(clazz);
  
  socials.classList.add('socials');
  fbLogo.src = facebookLogoImport;
  xLogo.src  = xLogoImport;
  liLogo.src = linkedinLogoImport;

  [fbLogo, xLogo, liLogo].forEach(el => socials.appendChild(el));

  address.textContent = 'Lorem Ipsum street Amsterdam, 00001'
  credit.textContent = 'odinrestaurant.com';

  [address, credit, socials].forEach(el => footer.appendChild(el));

  return footer;
};
