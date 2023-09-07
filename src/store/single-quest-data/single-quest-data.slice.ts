import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TSingleQuestData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchSingleQuestAction, sendReservationFormAction } from './single-quest-data.action';
import { TCurrentQuest } from '../../types/current-quest';
import { TBooking } from '../../types/booking';

const initialState: TSingleQuestData = {
  quest: undefined,
  bookingInfo: [],
  hasError: false,
  isDataLoading: false,
  currentLocationInfo: undefined,
};

export const singleQuestData = createSlice({
  name: NameSpace.SingleQuest,
  initialState,
  reducers: {
    setCurrentQuest: (state , action: PayloadAction<TCurrentQuest>) => {
      state.quest = action.payload;
    },
    setCurrentBookingInfo: (state , action: PayloadAction<TBooking[]>) => {
      state.bookingInfo = action.payload;
      state.currentLocationInfo = action.payload[0];
    },
    setCurrentLocationInfo: (state, action: PayloadAction<string>) => {
      state.currentLocationInfo = state.bookingInfo.find((elem) => elem.id === action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSingleQuestAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchSingleQuestAction.fulfilled , (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchSingleQuestAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(sendReservationFormAction.rejected, (state) => {
        state.hasError = true;
      });
  }

});


export const { setCurrentQuest , setCurrentBookingInfo , setCurrentLocationInfo} = singleQuestData.actions;
