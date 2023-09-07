import styles from './no-cards.module.css';

type NoCardsProps = {
  isReservations : boolean;
}

export default function NoCards({isReservations} : NoCardsProps) {
  return (
    isReservations
      ?
      <p className = {`title title--size-s ${styles['no_reservations']}`}>Вы ещё не бронировали квесты</p>
      :
      <p className = {`title title--size-s ${styles['no_filters']}`}>Мы ещё не придумали квесты на заданные фильтры :(</p>
  );
}
