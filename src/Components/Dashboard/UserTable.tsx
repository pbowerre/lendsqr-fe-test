// import React from 'react';
// import styles from '../../Styles/Dashboard.module.scss';
// import filter from "../../assets/filter.svg"
// import more from '../../assets/more.svg'
// import { Users } from '../MockApi/Users';
// const UserTable: React.FC = () => {

//   return (
//     <div className={styles.userTable}>
//       <table>
//         <thead>
//           <tr>
//             <th className={styles.theader}>
//               <span>ORGANIZATION</span>
//               <img src={filter} alt="filter" />
//             </th>
//             <th className={styles.theader}>
//               <span>USERNAME</span>
//               <img src={filter} alt="filter" />
//             </th>
//             <th className={styles.theader}>
//               <span>EMAIL</span>
//               <img src={filter} alt="filter" />
//             </th>
//             <th className={styles.theader}>
//               <span>PHONE NUMBER</span>
//               <img src={filter} alt="filter" />
//             </th>
//             <th className={styles.theader}>
//               <span>DATE JOINED</span>
//               <img src={filter} alt="filter" />
//             </th>
//             <th className={styles.theader}>
//               <span>STATUS</span>
//               <img src={filter} alt="filter" />
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {Users.map((user, index) => (
//             <tr key={index}>
//               <td>{user.organization}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.dateJoined}</td>
//               <td><span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>{user.status}</span></td>
//               <td>
//                 <img src={more} alt="more" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserTable;

import React, { useEffect, useState } from 'react';
import styles from '../../Styles/Dashboard.module.scss';
import axios from 'axios';
import filter from "../../assets/filter.svg";
import more from '../../assets/more.svg';

interface User {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>("https://run.mocky.io/v3/a1f62f11-9644-4e5d-8352-b4e3abbe57bf");
        setUsers(response.data);
      } catch (err) {
        console.error(err)
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.userTable}>
      <table>
        <thead>
          <tr>
            <th className={styles.theader}>
              <span>ORGANIZATION</span>
              <img src={filter} alt="filter" />
            </th>
            <th className={styles.theader}>
              <span>USERNAME</span>
              <img src={filter} alt="filter" />
            </th>
            <th className={styles.theader}>
              <span>EMAIL</span>
              <img src={filter} alt="filter" />
            </th>
            <th className={styles.theader}>
              <span>PHONE NUMBER</span>
              <img src={filter} alt="filter" />
            </th>
            <th className={styles.theader}>
              <span>DATE JOINED</span>
              <img src={filter} alt="filter" />
            </th>
            <th className={styles.theader}>
              <span>STATUS</span>
              <img src={filter} alt="filter" />
            </th>
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
              <td>
                <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <img src={more} alt="more" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
