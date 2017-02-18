import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { photos } from './photos';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  photos,
});

export default rootReducer;
