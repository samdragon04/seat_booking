import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (password === 'Hirano1122') {
      navigate('/admin');
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default AdminLoginPage;