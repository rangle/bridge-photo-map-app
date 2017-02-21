import { get } from '../api/request';

export const ACTION_TYPES = {
  getPhotos: 'GET_PHOTOS',
  setSelectedPhotoID: 'SET_SELECTED_PHOTO_ID',
  showInfoWindow: 'SHOW_INFO_WINDOW',
  setActiveMarker: 'SET_ACTIVE_MARKER',
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

export function setSelectedPhotoID(selectedPhotoID) {
  return {
    type: ACTION_TYPES.setSelectedPhotoID,
    payload: {
      selectedPhotoID,
    },
  };
}

export function showInfoWindow(bool) {
  return {
    type: ACTION_TYPES.showInfoWindow,
    payload: {
      showingInfoWindow: bool,
    },
  };
}

export function setActiveMarker(activeMarker) {
  return {
    type: ACTION_TYPES.setActiveMarker,
    payload: {
      activeMarker,
    },
  };
}
