//TECH IMPORTS
import React from "react";
import { Link } from 'react-router-dom';
//STYLING IMPORTS
import { FormControl, FormHelperText, InputLabel, TextField, Select, MenuItem, Button } from '@material-ui/core';
import '../styling/SignUp.css';

function SignUp(props) {

  const { values, errors, update, submit, disabled } = props;

  const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  };

  return (
    <div className='signup-container'>
      <form className='form' onSubmit={onSubmit}>
        <div className='container'>
          <FormControl className='control'>
            <TextField
              label='Username'
              type='text'
              name='Username'
              value={values.Username}
              onChange={onChange}
            />
            <FormHelperText>{errors.Username}</FormHelperText>
          </FormControl>
          <FormControl>
            <TextField
              label='Password'
              type='text'
              name='Password'
              value={values.Password}
              onChange={onChange}
            />
            <FormHelperText>{errors.Password}</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel className='label'>Role</InputLabel>
            <Select name='Role' value={values.Role} onChange={onChange}>
              <MenuItem value=''>Select</MenuItem>
              <MenuItem value='Client'>Client</MenuItem>
              <MenuItem value='Instructor'>Instructor</MenuItem>
            </Select>
            <FormHelperText>{errors.Role}</FormHelperText>
          </FormControl>
          {
            values.Role === 'Instructor' && (
              <FormControl>
                <TextField
                  label='Token'
                  type='text'
                  name='Token'
                  value={values.Token}
                  onChange={onChange}
                />
                <FormHelperText>{errors.Token}</FormHelperText>
              </FormControl>
            )
          }
          <Button className='button' variant='contained' color='primary' type='submit' disabled={disabled}>
            Sign Up
          </Button>
        </div>
      </form>
      <Link to='/' className='link-to-login'>Already have an account? Go to Login!</Link>
    </div>
  )
}

export default SignUp;
