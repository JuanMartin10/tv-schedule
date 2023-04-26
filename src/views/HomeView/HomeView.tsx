import Schedule from '../../components/ui/Schedule/Schedule';
import { useAppContext } from '../../context/app-context';
import styles from './HomeView.module.css';
import Loader from '../../components/Loader/Loader';

const HomeView = () => {
  const { loading, channels } = useAppContext();

  return (
    <>
      {channels.length > 1 || loading ? (
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
