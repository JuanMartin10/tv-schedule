import { useEffect, useState } from 'react';
import { type Channel } from '../models/api-types';
import { fetchData } from '../services';

export const useChannels = ({ setLoading }: any) => {
  const [channels, setChannels] = useState<Channel[]>([]);

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

  useEffect(() => {
    getChannels();
  }, []);

  return { channels, setChannels };
};
