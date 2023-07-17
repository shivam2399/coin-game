import React, { useState } from 'react';
import styles from './LoginScreen.module.css';


const LoginScreen = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = [
      { username: 'admin', password: 'admin1234' },
      { username: 'guest', password: 'guest1234' },
    ];

    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      setUser(user);
      window.location.href = '/gameplay'; 
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.navbarHeading}>Coin Game</h1>
      </div>
      <div className={styles.loginForm}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginScreen;