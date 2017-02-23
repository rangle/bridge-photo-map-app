import { get } from '../api/request';

export const ACTION_TYPES = {
  getPhotos: 'GET_PHOTOS',
  setSelectedPhotoID: 'SET_SELECTED_PHOTO_ID',
  showInfoWindow: 'SHOW_INFO_WINDOW',
  setActiveMarker: 'SET_ACTIVE_MARKER',
  searchPhotos: 'SEARCH_PHOTOS',
  handleInput: 'HANDLE_INPUT',
  getPhotoDetails: 'PHOTO_DETAILS',
  getRelatedPhotos: 'GET_RELATED_PHOTOS',
  getCurrentLocation: 'GET_CURRENT_LOCATION',
};

// This handles loading photos on mount. Temporary.
export function getPhotos() {
  return dispatch => {
<<<<<<< HEAD
    get('/photos', {feature: 'popular', image_size: [440, 1]})
=======
    get('/photos', {feature: 'popular', image_size: [1, 440]})
>>>>>>> getCurrentLocation action
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
        status: false, // Prevents state keyword from showing on type after first search.
      },
    });
  };
}

// In photo-gallery.js, we pass the keyword stored in the state to the searchPhotos function.
export function searchPhotos(keyword) {
  return dispatch => {
<<<<<<< HEAD
    get('photos/search', {term: keyword, image_size: [440, 1]})
=======
    get('photos/search', {term: keyword, image_size: [1, 440]})
>>>>>>> getCurrentLocation action
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

export function getRelatedPhotos() {
  return dispatch => {
    get('/photos/search', { geo: '43.6532,-79.3832,1km' })
    .then(response => {
      dispatch({
        type: ACTION_TYPES.getRelatedPhotos,
        payload: {
          photos: response.photos,
        },
      });
    });
  };
}

export function getCurrentLocation() {
  return dispatch => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( geoposition => {
        const {latitude, longitude} = geoposition.coords;
        dispatch({
          type: ACTION_TYPES.getCurrentLocation,
          payload: {
            coords: {
              lat: latitude,
              lng: longitude,
            },
          },
        });
      });
    } else {
      dispatch({
        type: ACTION_TYPES.getCurrentLocation,
        payload: {
          coords: {
            lat: 43.6726438,
            lng: -79.3866517,
          },
        },
      });
    }
  };
}

export function getPhotoDetails(params) {
  return dispatch => {
    get(`/photos/${params}`, {image_size: 4, comments: 1})
    .then(response => {
      dispatch({
        type: ACTION_TYPES.getPhotoDetails,
        payload: {
          photo: response.photo,
          comments: response.comments,
        },
      });
    });
  };
}
