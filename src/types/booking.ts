export type TBooking = {
  id: string;
  location: TLocation;
  slots: TSlots;
}

export type TLocation = {
  address: string;
  coords: number[];
}

export type TSlots = {
  today: TTime[];
  tomorrow: TTime[];
}

type TTime = {
  time: string;
  isAvailable: boolean;
}

