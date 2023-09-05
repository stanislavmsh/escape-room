import { NameSpace } from '../../const';
import { TQuest } from '../../types/quest';
import { State } from '../../types/state';


export const getQuests = (state: State): TQuest[] => state[NameSpace.Quests].quests;
export const getSortedQuests = (state: State): TQuest[] => state[NameSpace.Quests].sortedQuests;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Quests].isDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Quests].hasError;
export const getCurrentTheme = (state: State): string => state[NameSpace.Quests].currentTheme;
export const getCurrentDifficulty = (state: State): string => state[NameSpace.Quests].currentDifficulty;
