import { galleryItems } from './gallery-items.js';
const gallaryContainer = document.querySelector('.gallery');

const renderGallery = galleryItems =>
  galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src='${preview}'
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
    ''
  );

gallaryContainer.insertAdjacentHTML('afterbegin', renderGallery(galleryItems));
gallaryContainer.addEventListener('click', onGallaryItemClick);

function onGallaryItemClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const originalImg = basicLightbox.create(
    `
        <img src=${event.target.dataset.source} alt="${event.target.alt}"/>,
        
	`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscKeyClick);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscKeyClick);
      },
    }
  );
  originalImg.show();

  function onEscKeyClick(e) {
    if (e.code === 'Escape') {
      originalImg.close();
    }
  }
}
