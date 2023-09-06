import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import BookingForm from '../../components/booking-form/booking-form';
import { useAppSelector } from '../../hooks';
import { getCurrentQuest } from '../../store/single-quest-data/single-quest-data.selectors';


export default function BookingPage() : JSX.Element {

  const currentQuest = useAppSelector(getCurrentQuest);

  return(

    <div className="wrapper">
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            {currentQuest &&
            <source
              type="image/webp"
              srcSet={`${currentQuest.coverImgWebp} , ${currentQuest.coverImgWebp.replace('.webp', '')}@2x.webp 2x`}
            />}
            { currentQuest &&
              <img
                src={currentQuest.coverImg}
                srcSet={`${currentQuest.coverImg.replace('.jpg', '')}2x.jpg 2x`}
                width={1366}
                height={1959}
                alt=""
              />}
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
            Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {currentQuest?.title}
            </p>
          </div>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
