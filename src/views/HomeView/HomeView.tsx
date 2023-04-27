import { useAppContext } from '@context/app-context';
import Schedule from '@components/ui/Schedule/Schedule';
import Loader from '@components/Loader/Loader';
import styles from './HomeView.module.css';

const HomeView = () => {
  const { loading, channels } = useAppContext();

  return (
    <>
      {!loading ? (
        <Schedule channels={channels} />
      ) : (
        <div className={styles.main}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default HomeView;
