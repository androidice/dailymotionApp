import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as sematable } from 'sematable';
import AuthReducer from './AuthReducer';
import loggedIn from './StatusReducer';
import AccessTokenReducer from './AccessTokenReducer';
import videos from './VideosReducer';


const rootReducer = combineReducers({
  user: AuthReducer,
  loggedIn,
  form: formReducer,
  access_token: AccessTokenReducer,
  videos,
  sematable
});

export default rootReducer;
