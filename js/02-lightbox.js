import { galleryItems } from './gallery-items.js';
const gallaryContainer = document.querySelector('.gallery');

gallaryContainer.insertAdjacentHTML('beforeend', renderGallery(galleryItems));

function renderGallery(galleryItems) {
  return galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
    ''
  );
}
const lightBox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
