import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TQuestsData } from '../../types/state';
import { NameSpace } from '../../utils/const';
import { fetchQuestAction, fetchReservationAction } from './quests-data.action';
import { SortingDifficulty , SortingTheme } from '../../utils/const';


const initialState: TQuestsData = {
  currentTheme: 'all',
  currentDifficulty: 'any',
  quests: [],
  sortedQuests: [],
  isDataLoading: false,
  hasError: false,
  reservations: [],
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    sortQuestsByTheme: (state , action: PayloadAction<string>) => {
      switch (action.payload) {
        case SortingTheme[0].id:
          state.currentTheme = action.payload;
          state.sortedQuests = state.quests.filter((elem) => state.currentDifficulty === SortingDifficulty[0].id || elem.level === state.currentDifficulty);
          break;
        default:
          state.currentTheme = action.payload;
          state.sortedQuests = state.quests.filter((elem) => elem.type === action.payload && (state.currentDifficulty === SortingDifficulty[0].id || elem.level === state.currentDifficulty));
      }
    },
    sortQuestsByDifficulty: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case SortingDifficulty[0].id:
          state.currentDifficulty = action.payload;
          state.sortedQuests = state.quests.filter((elem) => state.currentTheme === SortingTheme[0].id || elem.type === state.currentTheme);
          break;
        default:
          state.currentDifficulty = action.payload;
          state.sortedQuests = state.quests.filter((elem) => elem.level === action.payload && (state.currentTheme === SortingTheme[0].id || elem.type === state.currentTheme));
      }
    },
    removeReservedQuest: (state, action: PayloadAction<string>) => {
      state.reservations = state.reservations.filter((elem) => elem.id !== action.payload);
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
      .addCase(fetchReservationAction.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.isDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchReservationAction.rejected, (state) => {
        state.isDataLoading = false;
        state.hasError = true;
      });
  }

});


export const { sortQuestsByTheme , sortQuestsByDifficulty , removeReservedQuest} = questsData.actions;
