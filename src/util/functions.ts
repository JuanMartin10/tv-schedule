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

export const getIsProgramActive = (
  startTime: number,
  endTime: number,
  currentTime: number
) => startTime <= currentTime && endTime >= currentTime;
