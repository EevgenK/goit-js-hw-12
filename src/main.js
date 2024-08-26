import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPixabayApi } from './js/pixabay-api';
import {
  render,
  clearMarkup,
  renderLoader,
  errorMessege,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});

const onSearch = e => {
  e.preventDefault();
  const targetForm = e.currentTarget;
  const searchedEl = targetForm.input.value.trim();
  console.log('str', searchedEl);
  if (!searchedEl) {
    return errorMessege(
      `There's nothing to search. Please, type the query target first!`
    );
  }
  renderLoader(refs.form);
  const loader = document.querySelector('.loader');
  clearMarkup(refs.gallery);
  getPixabayApi(searchedEl)
    .then(({ hits }) => {
      if (hits.length > 0) {
        render(refs.gallery, hits);
        lightbox.refresh();
      } else {
        errorMessege(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
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
