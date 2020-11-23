import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';

export default combineReducers({
  //Add all reducers we make in here
  alert,
  auth,
  profile,
});