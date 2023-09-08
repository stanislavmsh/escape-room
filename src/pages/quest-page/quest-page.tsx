import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MemoizedFooter from '../../components/footer/footer';
import MemoizedHeader from '../../components/header/header';
import { fetchSingleQuestAction } from '../../store/single-quest-data/single-quest-data.action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentLoadingStatus, getCurrentQuest } from '../../store/single-quest-data/single-quest-data.selectors';
import LoadingScreen from '../loading-page/loading-page';
import { humanizeDifficulty, humanizeTheme } from '../../utils/utils';
import { AppRoute } from '../../utils/const';

export default function QuestPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentId = useParams().id;
  const isLoading = useAppSelector(getCurrentLoadingStatus);

  useEffect(() => {
    dispatch(fetchSingleQuestAction(currentId as string));
  }, [currentId, dispatch]);

  const currentQuest = useAppSelector(getCurrentQuest);

  const difficultyHumanized = humanizeDifficulty(currentQuest?.level);
  const theme = humanizeTheme(currentQuest?.type);

  if(isLoading || currentQuest === null) {
    return <LoadingScreen />;
  }


  return(

    <div className="wrapper">
      <MemoizedHeader />
      <main className="decorated-page quest-page">
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
                height={768}
                alt=""
              />}
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {currentQuest?.title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{theme}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {currentQuest && `${currentQuest.peopleMinMax[0]}-${currentQuest.peopleMinMax[1]}`}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {difficultyHumanized}
              </li>
            </ul>
            <p className="quest-page__description">
              {currentQuest?.description}
            </p>
            <Link
              className="btn btn--accent btn--cta quest-page__btn"
              to={`${AppRoute.Quest}/${currentId || ''}${AppRoute.Booking}`}
            >
              Забронировать
            </Link>
          </div>
        </div>
      </main>
      <MemoizedFooter />
    </div>

  );

}
