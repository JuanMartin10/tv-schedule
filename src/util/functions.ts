import {
  MILLISECONDS_IN_MINUTE,
  TIMELINE_DURATION,
  TIMELINE_WIDTH,
} from './constants';

export const formatHours = (dateIso: string) => {
  const date = getDateFromDateISO(dateIso);
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleTimeString(undefined, options);
};

export const formatDate = (dateIso: string) => {
  const date = getDateFromDateISO(dateIso);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleDateString(undefined, options);
};

export const getDateFromDateISO = (dateIso: string) => new Date(dateIso);
export const getTimeFromDate = (date: Date) => date.getTime();

export const getTimeFromDateISO = (dateIso: string) =>
  getTimeFromDate(getDateFromDateISO(dateIso));

export const isProgramActive = (
  startTime: number,
  endTime: number,
  currentTime: number
) => startTime <= currentTime && endTime >= currentTime;

export const durationInMinutes = (startTime: number, endTime: number) => {
  return Math.abs(endTime - startTime) / MILLISECONDS_IN_MINUTE;
};
export const calculateProgramWidth = (startTime: number, endTime: number) => {
  const minutes = durationInMinutes(startTime, endTime);
  const programWidth = (minutes / TIMELINE_DURATION) * TIMELINE_WIDTH;

  return `${programWidth}px`;
};
