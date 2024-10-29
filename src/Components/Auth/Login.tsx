import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../Styles/Login.module.scss';
import logo from '../../assets/Group.svg'; // Assuming the Lendsqr logo path
import signInImage from '../../assets/pablo-sign-in.svg'; // Path to the image on the left side

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

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
    const validEmail = 'careers@lendsqr.com';
    const validPassword = '12345';

    if (email === validEmail && password === validPassword) {
      // Store login status in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);

      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <img src={logo} alt="Lendsqr logo" className={styles.logo} />
        <img src={signInImage} alt="Sign In Illustration" className={styles.signInImage} />
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
