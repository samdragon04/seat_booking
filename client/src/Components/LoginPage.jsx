import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSuccessfulLogin = (event) => {
    event.preventDefault();
  
    // Check if the entered credentials are the temporary ones
    if (username === 'test' && password === 'test123') {
      // Simulate a successful login response
      const fakeResponse = { data: { token: 'fakeToken' } };
  
      localStorage.setItem('token', fakeResponse.data.token);
      navigate('/home');
      onLogin();
    } else {
      // If not the temporary credentials, make a request to the server
      axios.post('http://localhost:3001/login', { ID: username, password })
        .then(response => {
          localStorage.setItem('token', response.data.token);
          navigate('/home');
          onLogin();
        })
        .catch(error => {
          alert('Invalid credentials');
        });
    }
  };

  // eslint-disable-next-line
  /*const handleRegister = (event) => {
    event.preventDefault();
    const newUser = { ID: username, password, LastName: '', FirstName: '', LastName_JP: '', FirstName_JP: '', LastName_Kana: '', FirstName_Kana: '', DepartmentGrp: '', PhoneNumber: '', Email: '' };
    axios.post('http://localhost:3001/register', newUser)
      .then(response => {
        alert('User registered');
      })
      .catch(error => {
        alert('Registration failed');
      });
  };*/


  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '100px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.4)'
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
          Username :
          <input style={inputStyle} type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password  :
          <input style={inputStyle} type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input style={buttonStyle} type="submit" value="Login" />
      </form>
      <form style={formStyle}>
      <Link to="/register">
      <button style={buttonStyle}>Register New User</button>
      </Link>
      <Link to="/admin-login">
      <button style={buttonStyle}>Admin Login</button>
      </Link>
      </form>
    </div>
  );
}

export default LoginPage;