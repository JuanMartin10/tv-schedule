import { type Channel } from '../../../models/api-types';
import Dateline from './Dateline/Dateline';
import Timeline from './Timeline/Timeline';
import styles from './Schedule.module.css';
import ChannelComponent from './Channel/Channel';
import Program from './Program/Program';
import { useEffect, useRef, useState } from 'react';
import { TIMELINE_DURATION, TIMELINE_WIDTH } from '../../../util/constants';
import { useAppContext } from '../../../context/app-context';

interface ScheduleProps {
  channels: Channel[];
}
const Schedule: React.FC<ScheduleProps> = ({ channels }) => {
  const [data, setData] = useState<Channel[]>(channels);
  const [bookmarkPosition, setBookmarkPosition] = useState(0);
  const { currentTime } = useAppContext();

  const createBookmark = () => {
    if (channels.length < 1 || currentTime === 0) return;

    const resultStartFiltered = channels.map((channel: any) => {
      return channel.schedules.reduce(
        (acc: any, val: any) => acc.concat(new Date(val.start).getTime()),
        []
      );
    });

    const minData = Math.min(...resultStartFiltered.flat());
    console.log(minData);

    const minutes = Math.abs(currentTime - minData) / (1000 * 60);

    const position = (minutes / TIMELINE_DURATION) * TIMELINE_WIDTH;

    setData(channels);
    setBookmarkPosition(position);
  };

  useEffect(() => {
    createBookmark();
  }, [channels]);

  const scrollableDivRef = useRef<any>(0);

  const handleButtonClick = (): void => {
    scrollableDivRef.current.scrollLeft = bookmarkPosition - 400;
  };

  return (
    <div className={styles.container}>
      <div className={styles.schedule} ref={scrollableDivRef}>
        <section className={styles.date}>
          <p>start</p>
        </section>
        <section className={styles.dateline}>
          <Dateline />
        </section>
        <section className={styles.timeline}>
          <Timeline />
        </section>
        {data.map((channel: any) => (
          <div className={`${styles.row}`} key={channel.id}>
            <section className={styles.channels}>
              <ChannelComponent
                key={`${channel.id}-${channel.title}`}
                channel={channel}
              />
            </section>
            <section className={styles.programs}>
              {channel.schedules.map((program: any) => (
                <Program
                  key={`${program.id}-${program.title}-${program.start}`}
                  program={program}
                />
              ))}
              <div
                className={styles.bookmark}
                style={{ left: `${bookmarkPosition}px` }}
              ></div>
            </section>
          </div>
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
