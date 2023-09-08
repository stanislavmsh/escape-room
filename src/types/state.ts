import { store } from '../store';
import { AuthStatus } from '../utils/const';
import { TQuest} from './quest';
import { TCurrentQuest } from './current-quest';
import { TBooking } from './booking';
import { TBookingStatus } from './booking-status';

export type TUserProcess = {
  authorizationStatus: AuthStatus;
}

export type TQuestsData = {
  currentDifficulty: string;
  currentTheme: string;
  quests: TQuest[];
  sortedQuests: TQuest[];
  isDataLoading: boolean;
  hasError: boolean;
  reservations: TBookingStatus[];
}

export type TSingleQuestData = {
  quest: TCurrentQuest | undefined;
  bookingInfo: TBooking[];
  hasError: boolean;
  isDataLoading: boolean;
  currentLocationInfo : TBooking | undefined;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
