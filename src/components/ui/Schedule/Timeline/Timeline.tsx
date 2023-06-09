import styles from './Timeline.module.css';

interface TimesProps {
  times: string[];
}

const Timeline: React.FC<TimesProps> = ({ times }) => {
  return (
    <div className={`${styles.row}`}>
      <div></div>
      <div className={styles.timelines}>
        {times.map((time, index) => (
          <div key={time} className={styles.timeWrapper}>
            <span
              className={styles.time}
              style={{ left: index === 0 ? '0px' : '-18px' }}
            >
              {time}
            </span>

            <div className={styles.frames}>
              <div className={styles.timeFrame}></div>
              <div className={styles.timeFrame}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
