export interface Api {
  channels: Channel[];
}

export interface Channel {
  id: string;
  title: string;
  images: Images;
  schedules: Schedule[];
}

export interface Images {
  logo: string;
}

export interface Schedule {
  title: string;
  id: string;
  start: string;
  end: string;
}
