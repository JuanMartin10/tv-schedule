import { type Channel } from '../models/api-types';

const API_URL = `http://localhost:1337/epg`;

export const fetchData = async (): Promise<Channel[]> => {
  try {
    const res = await fetch(API_URL);
    const { channels } = (await res.json()) as { channels: Channel[] };

    return channels;
  } catch (error: any) {
    throw new Error('Error fetching entries:', error);
  }
};
