import { TSlots } from '../../types/booking';

type BookingDatesProps = {
  slots: TSlots;
}

export default function BookingDates({slots} : BookingDatesProps) : JSX.Element {


  return (
    <fieldset className="booking-form__section">
      <legend className="visually-hidden">Выбор даты и времени</legend>
      <fieldset className="booking-form__date-section">
        <legend className="booking-form__date-title">Сегодня</legend>
        <div className="booking-form__date-inner-wrapper">
          {slots.today.map((elem) => (
            <label key={`today${elem.time.replace(':','h')}m`} className="custom-radio booking-form__date">
              <input
                type="radio"
                id={`today${elem.time.replace(':','h')}m`}
                name="date"
                required
                defaultValue={`today${elem.time.replace(':','h')}m`}
                disabled={elem.isAvailable}
              />
              <span className="custom-radio__label">{elem.time}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="booking-form__date-section">
        <legend className="booking-form__date-title">Завтра</legend>
        <div className="booking-form__date-inner-wrapper">
          {slots.tomorrow.map((elem) => (
            <label key={`tomorrow${elem.time.replace(':','h')}m`} className="custom-radio booking-form__date">
              <input
                type="radio"
                id={`tomorrow${elem.time.replace(':','h')}m`}
                name="date"
                required
                defaultValue={`tomorrow${elem.time.replace(':','h')}m`}
                disabled={elem.isAvailable}
              />
              <span className="custom-radio__label">{elem.time}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </fieldset>
  );
}
