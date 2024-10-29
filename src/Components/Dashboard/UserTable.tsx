import React from 'react';
import styles from './Dashboard.module.scss';

const UserTable: React.FC = () => {
  const users = [
    { organization: 'Lendsqr', username: 'Adedeji', email: 'adedeji@lendsqr.com', phone: '08078030721', dateJoined: 'May 15, 2020', status: 'Inactive' },
    { organization: 'Ironrun', username: 'Debby Ogana', email: 'debby2@ironrun.com', phone: '08160780928', dateJoined: 'Apr 30, 2020', status: 'Pending' },
    // Add more users as needed
  ];

  return (
    <div className={styles.userTable}>
      <table>
        <thead>
          <tr>
            <th>ORGANIZATION</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>DATE JOINED</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dateJoined}</td>
              <td><span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>{user.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
