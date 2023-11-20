import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const buildGallery = (imageCount, elementId) => {
  const gallery   = document.createElement('div'),
        baseUrl   = 'https://source.unsplash.com/random/1280x720/?restaurant/?sig=';

  gallery.id = elementId;
  let anchor, previewImage;

  for(let i = 1; i <= imageCount; i++) {
    anchor = document.createElement('a');
    anchor.href = `${baseUrl}${i}`;
    anchor.dataset["pswpWidth"] = '1280';
    anchor.dataset["pswpHeight"] = '720';
    anchor.target = '_blank';

    previewImage = document.createElement('img');
    previewImage.src = anchor.href;
    previewImage.width = '320';
    
    anchor.appendChild(previewImage);
    gallery.appendChild(anchor);
  }

  return gallery;
};

const initGallery = (gallery) => {
  new PhotoSwipeLightbox({
    gallery: `#${gallery.id}`,
    children: 'a',
    pswpModule: () => import('photoswipe'),
  }).init();
};

export function galleryTemplate() {
  const heading = document.createElement('h1'),
        gallery = buildGallery(8, 'main-gallery');

  heading.classList.add('heading');
  heading.textContent = 'Gallery';

  [heading, gallery].forEach(el => this.appendChild(el));
  initGallery(gallery);
};
