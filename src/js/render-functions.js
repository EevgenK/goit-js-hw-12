import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const render = (element, obj) => {
  const markup = obj
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        
        <ul class="info-list">
          <li class="info-item"><b>Likes</b>
          <span>${likes}</span></li>
          <li class="info-item"><b>Views</b>
          <span>${views}</span></li>
          <li class="info-item"><b>Comments</b>
          <span>${comments}</span></li>
          <li class="info-item"><b>Downloads
          <span></b>${downloads}</span></li>
        </ul>
        </a>
      </li>`
    )
    .join('');
  element.innerHTML = markup;
};
const renderLoader = element => {
  const markup = `<span class="loader visible"></span>`;
  element.insertAdjacentHTML('afterend', markup);
};
const clearMarkup = element => (element.innerHTML = '');
const errorMessege = str =>
  iziToast.warning({
    message: str,
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: '#FAFAFB',
    iconUrl:
      'https://raw.githubusercontent.com/EevgenK/goit-js-hw-11/main/src/img/error.png',
    messageSize: '16px',
    messageLineHeight: '24px',
    maxWidth: '432px',
    theme: 'dark',
  });

export { render, clearMarkup, renderLoader, errorMessege };
