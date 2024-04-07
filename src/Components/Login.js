import React, { useState } from 'react';
import './login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    
    <div className=' login'>
    <div className=' image-container'>  
    <img src="/images/NSBM_Green_University_seal 1.png" alt="NSBM Logo" className="logo" />
    <div className="login-container">
        <h2>WELCOME !</h2> <br></br><br></br><br></br><br></br><br></br>
        <h2>NSBM</h2>

    <div className="login-form">
        
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit}>
        
          <div className="input-group">
            <label htmlFor="email">Email or Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit" className="login-button">Login</button>
          <a href="/forgot-password">Forgot password?</a>
        </form>
      </div>
      </div>
    </div>
    </div>
   
  );
};

export default Login;

