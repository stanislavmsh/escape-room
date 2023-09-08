export type TBookingRequest = {
  placeId: string;
} & TBookingForm;

export type TBookingForm = {
  date: 'today'|'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  peopleCount: number;
  withChildren: boolean;
}
