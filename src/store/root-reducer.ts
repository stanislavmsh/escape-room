import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process.slice';
import { questsData } from './quests-data/quests-data.slice';
// import { NameSpace } from '../const';
// import { offersData } from './offers-data/offers-data.slice';
// import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Quests]: questsData.reducer
});
