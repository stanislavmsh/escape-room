export type TBooking = {
  id: string;
  location: TLocation;
  slots: TSlots;
}

export type TLocation = {
  adress: string;
  coords: number[];
}

type TSlots = {
  today: TTime[];
  tomorrow: TTime[];
}

type TTime = {
  time: string;
  isAvailable: boolean;
}

