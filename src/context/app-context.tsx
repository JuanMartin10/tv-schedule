import { createContext, useContext, useEffect, useState } from 'react';
import { type Channel } from '@models/api-types';
import { getTimeFromDate } from '@util/functions';
import { useChannels } from '@hooks/useChannels';

export interface AppContextTypes {
  loading: boolean;
  channels: Channel[];
  currentTime: number;
  startTime: number;
  endTime: number;
  timesArray: string[];
  bookmarkPosition: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setChannels: React.Dispatch<React.SetStateAction<Channel[]>>;
}

interface ContextProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextTypes | undefined>(undefined);

export const AppProvider: React.FC<ContextProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const {
    channels,
    setChannels,
    startTime,
    endTime,
    timesArray,
    bookmarkPosition,
  } = useChannels({ setLoading, currentTime });

  const currentDate = new Date();

  useEffect(() => {
    setCurrentTime(getTimeFromDate(currentDate));
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        channels,
        currentTime,
        startTime,
        endTime,
        timesArray,
        bookmarkPosition,
        setLoading,
        setChannels,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextTypes => {
  const context = useContext(AppContext);
  if (context == null) {
    throw new Error('useAppContext must be used within an AppWrapper');
  }
  return context;
};
