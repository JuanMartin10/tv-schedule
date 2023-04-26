export const formatDate = (dateIso: string) => {
  const date = new Date(dateIso);
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleTimeString(undefined, options);
};

export const getTimeFromDate = (dateIso: Date) => dateIso.getTime();
