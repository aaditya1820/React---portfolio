import React, { useState } from 'react';

export default function Login({ onLogin, setPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const match = users.find(user => user.email === email && user.password === password);
    if (match) {
      onLogin(match);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input className="form-control mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary me-2" onClick={handleSubmit}>Login</button>
      <button className="btn btn-secondary" onClick={() => setPage('register')}>Register</button>
    </div>
  );
}
