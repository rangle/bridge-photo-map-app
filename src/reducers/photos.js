import { ACTION_TYPES } from '../actions/index';

const INITIAL_STATE = {
  list: [],
  selectedPhotoID: NaN,
  showingInfoWindow: false,
  activeMarker: {},
  search: '',
  relatedList: [],
  coords: {
    lat: 43.6726438,
    lng: -79.3866517,
  },
  photo: {},
  comments: [],
  tag: '',
};

// Reducer
export const photos = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
  case ACTION_TYPES.getPhotos:
    return {...state, ...{list: payload.photos}};
  case ACTION_TYPES.setSelectedPhotoID:
    return {...state, ...{selectedPhotoID: payload.selectedPhotoID}};
  case ACTION_TYPES.showInfoWindow:
    return {...state, ...{showingInfoWindow: payload.showingInfoWindow}};
  case ACTION_TYPES.setActiveMarker:
    return {...state, ...{activeMarker: payload.activeMarker}};
  case ACTION_TYPES.getRelatedPhotos:
    return {...state, ...{relatedList: payload.photos}};
  case ACTION_TYPES.getCurrentLocation:
    return {...state, ...{coords: payload.coords}};
  case ACTION_TYPES.getPhotoDetails:
    return {...state, ...{photo: payload.photo, tag: payload.tag}};
  case ACTION_TYPES.getComments:
    return {...state, ...{comments: payload.comments}};
  default:
    return state;
  }
};
