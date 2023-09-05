import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TQuestsData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchQuestAction } from './quests-data.action';
import { SortingDifficulty , SortingTheme } from '../../const';


const initialState: TQuestsData = {
  currentTheme: 'all',
  currentDifficulty: 'any',
  quests: [],
  sortedQuests: [],
  isDataLoading: false,
  hasError: false,
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    sortQuestsByTheme: (state , action: PayloadAction<string>) => {
      switch (action.payload) {
        case SortingTheme[0].id: // all
          state.currentTheme = action.payload;
          state.sortedQuests = state.quests.filter((elem) => state.currentDifficulty === 'any' || elem.level === state.currentDifficulty);
          break;
        default:
          state.currentTheme = action.payload;
          state.sortedQuests = state.quests.filter((elem) => elem.type === action.payload && (state.currentDifficulty === 'any' || elem.level === state.currentDifficulty));
      }
    },
    sortQuestsByDifficulty: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case SortingDifficulty[0].id: // any
          state.currentDifficulty = action.payload;
          state.sortedQuests = state.quests.filter((elem) => state.currentTheme === 'all' || elem.type === state.currentTheme);
          break;
        default:
          state.currentDifficulty = action.payload;
          state.sortedQuests = state.quests.filter((elem) => elem.level === action.payload && (state.currentTheme === 'all' || elem.type === state.currentTheme));
      }
    }


  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.sortedQuests = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.isDataLoading = false;
        state.hasError = true;
      });
  }

});


export const { sortQuestsByTheme , sortQuestsByDifficulty } = questsData.actions;
