import { useEffect, useState } from 'react';
import { type Schedule } from '../../../../models/api-types';
import { formatDate, getTimeFromDate } from '../../../../util/functions';
import styles from './Program.module.css';
import { TIMELINE_DURATION, TIMELINE_WIDTH } from '../../../../util/constants';
import { useAppContext } from '../../../../context/app-context';

interface ProgramProps {
  program: Schedule;
}
const Program: React.FC<ProgramProps> = ({ program }) => {
  const [width, setWidth] = useState('');
  const [isProgramActive, setIsProgramActive] = useState(false);
  const { currentTime } = useAppContext();

  const getProgramActive = (startTime: number, endTime: number) => {
    if (startTime <= currentTime && endTime >= currentTime) {
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

  const startTime = getTimeFromDate(new Date(program.start));
  const endTime = getTimeFromDate(new Date(program.end));

  useEffect(() => {
    setProgramWidth(startTime, endTime);
    getProgramActive(startTime, endTime);
  }, []);

  return (
    <div
      className={`${styles.program} ${
        // eslint-disable-next-line @typescript-eslint/dot-notation
        Boolean(isProgramActive) && styles[`program_active`]
      }`}
      style={{ width: width }}
    >
      <p className={styles.title}>{program.title}</p>
      <span className={styles.hour}>{`${formatDate(program.start)}-${formatDate(
        program.end
      )}`}</span>
    </div>
  );
};

export default Program;
