import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <Loader />
      </div>
      <div className={styles.logo}>
        <Link to='/'>Logo</Link>
      </div>
      <div className={styles.search}>
        <Loader />
      </div>
    </header>
  );
};

export default Header;
