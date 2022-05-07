import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { startRegisterWithEamilPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'Adrian',
    email: 'adrian@gmail.com',
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEamilPasswordName(email, password, name));
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is requiered'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('Password should be at least 6 characters and match each other'));
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <div>
      <h3 className='auth__title'>Register</h3>

      <form
        onSubmit={handleRegister}
        className='animate__animated animate__fadeIn'
      >

        {
          msgError &&
          (
          <div className='auth__alert-error'>
            {msgError}
          </div>
          )
        }

        <input
          className='auth__input'
          type='text'
          autoComplete='off'
          placeholder='Name'
          name='name'
          value={name}
          onChange={handleInputChange}
        />
        <input
          className='auth__input'
          type='text'
          autoComplete='off'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleInputChange}
        />
        <input
          className='auth__input'
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
        <input
          className='auth__input'
          type='password'
          placeholder='Confirm password'
          name='password2'
          value={password2}
          onChange={handleInputChange}
        />
        <button
          className='btn btn-primary btn-block'
          type='submit'
        >
          Register
        </button>
        <hr />
        <Link to="/auth/login" className='link'>Already register?</Link>
      </form>
    </div>
  )
}