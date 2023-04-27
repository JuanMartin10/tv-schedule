import { MOCK_CHANNEL_IMAGE } from '@mocks';
import { type Channel as ChannelType } from '@models/api-types';
import styles from './Channel.module.css';

interface ChannelProps {
  channel: ChannelType;
}

const Channel: React.FC<ChannelProps> = ({ channel }) => {
  let {
    images: { logo },
  } = channel;

  logo = MOCK_CHANNEL_IMAGE;

  return (
    <div className={styles.channelsWrapper}>
      <img className={styles.image} src={logo}></img>
    </div>
  );
};

export default Channel;
