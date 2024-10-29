import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import UserTable from './UserTable';
import styles from '../../Styles/Dashboard.module.scss';
import womens from '../../assets/women.svg'
import group from '../../assets/users.svg'
import loan from '../../assets/loan.svg'
import coin from '../../assets/coin.svg'

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
              <img src={womens} alt="women logo" className={styles.iconers}/>
              <p>Users</p>
              <h3>2,453</h3>
            </div>
            <div className={styles.statCard}>
            <img src={group} alt="group logo" className={styles.iconers}/>
              <p>Active Users</p>
              <h3>2,453</h3>
            </div>
            <div className={styles.statCard}>
              <img src={loan} alt="loan logo" className={styles.iconers}/>
              <p>Users with Loans</p>
              <h3>12,453</h3>
            </div>
            <div className={styles.statCard}>
              <img src={coin} alt="coin logo" className={styles.iconers}/>
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
