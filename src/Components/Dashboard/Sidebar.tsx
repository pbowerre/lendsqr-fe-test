import React from 'react';
import styles from '../../Styles/Dashboard.module.scss';
import logo from '../../assets/Group.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBank, faBriefcase, faCaretDown, faChartBar, 
        faClipboardList, faCoins, faHandHoldingDollar, faHandshake, 
        faHome, faMoneyBillTransfer, faPercent, faPiggyBank, 
        faSackDollar, faScroll, faSearch, faSlidersH, faUser, faUserCheck, 
        faUserCog, faUserFriends, faUserTimes } from '@fortawesome/free-solid-svg-icons'; // Importing the faSearch icon
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate("/")
    localStorage.clear()
  }
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="Lendsqr logo" />
      </div>
      <div className={styles.sideHEad}>
        <p> <FontAwesomeIcon icon={faBriefcase} className={styles.searchers}/>Switch Container <FontAwesomeIcon icon={faCaretDown} className={styles.searchers}/></p>
        <p> <FontAwesomeIcon icon={faHome} className={styles.searchers}/>Dashboard</p>
      </div>
      <nav className={styles.navMenu}>
        <p>Customers</p>
        <ul>
          <li><FontAwesomeIcon icon={faUserFriends} className={styles.searchers}/> Users</li>
          <li><FontAwesomeIcon icon={faUser} className={styles.searchers}/> Guarantors</li>
          <li><FontAwesomeIcon icon={faSackDollar} className={styles.searchers}/> Loans</li>
          <li><FontAwesomeIcon icon={faHandshake} className={styles.searchers}/> Decision Models</li>
          <li><FontAwesomeIcon icon={faPiggyBank} className={styles.searchers}/> Savings</li>
          <li><FontAwesomeIcon icon={faHandHoldingDollar} className={styles.searchers}/> Loan Requests</li>
          <li><FontAwesomeIcon icon={faUserCheck} className={styles.searchers}/> Whitelist</li>
          <li><FontAwesomeIcon icon={faUserTimes} className={styles.searchers}/> Karma</li>
        </ul>
        <p>Businesses</p>
        <ul>
          <li><FontAwesomeIcon icon={faBriefcase} className={styles.searchers}/> Organization</li>
          <li><FontAwesomeIcon icon={faHandHoldingDollar} className={styles.searchers}/> Loan Products</li>
          <li><FontAwesomeIcon icon={faBank} className={styles.searchers}/> Savings Products</li>
          <li><FontAwesomeIcon icon={faCoins} className={styles.searchers}/> Fees and Charges</li>
          <li><FontAwesomeIcon icon={faMoneyBillTransfer} className={styles.searchers}/> Transactions</li>
          <li><FontAwesomeIcon icon={faSearch} className={styles.searchers}/> Services</li>
          <li><FontAwesomeIcon icon={faUserCog} className={styles.searchers}/> Service Account</li>
          <li><FontAwesomeIcon icon={faScroll} className={styles.searchers}/> Settlements</li>
          <li><FontAwesomeIcon icon={faChartBar} className={styles.searchers}/> Reports</li>
        </ul>
        <p>Settings</p>
        <ul>
          <li><FontAwesomeIcon icon={faSlidersH} className={styles.searchers}/> Preferences</li>
          <li><FontAwesomeIcon icon={faPercent} className={styles.searchers}/> Fees and Pricing</li>
          <li><FontAwesomeIcon icon={faClipboardList} className={styles.searchers}/> Audit Logs</li>
        </ul>
        <p onClick={handleLogout} style={{cursor: 'pointer'}}>Logout</p>
      </nav>
    </aside>
  );
};

export default Sidebar;
