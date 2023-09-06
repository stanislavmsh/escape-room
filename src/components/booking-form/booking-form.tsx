import BookingDates from '../booking-dates/booking-dates';
import { getBookingInfo, getCurrentLocationInfo } from '../../store/single-quest-data/single-quest-data.selectors';
import { useAppSelector } from '../../hooks';
import BookingMap from '../booking-map/booking-map';

export default function BookingForm() : JSX.Element {

  const bookingInfo = useAppSelector(getBookingInfo);

  // const test = bookingInfo[2].id;

  // const currentLocaion = bookingInfo.find((date) => date.id === test);

  const currentLocaion = useAppSelector(getCurrentLocationInfo);

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
        className="booking-form"
        action="https://echo.htmlacademy.ru/"
        method="post"
      >
        {currentLocaion && <BookingDates slots={currentLocaion.slots}/>}
        <fieldset className="booking-form__section">
          <legend className="visually-hidden">Контактная информация</legend>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="name">
        Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              required
              pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
            />
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="tel">
        Контактный телефон
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="Телефон"
              required
              pattern="[0-9]{10,}"
            />
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="person">
        Количество участников
            </label>
            <input
              type="number"
              id="person"
              name="person"
              placeholder="Количество участников"
              required
            />
          </div>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
            <input
              type="checkbox"
              id="children"
              name="children"
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
        >
    Забронировать
        </button>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
          <input
            type="checkbox"
            id="id-order-agreement"
            name="user-agreement"
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
