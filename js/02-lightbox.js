import { galleryItems } from './gallery-items.js';
const gallaryContainer = document.querySelector('.gallery');

const renderGallery = galleryItems =>
  galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
    ''
  );
gallaryContainer.insertAdjacentHTML('afterbegin', renderGallery(galleryItems));
gallaryContainer.addEventListener('click', onGallaryItemClick);

function onGallaryItemClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}
