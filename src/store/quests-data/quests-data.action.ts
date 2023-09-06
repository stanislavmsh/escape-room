import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { APIRoute } from '../../const';
import { TQuest } from '../../types/quest';
import { TBookingStatus } from '../../types/booking-status';


export const fetchQuestAction = createAsyncThunk<TQuest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuest',
  async (_arg , { extra: api}): Promise<TQuest[]> => {
    const {data} = await api.get<TQuest[]>(APIRoute.Quest);
    return data;
  }
);

export const fetchReservationAction = createAsyncThunk<TBookingStatus[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReservation',
  async (_arg , { extra: api}): Promise<TBookingStatus[]> => {
    const {data} = await api.get<TBookingStatus[]>(APIRoute.Reservation);
    return data;
  }
);
