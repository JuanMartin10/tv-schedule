/* eslint-disable @typescript-eslint/dot-notation */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { type Channel, type Schedule } from '@models/api-types';
import { useAppContext } from '@context/app-context';
import {
  calculateProgramWidth,
  formatHours,
  isProgramActive as checkIsProgramActive,
  getTimeFromDateISO,
} from '@util/functions';
import styles from './Program.module.css';

interface ProgramProps {
  program: Schedule;
  channel: Channel;
}
const Program: React.FC<ProgramProps> = ({ program, channel }) => {
  const [width, setWidth] = useState('');
  const [isProgramActive, setIsProgramActive] = useState(false);
  const { currentTime } = useAppContext();

  const getProgramActive = (startTime: number, endTime: number) => {
    if (checkIsProgramActive(startTime, endTime, currentTime)) {
      setIsProgramActive(true);
    }
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
      className={styles.link}
      state={{ program, channel }}
    >
      <div
        className={`${styles.program} ${
          isProgramActive && styles[`program_active`]
        }`}
        style={{ width }}
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
