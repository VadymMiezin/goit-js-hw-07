import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const imagesSet = galleryItems
  .map(function ({ preview, original, description }) {
    return `<a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} alt="${description}"></a>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", imagesSet);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
