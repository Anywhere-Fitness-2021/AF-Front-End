//TECH IMPORTS
import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
//STYLING IMPORTS
import "../src/index.css";
import Logo from "./AnywhereFitnessLogo.PNG";
import HomePage from "./components/HomePage";

//COMPONENTS
import CreateClass from "./components/CreateClass";
import SignUp from './components/SignUp';
import InstructorOnboarding from './components/InstructorOnboarding';
import UserOnboarding from './components/UserOnboarding';

const Data = {
  username: '',
  password: '',
  role: '',
  token: ''
};

const Schema = {
  username: Yup.string().min(3, 'Please include a username with at least 3 characters in length.'),
  password: Yup.string().min(8, 'Please include a password with at least 8 characters in length.'),
  role: Yup.string().required('Please make sure that a role is selected.'),
  token: Yup.string().required('A special string is required in order to sign up.')
};

const Client = Yup.object().shape({
  username: Schema.username,
  password: Schema.password,
  role: Schema.role
});

const Instructor = Yup.object().shape({
  username: Schema.username,
  password: Schema.password,
  role: Schema.role,
  token: Schema.token
});

function App() {

  const [users, setUsers] = useState([]);
  const [values, setValues] = useState(Data);
  const [errors, setErrors] = useState(Data);
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();

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
    if (name === 'token') {
      Valid(Instructor);
    }
    else {
      Valid(Client);
    }
    setValues({ ...values, [name]: value });
  };

  const submit = () => {
    const newUser = {
      username: values.username,
      password: values.password,
      role: values.role
    };

    if (values.role === 'Instructor') Object.assign(newUser, { token: values.token });

    const newArray = users;
    newArray.push(newUser);

    setUsers([...newArray]);
    setValues(Data);

    history.push('/');
  };

  useEffect(() => {
    switch (values.role) {
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
        <Route path='/createclass'>
          <CreateClass />
        </Route>
        <Route path='/signup'>
          <SignUp values={values} errors={errors} update={update} submit={submit} disabled={disabled} />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Fragment>
  );

}

export default App;
