import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import Icon from '../../Icon/Icon';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <Icon icon='UserIcon' color='white' variant='solid' />
      </div>
      <div className={styles.logo}>
        <Link to='/'>
          <img src={logo} className={styles.logo} alt='logo' width={40} />
        </Link>
      </div>
      <div className={styles.search}>
        <Icon icon='MagnifyingGlassIcon' color='white' variant='solid' />
      </div>
    </header>
  );
};

export default Header;
