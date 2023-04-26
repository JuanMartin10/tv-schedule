import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header/Header';
import styles from './Layout.module.css';
import Footer from '../components/ui/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
