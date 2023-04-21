import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header/Header';
import styles from './Layout.module.css';
import Footer from '../components/ui/Footer/Footer';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
