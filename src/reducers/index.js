import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as sematable } from 'sematable';
import AuthReducer from './AuthReducer';
import loggedIn from './StatusReducer';


const rootReducer = combineReducers({
  user: AuthReducer,
  loggedIn,
  form: formReducer,
  sematable
});

export default rootReducer;
