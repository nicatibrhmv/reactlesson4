import React, { useState } from 'react';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.endsWith('.ru')) {
      setEmailError('Yalnız .ru domenlərinə icazə verilir.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError('Ən azı 8 simvol.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>E-mail:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        {emailError && <p>{emailError}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        {passwordError && <p>{passwordError}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
