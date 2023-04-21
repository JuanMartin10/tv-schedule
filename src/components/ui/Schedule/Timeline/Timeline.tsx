/* eslint-disable eqeqeq */
import styles from './Timeline.module.css';

const Timeline = () => {
  const time = '9';
  const index = 0;

  return (
    <div className={styles.timelinesContainer}>
      <div className={styles.timelines}>
        <div key={time} className={styles.timeWrapper}>
          <span
            className={styles.time}
            style={{ left: index == 0 ? '0px' : '-18px' }}
          >
            {time}
          </span>

          {/* <div className={styles.frames}>
            <div className={styles.timeFrame}></div>
            <div className={styles.timeFrame}></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
