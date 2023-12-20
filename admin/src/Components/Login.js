import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const SetData = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    
    const res = await fetch('/adminLogin', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,password
      })
    });
  
    const data = await res.json();
  
    if (res.status === 201) 
    {
      window.alert("Login successful")
      localStorage.setItem('token', data.token)
      window.location.reload();
      history.push('/')
      window.location.reload();
    } else {
      window.alert('Invalid credentials')
    }

     
  };  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form method="POST">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <p>
            Not registered yet? <a href="/register">Sign up here</a>
          </p>
        </div>
        <button type="submit" id='login' name='login' onClick={SetData}>Login</button>
      </form>
    </div>
  );
};

export default Login;
