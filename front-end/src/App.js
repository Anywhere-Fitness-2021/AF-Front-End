//TECH IMPORTS
import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

//STYLING IMPORTS
import "../src/index.css";
import Logo from "./AnywhereFitnessLogo.PNG";

//COMPONENTS
import CreateClass from "./components/CreateClass";
import SignUp from './components/SignUp';
import InstructorOnboarding from './components/InstructorOnboarding';
import UserOnboarding from './components/UserOnboarding';
import HomePage from "./components/HomePage";
import Testing from './components/Testing';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const Data = {
  Username: '',
  Password: '',
  Role: '',
  Token: ''
};

const Schema = {
  Username: Yup.string().min(3, 'Please include a username with at least 3 characters in length.'),
  Password: Yup.string().min(8, 'Please include a password with at least 8 characters in length.'),
  Role: Yup.string().required('Please make sure that a role is selected.'),
  Token: Yup.string().required('A special string is required in order to sign up. For demonstration purposes, please enter "af9001" in this field.').matches('af9001')
};

const Client = Yup.object().shape({
  Username: Schema.Username,
  Password: Schema.Password,
  Role: Schema.Role
});

const Instructor = Yup.object().shape({
  Username: Schema.Username,
  Password: Schema.Password,
  Role: Schema.Role,
  Token: Schema.Token
});

function App() {

  const [users, setUsers] = useState([]);
  const [values, setValues] = useState(Data);
  const [errors, setErrors] = useState(Data);
  const [disabled, setDisabled] = useState(true);

  let history = useHistory();

  const update = (name, value) => {
    const Valid = (Type) => {
      Yup
        .reach(Type, name)
        .validate(value)
        .then((valid) => {
          setErrors({ ...errors, [name]: '' });
        }).catch((err) => {
          setErrors({ ...errors, [name]: err.errors[0] });
        });
    };
    if (name === 'Token') {
      Valid(Instructor);
    }
    else {
      Valid(Client);
    }
    setValues({ ...values, [name]: value });
  };

  const submit = () => {
    const newUser = {
      Username: values.Username,
      Password: values.Password,
      Role: values.Role
    };

    if (values.Role === 'Instructor') Object.assign(newUser, { Token: values.Token });

    const newArray = users;
    newArray.push(newUser);

    setUsers([...newArray]);
    setValues(Data);

    axios
      .post('https://anywherefitness2021.herokuapp.com/api/users/register', {
        Username: newUser.Username,
        Password: newUser.Password,
        Role: newUser.Role
      })
      .then(resp => {
        console.log(resp.data);
        if (newUser.Role === 'Instructor') {
          history.push('/onboarding-instructor');
          setValues({
            Username: '',
            Password: '',
            Role: '',
            Token: ''
          });
        } else {
          history.push('/onboarding-user');
          setValues({
            Username: '',
            Password: '',
            Role: '',
            Token: ''
          });
        }
      })
      .catch(err => {
        console.log({ err });
      });
  };

  useEffect(() => {
    switch (values.Role) {
      case ('Client'): {
        Client.isValid(values).then((valid) => {
          setDisabled(!valid);
        });
        break;
      }
      case ('Instructor'): {
        Instructor.isValid(values).then((valid) => {
          setDisabled(!valid);
        });
        break;
      }
      default: {
        Client.isValid(values).then((valid) => {
          setDisabled(true);
        });
      }
    }
  }, [values]);

  return (
    <Fragment>
      <div className="logoAndHeading"></div>
      <img className="logo" src={Logo} alt="gym barbell"/>
      <h1 className="mainHeading">Anywhere Fitness</h1>

      <Switch>
        <PrivateRoute path='/classes/createclass' component={CreateClass} />

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/onboarding-instructor'>
          <InstructorOnboarding />
        </Route>

        <Route path='/onboarding-user'>
          <UserOnboarding />
        </Route>

        <Route path='/signup'>
          <SignUp values={values} errors={errors} update={update} submit={submit} disabled={disabled} />
        </Route>

        <Route path='/testing'>
          <Testing />
        </Route>

        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>

    </Fragment>
  );
}

export default App;
