import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPixabayApi } from './js/pixabay-api';
import {
  render,
  clearMarkup,
  renderLoader,
  errorMessege,
  makeVisible,
  makeUnvisible,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadBtn: document.querySelector('.load'),
};
let page = 1;
let searchedEl = '';
let loader;
const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
const checkingGetApiResult = arr => {
  if (arr.length > 0) {
    render(refs.gallery, arr);
    lightbox.refresh();
  } else {
    errorMessege(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }
};

const onLoadBtnClick = e => {
  page += 1;
  makeVisible(loader);
  getPixabayApi(searchedEl, page)
    .then(({ hits }) => checkingGetApiResult(hits))
    .catch(err =>
      errorMessege('Ooops... Something go wrong. Please, try again later')
    )
    .finally(() => {
      makeUnvisible(loader);
    });
};
const onSearch = e => {
  e.preventDefault();
  makeUnvisible(refs.loadBtn);
  const targetForm = e.currentTarget;
  searchedEl = targetForm.input.value.trim();

  if (!searchedEl) {
    return errorMessege(
      `There's nothing to search. Please, type the query target first!`
    );
  }
  renderLoader(refs.loadBtn);
  loader = document.querySelector('.loader');
  clearMarkup(refs.gallery);
  getPixabayApi(searchedEl)
    .then(({ hits }) => checkingGetApiResult(hits))
    .then(() => {
      makeVisible(refs.loadBtn);
      refs.loadBtn.addEventListener('click', onLoadBtnClick);
    })
    .catch(err =>
      errorMessege('Ooops... Something go wrong. Please, try again later')
    )
    .finally(() => {
      loader.classList.remove('visible');
      targetForm.reset();
    });
};

refs.form.addEventListener('submit', onSearch);
