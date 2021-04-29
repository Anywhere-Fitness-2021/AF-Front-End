import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { setActiveUser } from '../store';

const Login = (props) => {

  const { setActiveUser } = props;

  const [credentials, setCredentials] = useState({
    Username: '',
    Password: '',
  });
  const [loginError, setLoginError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setCredentials(
      {
        ...credentials,
        [e.target.name]: e.target.value
      }
    );
  };

  const login = (e) => {
    e.preventDefault();
      axios
        .post('https://anywherefitness2021.herokuapp.com/api/users/login', credentials)
        .then((resp) => {
          setLoginError('');
          window.localStorage.setItem('token', JSON.stringify(resp.data.token));
          window.localStorage.setItem('username', JSON.stringify(resp.data.userLoggingIn.Username));
          window.localStorage.setItem('role', JSON.stringify(resp.data.userLoggingIn.Role));
          console.log(resp.data.userLoggingIn);
          setActiveUser(resp.data.userLoggingIn);
          history.push('/classes');
        })
        .catch((err) => {
          console.log({ err })
          setLoginError('Please enter a valid username and password.');
        });
  };

  const routeToSignUp = () => {
    history.push('/signup');
};

  return (
    <div>
      <h3>Login to your ANYWHERE FITNESS account!</h3>

      <div className="login-form">
        <form onSubmit={login}>
          <label>Username:&nbsp;</label>
          <input
              type="text"
              name="Username"
              value={credentials.Username}
              onChange={handleChange}
          />
          <br/>
          <br/>
          <label>Password:&nbsp;&nbsp;</label>
          <input
              type="password"
              name="Password"
              value={credentials.Password}
              onChange={handleChange}
          />
          <br/>
          <br/>
          <input id='login-button' type='submit' value='Login'/>
          <button onClick={routeToSignUp}>Cancel</button>
        </form>
      </div>

      <p className="error">{loginError}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      isLoading: state.IsLoading,
      error: state.Error,
      activeUser: state.ActiveUser,
      allUsers: state.AllUsers,
      classes: state.Classes
  };
}

export default connect(mapStateToProps, { setActiveUser })(Login);
