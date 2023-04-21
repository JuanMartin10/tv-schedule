import styles from './Footer.module.css';
import Icon from '../../Icon/Icon';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.profile}>
        <Icon icon='HomeIcon' color='white' variant='solid' />
      </div>
      <div className={styles.search}>
        <Icon icon='PlayIcon' color='white' variant='solid' />
      </div>
      <div className={styles.logo}>
        <Icon icon='Bars3Icon' color='yellow' variant='solid' />
      </div>
      <div className={styles.search}>
        <Icon icon='BackwardIcon' color='white' variant='solid' />
      </div>
      <div className={styles.search}>
        <Icon icon='BookOpenIcon' color='white' variant='solid' />
      </div>
    </footer>
  );
};

export default Footer;
