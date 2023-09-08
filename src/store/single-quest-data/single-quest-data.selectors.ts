import { NameSpace } from '../../utils/const';
import { TBooking } from '../../types/booking';
import { TCurrentQuest } from '../../types/current-quest';
import { State } from '../../types/state';


export const getCurrentQuest = (state: State) : TCurrentQuest | undefined => state[NameSpace.SingleQuest].quest;
export const getBookingInfo = (state: State): TBooking[] => state[NameSpace.SingleQuest].bookingInfo;
export const getCurrentLoadingStatus = (state: State) : boolean => state[NameSpace.SingleQuest].isDataLoading;
export const getCurrentLocationInfo = (state: State) : TBooking | undefined => state[NameSpace.SingleQuest].currentLocationInfo;
