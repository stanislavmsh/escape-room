import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/const';
import { userProcess } from './user-process/user-process.slice';
import { questsData } from './quests-data/quests-data.slice';
import { singleQuestData } from './single-quest-data/single-quest-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Quests]: questsData.reducer,
  [NameSpace.SingleQuest]: singleQuestData.reducer
});
