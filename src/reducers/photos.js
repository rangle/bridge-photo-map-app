import { ACTION_TYPES } from '../actions/index.js';

const INITIAL_STATE = {
  list: [],
};

// Reducer
export const photos = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
  case ACTION_TYPES.getPhotos:
    return {...state, ...{list: payload.photos}};
  default:
    return state;
  }
};
