import Cards from '../../components/cards/cards';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Sorting from '../../components/sorting/sorting';
import { useAppSelector } from '../../hooks';
import { getSortedQuests } from '../../store/quests-data/quests-data.selectors';


export default function MainPage() {

  const questsList = useAppSelector(getSortedQuests);
  return(

    <div className="wrapper">
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
            квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
            Выберите тематику
            </h2>
          </div>
          <Sorting />
          <h2 className="title visually-hidden">Выберите квест</h2>
          <Cards questsList={questsList} isReservations={false}/>
        </div>
      </main>
      <Footer />
    </div>

  );

}
