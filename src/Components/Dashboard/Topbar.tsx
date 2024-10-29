import React from 'react';
import styles from './Dashboard.module.scss';

const Topbar: React.FC = () => {
  return (
    <header className={styles.topbar}>
      <input type="text" placeholder="Search for anything" className={styles.searchInput} />
      <div className={styles.userInfo}>
        <a href="/docs">Docs</a>
        <span className={styles.notifications}></span>
        <span className={styles.userName}>Adedeji</span>
      </div>
    </header>
  );
};

export default Topbar;
