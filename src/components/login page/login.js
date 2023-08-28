import './login.css';
import React, { useState } from 'react';
import SignUp from '../sign up page/signup';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <div className='mainlogin'>
      <form onSubmit={handleSubmit} className="loginform">
        <label>
          <input
            className='email'
            type="email"
            placeholder='Enter Email'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          <input
            className='password'
            type="password"
            placeholder='Enter Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <b className='text'>Dont have an account? <Link to="/signup">Create one</Link></b>
        <b className='text'>I forgot my password</b>
        <br />
        <button className='login' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
