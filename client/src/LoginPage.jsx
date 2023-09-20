import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSuccessfulLogin = (event) => {
    event.preventDefault();
    if (username === 'test' && password === 'test123') {
      navigate('/home');
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  /*const handleRegister = () => {
    // Handle register new user logic here
  };*/

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '100px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    cursor: 'pointer',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    color: '#fff',
    backgroundColor: '#007BFF'
  };

  return (
    <div>
      <form style={formStyle} onSubmit={handleSuccessfulLogin}>
        <label>
          Username
          <input style={inputStyle} type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input style={inputStyle} type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input style={buttonStyle} type="submit" value="Login" />
      </form>
      {/*<button style={buttonStyle} onClick={handleRegister}>Register New User</button>*/}
    </div>
  );
}

export default LoginPage;