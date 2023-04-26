import { useEffect, useState } from 'react';
import { type Channel, type Schedule } from '../../../../models/api-types';
import {
  formatHours,
  getIsProgramActive,
  getTimeFromDateISO,
} from '../../../../util/functions';
import styles from './Program.module.css';
import { TIMELINE_DURATION, TIMELINE_WIDTH } from '../../../../util/constants';
import { useAppContext } from '../../../../context/app-context';
import { Link } from 'react-router-dom';

interface ProgramProps {
  program: Schedule;
  channel: Channel;
}
const Program: React.FC<ProgramProps> = ({ program, channel }) => {
  const [width, setWidth] = useState('');
  const [isProgramActive, setIsProgramActive] = useState(false);
  const { currentTime } = useAppContext();

  const getProgramActive = (startTime: number, endTime: number) => {
    if (getIsProgramActive(startTime, endTime, currentTime)) {
      setIsProgramActive(true);
    }
  };

  const calculateProgramWidth = (startTime: number, endTime: number) => {
    const durationInMinutes = Math.abs(endTime - startTime) / (1000 * 60);
    const programWidth =
      (durationInMinutes / TIMELINE_DURATION) * TIMELINE_WIDTH;

    return `${programWidth}px`;
  };

  const setProgramWidth = (startTime: number, endTime: number) => {
    const programWidth = calculateProgramWidth(startTime, endTime);
    setWidth(programWidth);
  };

  const startTime = getTimeFromDateISO(program.start);
  const endTime = getTimeFromDateISO(program.end);

  useEffect(() => {
    setProgramWidth(startTime, endTime);
    getProgramActive(startTime, endTime);
  }, []);

  return (
    <Link
      to={`${channel.id}/${program.id}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        fontSize: 'inherit',
        height: '100%',
      }}
      state={{ program, channel }}
    >
      <div
        className={`${styles.program} ${
          // eslint-disable-next-line @typescript-eslint/dot-notation
          Boolean(isProgramActive) && styles[`program_active`]
        }`}
        style={{ width: width }}
      >
        <p className={styles.title}>{program.title}</p>
        <span className={styles.hour}>{`${formatHours(
          program.start
        )}-${formatHours(program.end)}`}</span>
      </div>
    </Link>
  );
};

export default Program;
