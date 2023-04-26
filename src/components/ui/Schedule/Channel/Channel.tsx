import { type Channel as ChannelType } from '../../../../models/api-types';
import styles from './Channel.module.css';
interface ChannelProps {
  channel: ChannelType;
}
const Channel: React.FC<ChannelProps> = ({ channel }) => {
  const {
    images: { logo },
  } = channel;

  const mockUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sky_1_Logo_2016.svg/1200px-Sky_1_Logo_2016.svg.png';

  return (
    <div className={styles.channelsWrapper}>
      <img className={styles.image} src={mockUrl}></img>
    </div>
  );
};

export default Channel;
