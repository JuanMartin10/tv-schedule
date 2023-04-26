import { useEffect, useState } from 'react';
import { type Channel } from '../models/api-types';
import { fetchData } from '../services';
import { TIMELINE_DURATION, TIMELINE_WIDTH } from '../util/constants';

enum DateKey {
  start = 'start',
  end = 'end',
}

export const useChannels = ({ setLoading, currentTime }: any) => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [timesArray, setHoursArray] = useState<string[]>([]);
  const [bookmarkPosition, setBookmarkPosition] = useState(0);

  const getChannels = async () => {
    if (channels.length < 0) return;
    try {
      setLoading(true);
      const data = await fetchData();
      setChannels(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredTimes = (channels: Channel[], key: DateKey): number[] => {
    if (channels.length < 1) return [];

    const times = channels.flatMap(({ schedules }) =>
      schedules.map(({ [key]: time }) => new Date(time).getTime())
    );

    return times;
  };

  const getMinMaxTimes = (channels: Channel[]) => {
    if (channels.length < 1 || !currentTime) return;

    const resultStartFiltered = getFilteredTimes(channels, DateKey.start);
    const resultEndFiltered = getFilteredTimes(channels, DateKey.end);

    const minData = Math.min(...resultStartFiltered);
    const maxData = Math.max(...resultEndFiltered);

    setStartTime(minData);
    setEndTime(maxData);
  };

  const createHoursArray = () => {
    const hourArray: string[] = [];

    for (let i = startTime; i <= endTime; i += TIMELINE_DURATION * 60 * 1000) {
      const date = new Date(i);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      hourArray.push(`${hours}:${minutes}`);
    }

    setHoursArray(hourArray);
  };

  const createBookmark = () => {
    if (channels.length < 1 || currentTime === 0) return;

    const minutes = Math.abs(currentTime - startTime) / (1000 * 60);

    const position = (minutes / TIMELINE_DURATION) * TIMELINE_WIDTH;

    setBookmarkPosition(position);
  };

  useEffect(() => {
    getChannels();
  }, []);

  useEffect(() => {
    getMinMaxTimes(channels);
  }, [channels]);

  useEffect(() => {
    createHoursArray();
    createBookmark();
  }, [startTime]);

  return {
    channels,
    startTime,
    endTime,
    timesArray,
    bookmarkPosition,
    setChannels,
  };
};
