import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { APIRoute } from '../../const';
import { TQuest } from '../../types/quest';


export const fetchQuestAction = createAsyncThunk<TQuest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg , { extra: api}): Promise<TQuest[]> => {
    const {data} = await api.get<TQuest[]>(APIRoute.Quest);
    return data;
  }
);
