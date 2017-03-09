import { get } from '../api/request';
import axios from 'axios';
import { GOOGLE_GEOCODING_API_KEY } from '../config/api';

export const ACTION_TYPES = {
  getPhotos: 'GET_PHOTOS',
  setSelectedPhotoID: 'SET_SELECTED_PHOTO_ID',
  showInfoWindow: 'SHOW_INFO_WINDOW',
  setActiveMarker: 'SET_ACTIVE_MARKER',
  searchPhotos: 'SEARCH_PHOTOS',
  handleInput: 'HANDLE_INPUT',
  getPhotoDetails: 'PHOTO_DETAILS',
  getRelatedPhotos: 'GET_RELATED_PHOTOS',
  setLocation: 'SET_LOCATION',
  getComments: 'GET_COMMENTS',
};

export function getPhotos(params, endpoint = '') {
  const url = endpoint ? `/photos/${endpoint}` : '/photos';
  return dispatch => {
    get(url, params)
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

// Sets active photo on map marker click (Temporary?)
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

// Sets active marker on map marker click (Temporary?)
export function setActiveMarker(activeMarker) {
  return {
    type: ACTION_TYPES.setActiveMarker,
    payload: {
      activeMarker,
    },
  };
}

export function getRelatedPhotos(tag) {
  return dispatch => {
    get('/photos/search', { term: tag, image_size: 200 })
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
          type: ACTION_TYPES.setLocation,
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
        type: ACTION_TYPES.setLocation,
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

export function getPhotoDetails(id) {
  return (dispatch, getState) => {
    get(`/photos/${id}`, {image_size: 4, comments: 1, tags: 1})
    .then(response => {
      dispatch({
        type: ACTION_TYPES.getPhotoDetails,
        payload: {
          photo: response.photo,
          tag: response.photo.tags[0],
        },
      });
    })
    .then(() => {
      const tag = getState().photos.tag;
      dispatch(getRelatedPhotos(tag));
    });
  };
}

export function getComments(photoId) {
  return dispatch => {
    axios.get(`https://500pxserver-zuuynfmrvy.now.sh/api/photos/${photoId}/comments`)
    .then(response => {
      dispatch({
        type: ACTION_TYPES.getComments,
        payload: {
          comments: response.data,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
  };
}

export function searchGeocodedLocation(location, params, endpoint) {
  return (dispatch, getState) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_GEOCODING_API_KEY}`)
    .then( response => {
      const { lat, lng } = response.data.results[0].geometry.location;
      response.data.status && dispatch({
        type: ACTION_TYPES.setLocation,
        payload: {
          coords: {
            lat,
            lng,
          },
        },
      });
    })
    .then( () => {
      const { lat, lng }  =  getState().photos.coords;
      const updateParamsLoc = {
        ...params,
        ...{ geo: `${lat},${lng},5km` },
      };
      dispatch(getPhotos(updateParamsLoc, endpoint));
    });
  };
}
