import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post'
import profileType from "./profile_type.js";

export default combineReducers({
  //Add all reducers we make in here
  alert,
  auth,
  profile,
  post,
  profileType,
});
