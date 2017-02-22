import { ACTION_TYPES } from '../actions/index';

const INITIAL_STATE = {
  list: [],
  selectedPhotoID: NaN,
  showingInfoWindow: false,
  activeMarker: {},
  search: '',
  status: false,
  relatedList: [],
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
  case ACTION_TYPES.handleInput:
    return {...state, ...{search: payload.keyword, status: payload.status}};
  case ACTION_TYPES.searchPhotos:
    return {...state, ...{list: payload.search, status: payload.status}};
  case ACTION_TYPES.getRelatedPhotos:
    return {...state, ...{relatedList: payload.photos}};
  default:
    return state;
  }
};
