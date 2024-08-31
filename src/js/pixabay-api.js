import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const getPixabayApi = async (request, pageNumber, renderdElems = 15) => {
  try {
    const resp = await axios.get('', {
      params: {
        key: '45547752-43a0cb06c467be16aeef39c83',
        q: request,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: renderdElems,
        page: pageNumber,
      },
    });
    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
};

export { getPixabayApi };
