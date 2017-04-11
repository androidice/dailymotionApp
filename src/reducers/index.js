import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';


const rootReducer = combineReducers({
  loginInfo: AuthReducer,
  form: formReducer
});

export default rootReducer;
