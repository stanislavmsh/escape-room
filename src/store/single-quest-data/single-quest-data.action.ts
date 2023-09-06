import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { AppDispatch, State} from '../../types/state';
import { APIRoute, AppRoute, BACKEND_URL } from '../../const';
import { setCurrentBookingInfo, setCurrentQuest } from './single-quest-data.slice';
import { TCurrentQuest } from '../../types/current-quest';
import { redirectToRoute } from '../action';
import { TBooking } from '../../types/booking';


export const fetchSingleQuestAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSingleQuest',
  async (id , { dispatch })=> {
    const urls = [
      `${BACKEND_URL + AppRoute.Quest}/${id}`,
      `${BACKEND_URL + APIRoute.Quest}/${id + AppRoute.Booking}`
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

