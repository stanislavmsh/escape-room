import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { AppDispatch, State} from '../../types/state';
import { APIRoute, AppRoute, BACKEND_URL } from '../../utils/const';
import { setCurrentBookingInfo, setCurrentQuest } from './single-quest-data.slice';
import { TCurrentQuest } from '../../types/current-quest';
import { redirectToRoute } from '../action';
import { TBooking } from '../../types/booking';
import { TBookingRequest } from '../../types/booking-request';
import { getToken } from '../../services/token';
import { toast } from 'react-toastify';


export const fetchSingleQuestAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSingleQuest',
  async (id , { dispatch })=> {
    const urls = [
      `${BACKEND_URL + APIRoute.Quest}/${id}`,
      `${BACKEND_URL + APIRoute.Quest}/${id + APIRoute.Booking}`
    ];

    const requests = urls.map((url) =>
      axios.get(url)
    );

    try {
      const responses = await axios.all(requests);
      dispatch(setCurrentQuest(responses[0].data as TCurrentQuest));
      dispatch(setCurrentBookingInfo(responses[1].data as TBooking[]));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const sendReservationFormAction = createAsyncThunk<void , {data: TBookingRequest; questId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReservationForm',
  async ({data, questId}) => {
    const token = getToken();
    try {
      await axios.post<TBookingRequest>(
        `${BACKEND_URL}${APIRoute.Quest}/${questId}${APIRoute.Booking}` ,
        data,
        {
          headers: {'x-token': token}
        }
      );
    } catch {
      toast.warn('Ошибка бронирования');
    }
  }

);

