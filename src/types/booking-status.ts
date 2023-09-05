import { TLocation } from './booking';
import { TQuest } from './quest';

export type TBookingStatus = {
  date: 'today'|'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: TLocation;
  quest: TQuest;
}
