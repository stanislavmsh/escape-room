import { useAppSelector } from '../../hooks';
import { getSortedQuests } from '../../store/quests-data/quests-data.selectors';
import Card from '../card/card';

export default function Cards() {

  const questsList = useAppSelector(getSortedQuests);

  return(
    <div className="cards-grid">
      {questsList.map((elem) => <Card quest={elem} key={elem.id}/>)}
    </div>
  );
}
