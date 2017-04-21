import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as sematable } from 'sematable';
import AccessTokenReducer from './AccessTokenReducer';
import videos from './VideosReducer';
import video from './VideoReducer';
import loggedIn from './LoginStateReducer';


const rootReducer = combineReducers({
  form: formReducer,
  loggedIn,
  access_token: AccessTokenReducer,
  videos,
  video,
  sematable
});

export default rootReducer;
