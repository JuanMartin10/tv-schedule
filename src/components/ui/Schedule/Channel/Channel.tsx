import { type Channel as ChannelType } from '@models/api-types';
import styles from './Channel.module.css';
import Program from '../Program/Program';
import { useAppContext } from '../../../../context/app-context';

interface ChannelProps {
  channel: ChannelType;
}

const Channel: React.FC<ChannelProps> = ({ channel }) => {
  const { bookmarkPosition } = useAppContext();

  const {
    images: { logo },
  } = channel;

  return (
    <div className={`${styles.row}`} key={channel.id}>
      <section className={styles.channels}>
        <div className={styles.channelsWrapper}>
          <img className={styles.image} src={logo}></img>
        </div>
      </section>
      <section className={styles.programs}>
        {channel.schedules.map(program => (
          <Program
            key={`${program.id}-${program.title}-${program.start}`}
            program={program}
            channel={channel}
          />
        ))}
        <div
          className={styles.bookmark}
          style={{ left: `${bookmarkPosition}px` }}
        ></div>
      </section>
    </div>
  );
};

export default Channel;
