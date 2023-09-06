import { TBookingStatus } from '../../types/booking-status';
import { TQuest } from '../../types/quest';
import Card from '../card/card';

type TCardsProps = {
  questsList: TQuest[] | TBookingStatus[];
  isReservations : boolean;
}

export default function Cards({questsList, isReservations} : TCardsProps) {

  return(
    <div className="cards-grid">
      {questsList.map((elem) => <Card isReservations={isReservations} data={elem} key={elem.id}/>)}
    </div>
  );
}
