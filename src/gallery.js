import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const buildGallery = (imageCount, elementId) => {
  const container = document.createElement('div');
  container.id = elementId;
  const baseUrl = 'https://source.unsplash.com/random/1280x720/?restaurant/?sig=';
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
    container.appendChild(anchor);
  }

  return container;
};

const initGallery = (gallery) => {
  new PhotoSwipeLightbox({
    gallery: `#${gallery.id}`,
    children: 'a',
    pswpModule: () => import('photoswipe'),
  }).init();
};

export { buildGallery, initGallery };
