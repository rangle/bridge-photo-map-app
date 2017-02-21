import { get } from '../api/request';

export const ACTION_TYPES = {
  getPhotos: 'GET_PHOTOS',
  setSelectedPhotoID: 'SET_SELECTED_PHOTO_ID',
  showInfoWindow: 'SHOW_INFO_WINDOW',
  setActiveMarker: 'SET_ACTIVE_MARKER',
  searchPhotos: 'SEARCH_PHOTOS',
  handleInput: 'HANDLE_INPUT',
};

// This handles loading photos on mount. Temporary.
export function getPhotos() {
  return dispatch => {
    get('/photos', {feature: 'popular', image_size: 440})
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

// This updates the search state on input change so that we can access it when we call searchPhotos below.
export function handleInput(keyword) {
  return dispatch => {
    dispatch({
      type: ACTION_TYPES.handleInput,
      payload: {
        keyword: keyword,
      },
    });
  };
}

// In photo-gallery.js, we pass the keyword stored in the state to the searchPhotos function.
export function searchPhotos(keyword) {
  return dispatch => {
    get('photos/search', {term: keyword, image_size: 440})
    .then(response => {
      dispatch({
        type: ACTION_TYPES.searchPhotos,
        payload: {
          search: response.photos,
          status: true,
        },
      });
    });
  };
}
