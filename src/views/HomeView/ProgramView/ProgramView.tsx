import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '@context/app-context';
import Icon from '@components/Icon/Icon';
import { MOCK_PROGRAM_IMAGE } from '@mocks';
import {
  formatDate,
  formatHours,
  getIsProgramActive,
  getTimeFromDateISO,
} from '@util/functions';
import styles from './ProgramView.module.css';

const ProgramView = () => {
  const {
    state: { program, channel },
  } = useLocation();
  const { currentTime } = useAppContext();

  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const res = getIsProgramActive(
      getTimeFromDateISO(program.start),
      getTimeFromDateISO(program.end),
      currentTime
    );
    setIsLive(res);
  }, []);

  return (
    <div className={styles.programView}>
      <section className={styles.imageContainer}>
        <img src={MOCK_PROGRAM_IMAGE} className={styles.image} />
        {isLive && <div className={styles.playButton} />}
        {isLive && <div className={styles.live}>Live</div>}
      </section>
      <section className={styles.info}>
        <div>
          <img src={channel.images.logo} width={100} />
        </div>
        <div className={styles.infoTitle}>
          <div className={`${styles.channel} ${styles.grey}`}>
            <h5 className={styles.white}>{channel.title}</h5>
            <span>{`${formatHours(program.start)}-${formatHours(
              program.end
            )}`}</span>{' '}
            <span className={styles.day}> {formatDate(program.start)} </span>
          </div>
          <h3 className={styles.title}>{program.title}</h3>
          <div className={`${styles.infoDetails} ${styles.grey}`}>
            <span>2015</span>
            <span>Romance</span>
            <span>Drama</span>
            <span>Horror</span>
          </div>
        </div>
        <div>
          <Icon icon='ClockIcon' color='white' variant='solid' />
        </div>
      </section>
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div>
          <p className={styles.grey}>
            Cast: Wagner Moura, Boy Holbruk, Pedro Pascal
          </p>
          <p className={styles.grey}>
            Creators: Wagner Moura, Boy Holbruk, Pedro Pascal
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramView;
