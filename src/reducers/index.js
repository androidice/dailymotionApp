import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import loggedIn from './StatusReducer';


const rootReducer = combineReducers({
  user: AuthReducer,
  loggedIn,
  form: formReducer
});

export default rootReducer;
