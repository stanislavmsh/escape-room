import { store } from '../store';
import { AuthStatus } from '../const';
import { TQuest} from './quest';

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
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
