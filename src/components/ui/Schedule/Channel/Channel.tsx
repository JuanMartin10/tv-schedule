import { MOCK_CHANNEL_IMAGE } from '@mocks';
import { type Channel as ChannelType } from '@models/api-types';
import styles from './Channel.module.css';

interface ChannelProps {
  channel: ChannelType;
}

const Channel: React.FC<ChannelProps> = ({ channel }) => {
  const {
    images: { logo },
  } = channel;

  return (
    <div className={styles.channelsWrapper}>
      <img className={styles.image} src={MOCK_CHANNEL_IMAGE}></img>
    </div>
  );
};

export default Channel;
