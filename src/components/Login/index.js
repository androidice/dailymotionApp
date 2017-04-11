import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'

let Login = (props)=>{
  return (
    <div className="wrapper">
      <form className="form-signin">
        <h2 className="form-signin-heading">Please login</h2>
        <div>
          <Field name="username" className="form-control" component="input" type="text" placeholder="Email Address"/>
        </div>
        <div>
          <Field name="password" className="form-control" component="input" type="password" placeholder="Password"/>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
      </form>
    </div>
  );
};

Login = reduxForm({
  form: 'loginForm'  // a unique identifier for this form
})(Login);

export default Login;
