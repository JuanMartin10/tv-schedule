import { useRef } from 'react';
import { type Channel } from '@models/api-types';
import { useAppContext } from '@context/app-context';

import Timeline from './Timeline/Timeline';
import ChannelComponent from './Channel/Channel';

import styles from './Schedule.module.css';

interface ScheduleProps {
  channels: Channel[];
}
const Schedule: React.FC<ScheduleProps> = ({ channels }) => {
  const { bookmarkPosition, timesArray } = useAppContext();

  const scrollableDivRef = useRef<any>(0);

  const handleButtonClick = (): void => {
    const viewportWidth = window.innerWidth;
    const scrollableDiv = scrollableDivRef.current;
    const halfViewportWidth = viewportWidth / 2;
    const targetScrollLeft = bookmarkPosition - halfViewportWidth;
    scrollableDiv.scrollLeft = targetScrollLeft;
  };

  return (
    <div className={styles.container}>
      <div className={styles.schedule} ref={scrollableDivRef}>
        <section className={styles.timeline}>
          <Timeline times={timesArray} />
        </section>
        {channels.map(channel => (
          <ChannelComponent key={channel.id} channel={channel} />
        ))}
      </div>
      <button
        type='button'
        onClick={handleButtonClick}
        className={styles.button}
      >
        Now
      </button>
    </div>
  );
};

export default Schedule;
