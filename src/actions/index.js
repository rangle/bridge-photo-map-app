import { get } from '../api/request';

export const ACTION_TYPES = {
  getPhotos: 'GET_PHOTOS',
};

// Action
export function getPhotos() {
  return function(dispatch) {
    get('/photos')
    .then(response => {
      console.log(response.photos);
      dispatch({
        type: ACTION_TYPES.getPhotos,
        payload: {
          photos: response.photos,
        },
      });
    });
  };
}
