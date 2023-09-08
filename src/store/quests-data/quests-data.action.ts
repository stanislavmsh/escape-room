import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { APIRoute, BACKEND_URL } from '../../utils/const';
import { TQuest } from '../../types/quest';
import { TBookingStatus } from '../../types/booking-status';
import { toast } from 'react-toastify';
import { getToken } from '../../services/token';


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

export const removeReservationAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/removeReservation',
  async (id) => {
    const token = getToken();
    try {
      await axios.delete(
        `${BACKEND_URL}${APIRoute.Reservation}/${id}`,
        {
          headers: { 'x-token': token }
        }
      );
    } catch {
      toast.warn('Ошибка удаления резервации');
    }
  }
);
