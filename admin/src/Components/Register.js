import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    companyName: "",
    email: "",
    phone: "",
    password: "",
    cpassword: ""
  })

  const handleInputs = (e) => {
    let namee = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [namee]: value })
  }

  const PostData = async (e) => {
    e.preventDefault()

    const { companyName, email, phone, password, cpassword } = user;

    const res = await fetch('/adminRegister', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        companyName, email, phone, password, cpassword
      })
    });

    const data = await res.json();

    if (res.status === 201) 
    {
      localStorage.setItem('token', data.token)
      window.alert("Registration successful!")

      history.push('/')
      window.location.reload();

    } else {
      window.alert("Registration Failed!")
    }
  }

  return (
    <div className="register-container">
      <div className="welcome-text">
        <h2>Welcome</h2>
        <p>Sign up to create an account</p>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" value={user.companyName} onChange={handleInputs} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleInputs} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone No.</label>
          <input type="tel" id="phone" name="phone" value={user.phone} onChange={handleInputs} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={user.password} onChange={handleInputs} />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleInputs} />
        </div>
        <div className="form-group">
          <p>Already registered? <a href="/login">Login here</a></p>
        </div>
        <button type="submit" className="btn btn-primary" id='register' name='register' onClick={PostData}>Register</button>
      </form>
    </div>
  );
}

export default Register;