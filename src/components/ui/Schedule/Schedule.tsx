import Dateline from './Dateline/Dateline';
import styles from './Schedule.module.css';
import Timeline from './Timeline/Timeline';

const Schedule = () => {
  return (
    <div className={styles.container}>
      <div className={styles.schedule}>
        <section className={styles.date}>
          <p>start</p>
        </section>
        <section className={styles.dateline}>
          <Dateline />
        </section>
        <section className={styles.timeline}>
          <Timeline />
        </section>
        <section className={styles.channels}>
          <p>channels</p>
        </section>
        <section className={styles.programs}>
          <p>programs</p>
        </section>
      </div>
    </div>
  );
};

export default Schedule;
