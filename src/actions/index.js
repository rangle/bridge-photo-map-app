import { get } from '../api/request';

export const ACTION_TYPES = {
  getPhotos: 'GET_PHOTOS',
  setselectedPhotoID: 'SET_SELECTED_PHOTO_ID',
};

// Actions
export function getPhotos() {
  return dispatch => {
    get('/photos')
    .then(response => {
      dispatch({
        type: ACTION_TYPES.getPhotos,
        payload: {
          photos: response.photos,
        },
      });
    });
  };
}

export function setselectedPhotoID(selectedPhotoID) {
  return {
    type: ACTION_TYPES.setselectedPhotoID,
    payload: {
      selectedPhotoID,
    },
  };
}
