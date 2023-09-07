import { TBookingStatus } from '../../types/booking-status';
import { TQuest } from '../../types/quest';
import Card from '../card/card';
import NoCards from '../no-cards/no-cards';

type TCardsProps = {
  questsList: TQuest[] | TBookingStatus[];
  isReservations : boolean;
}

export default function Cards({questsList, isReservations} : TCardsProps) {

  if(questsList.length === 0) {
    return <NoCards isReservations={isReservations}/>;
  }

  return(
    <div className="cards-grid">
      {questsList.map((elem) => <Card isReservations={isReservations} data={elem} key={elem.id}/>)}
    </div>
  );
}
