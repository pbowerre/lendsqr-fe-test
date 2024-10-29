import React, { useState } from 'react';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <img src="/path/to/your-image.png" alt="Lendsqr logo" className={styles.logo} />
      </div>
      <div className={styles.rightSection}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="Password"
            />
            <button
              type="button"
              className={styles.showButton}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'HIDE' : 'SHOW'}
            </button>
          </div>
          <a href="/forgot-password" className={styles.forgotPassword}>Forgot Password?</a>
          <button type="submit" className={styles.loginButton}>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
