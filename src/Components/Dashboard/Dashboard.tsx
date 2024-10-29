import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import UserTable from './UserTable';
import styles from './Dashboard.module.scss';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.content}>
          <h2>Users</h2>
          <div className={styles.userStats}>
            <div className={styles.statCard}>
              <p>Users</p>
              <h3>2,453</h3>
            </div>
            <div className={styles.statCard}>
              <p>Active Users</p>
              <h3>2,453</h3>
            </div>
            <div className={styles.statCard}>
              <p>Users with Loans</p>
              <h3>12,453</h3>
            </div>
            <div className={styles.statCard}>
              <p>Users with Savings</p>
              <h3>102,453</h3>
            </div>
          </div>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
