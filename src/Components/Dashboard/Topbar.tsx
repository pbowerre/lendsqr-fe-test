import React from 'react';
import styles from '../../Styles/Dashboard.module.scss';
import user from "../../assets/image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';

const Topbar: React.FC = () => {
  const userEmail = localStorage.getItem("userEmail")
  return (
    <header className={styles.topbar}>
      <div className={styles.input}>
      <input
        type="text"
        placeholder="Search for anything"
        className={styles.searchInput}
        aria-label="Search"
      />
      <FontAwesomeIcon icon={faSearch} className={styles.searchers}/>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userAction}>
        <a href="/docs">Docs</a>
        <span className={styles.notifications}>
          <FontAwesomeIcon icon={faBell} className={styles.fonts}/>
        </span>
        </div>
        <div className={styles.imgContent}>
        <img src={user} alt="User avatar" aria-label="User image" />
        <div className={styles.imgContentInner}>
        <span className={styles.userName}>{userEmail?.slice(0,7)}</span>
        <FontAwesomeIcon icon={faCaretDown}/>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
