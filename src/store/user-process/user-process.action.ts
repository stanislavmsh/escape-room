import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { APIRoute , AppRoute } from '../../const';
import { redirectToRoute } from '.././action';
import { TUserData , TAuthData } from '../../types/user-data';
import { dropToken, saveUserInfo } from '../../services/token';
import { fetchReservationAction } from '../quests-data/quests-data.action';


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg , {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email: email , password}, {dispatch, extra: api}) => {
    const {data: {token , email : emailFromServer }} = await api.post<TUserData>(APIRoute.Login, {email, password});
    saveUserInfo(token , emailFromServer);
    dispatch(fetchReservationAction());
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
