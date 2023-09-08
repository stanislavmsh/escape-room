import BookingDates from '../booking-dates/booking-dates';
import { getBookingInfo, getCurrentLocationInfo, getCurrentQuest } from '../../store/single-quest-data/single-quest-data.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import BookingMap from '../booking-map/booking-map';
import {useForm , SubmitHandler } from 'react-hook-form';
import { sendReservationFormAction } from '../../store/single-quest-data/single-quest-data.action';
import { fetchReservationAction } from '../../store/quests-data/quests-data.action';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../utils/const';

export type TBookingForm = {
  date: 'today'|'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  peopleCount: number;
  withChildren: boolean;
}

export default function BookingForm() : JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const bookingInfo = useAppSelector(getBookingInfo);
  const currentLocaion = useAppSelector(getCurrentLocationInfo);
  const currentQuest = useAppSelector(getCurrentQuest);

  const phoneRegExp = new RegExp('^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$');
  const nameRegExp = new RegExp('[A-Za-zА-Яа-яЁё\\s\'\\-]+');

  const [isActive , setIsActive] = useState<boolean>(false);

  const { register, handleSubmit , setValue , formState : { errors } , reset } = useForm<TBookingForm>({mode: 'onSubmit', criteriaMode: 'all'});

  const extractDay = (str: string) => {
    if (str.startsWith('today')) {
      return 'today';
    }
    if (str.startsWith('tomorrow')) {
      return 'tomorrow';
    }
  };

  const handleCheckboxChange = () => {
    setIsActive((current) => !current);
  };

  const handlePhoneChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = evt.target.value.replace(/[^\d]/g, '');

    let formattedValue = '';
    if (numericValue.length > 0) {
      formattedValue = `+7 (${numericValue.slice(1, 4)}) ${numericValue.slice(4, 7)}-${numericValue.slice(7, 9)}-${numericValue.slice(9, 11)}`;
    }
    evt.target.value = formattedValue;
  };

  const submit: SubmitHandler<TBookingForm> = (data) => {
    if (currentLocaion && currentQuest) {
      const dataForServer = {...data, placeId: currentLocaion.id, peopleCount: Number(data.peopleCount) , date: extractDay(data.date) as 'today'|'tomorrow' };
      dispatch(sendReservationFormAction({data: dataForServer , questId: currentQuest.id}));
      dispatch(fetchReservationAction());
    }
    reset();
    navigate(AppRoute.MyQuests);
  };


  return (
    <>
      <div className="page-content__item">
        <div className="booking-map">
          <div className="map">
            {currentLocaion && <BookingMap options={bookingInfo} selectedOption={currentLocaion}/>}
          </div>
          <p className="booking-map__address">
      Вы&nbsp;выбрали:&nbsp;{currentLocaion?.location.address}
          </p>
        </div>
      </div>

      <form
        onSubmit={(evt) => {
          handleSubmit(submit)(evt);
        }}
        className="booking-form"
        action="https://echo.htmlacademy.ru/"
        method="post"
      >
        {currentLocaion && <BookingDates setValue={setValue} register={register} slots={currentLocaion.slots}/>}
        <fieldset className="booking-form__section">
          <legend className="visually-hidden">Контактная информация</legend>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="name">
        Ваше имя
            </label>
            <input
              type="text"
              id="name"
              placeholder="Имя"
              maxLength={15}
              {...register('contactPerson', {required: true , validate: (value) => {
                const isNameValid = nameRegExp.test(value);
                return isNameValid;
              }})}
              aria-invalid={errors.contactPerson ? 'true' : 'false'}
            />
            {errors.contactPerson && <span role="alert">Ошибка: Введите свое имя </span>}
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="tel">
        Контактный телефон
            </label>
            <input
              type="tel"
              id="tel"
              placeholder="Телефон"
              {...register('phone', {required: true , validate: (value) => {
                const isPhoneValid = phoneRegExp.test(value);
                return isPhoneValid;
              }})}
              onChange={handlePhoneChange}
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && <span role="alert">Ошибка: Укажите телефон в RU формате. Прим. +7 (XXX) XXX-XX-XX </span>}
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="person">
        Количество участников
            </label>
            {currentQuest &&
             <input
               type="number"
               id="person"
               placeholder={'Количество участников'}
               {...register('peopleCount', {required: true, validate: (value) => {
                 const isPlayersAmountValid = value >= currentQuest?.peopleMinMax[0] && value <= currentQuest?.peopleMinMax[1];
                 return isPlayersAmountValid;
               }})}
               aria-invalid={errors.peopleCount ? 'true' : 'false'}
             />}
            {errors.peopleCount && <span role="alert">Ошибка: Возможно от {currentQuest?.peopleMinMax[0]} до {currentQuest?.peopleMinMax[1]} участников</span>}
          </div>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
            <input
              type="checkbox"
              id="children"
              {...register('withChildren')}
              defaultChecked
            />
            <span className="custom-checkbox__icon">
              <svg width={20} height={17} aria-hidden="true">
                <use xlinkHref="#icon-tick" />
              </svg>
            </span>
            <span className="custom-checkbox__label">
        Со&nbsp;мной будут дети
            </span>
          </label>
        </fieldset>
        <button
          className="btn btn--accent btn--cta booking-form__submit"
          type="submit"
          disabled={!isActive}
        >
    Забронировать
        </button>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
          <input
            type="checkbox"
            id="id-order-agreement"
            name="user-agreement"
            onChange={handleCheckboxChange}
            required
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
      Я&nbsp;согласен с
            <a className="link link--active-silver link--underlined" href="#">
        правилами обработки персональных данных
            </a>
      &nbsp;и пользовательским соглашением
          </span>
        </label>
      </form>
    </>
  );
}
