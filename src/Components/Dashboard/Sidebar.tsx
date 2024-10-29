import React from 'react';
import styles from './Dashboard.module.scss';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Lendsqr</div>
      <nav className={styles.navMenu}>
        <p>Customers</p>
        <ul>
          <li>Users</li>
          <li>Guarantors</li>
          <li>Loans</li>
          <li>Decision Models</li>
          <li>Savings</li>
          <li>Loan Requests</li>
          <li>Whitelist</li>
          <li>Karma</li>
        </ul>
        <p>Businesses</p>
        <ul>
          <li>Organization</li>
          <li>Loan Products</li>
          <li>Savings Products</li>
          <li>Fees and Charges</li>
          <li>Transactions</li>
        </ul>
        <p>Settings</p>
        <ul>
          <li>Preferences</li>
          <li>Fees and Pricing</li>
          <li>Audit Logs</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
