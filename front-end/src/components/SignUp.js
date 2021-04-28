//TECH IMPORTS
import React from "react";
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
    <form className='form' onSubmit={onSubmit}>
      <div className='container'>
        <FormControl className='control'>
          <TextField
            label='Username'
            type='text'
            name='username'
            value={values.username}
            onChange={onChange}
          />
          <FormHelperText>{errors.username}</FormHelperText>
        </FormControl>
        <FormControl>
          <TextField
            label='Password'
            type='text'
            name='password'
            value={values.password}
            onChange={onChange}
          />
          <FormHelperText>{errors.password}</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel className='label'>Role</InputLabel>
          <Select name='role' value={values.role} onChange={onChange}>
            <MenuItem value=''>Select</MenuItem>
            <MenuItem value='Client'>Client</MenuItem>
            <MenuItem value='Instructor'>Instructor</MenuItem>
          </Select>
          <FormHelperText>{errors.role}</FormHelperText>
        </FormControl>
        {
          values.role === 'Instructor' && (
            <FormControl>
              <TextField
                label='Token'
                type='text'
                name='token'
                value={values.token}
                onChange={onChange}
              />
              <FormHelperText>{errors.token}</FormHelperText>
            </FormControl>
          )
        }
        <Button className='button' variant='contained' color='primary' className='button' type='submit' disabled={disabled}>
          Sign Up
        </Button>
      </div>
    </form>
  )
}

export default SignUp;
