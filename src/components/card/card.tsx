import { Link } from 'react-router-dom';
import { TQuest } from '../../types/quest';
import { humanizeDate, humanizeDifficulty } from '../../utils/utils';
import { TBookingStatus } from '../../types/booking-status';
import { useAppDispatch } from '../../hooks';
import { removeReservationAction } from '../../store/quests-data/quests-data.action';
import { removeReservedQuest } from '../../store/quests-data/quests-data.slice';

type TCardProps = {
  data: TQuest | TBookingStatus;
  isReservations: boolean;
}

export default function Card({data , isReservations} : TCardProps) : JSX.Element {
  const dispatch = useAppDispatch();

  let difficultyHumanized;
  let quest: TQuest;
  let detailedInfo;
  let reservationInfo: TBookingStatus;

  if('level' in data) {
    difficultyHumanized = humanizeDifficulty(data.level);
    quest = data;
  } else {
    difficultyHumanized = humanizeDifficulty(data.quest.level);
    reservationInfo = data;
    quest = reservationInfo.quest;
    detailedInfo = data;
  }

  const handleCancelClick = (str: string) => {
    dispatch(removeReservationAction(str));
    dispatch(removeReservedQuest(str));
  };

  return(

    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet= {`${quest.previewImgWebp} , ${quest.previewImgWebp.replace('.webp', '')}@2x.webp 2x`}
          />
          <img
            src={quest.previewImg}
            srcSet={`${quest.previewImg.replace('.jpg', '')}2x.jpg 2x`}
            width={344}
            height={232}
            alt="Мужчина в клетке в подземелье."
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`/quest/${data.id}`}>
            {quest.title}
          </Link>
          {isReservations
            ?
            <span className="quest-card__info">
              {humanizeDate(detailedInfo?.date)},&nbsp;{detailedInfo?.time}. {detailedInfo?.location.address}
            </span>
            :
            ''}
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {
              isReservations
                ?
                detailedInfo?.peopleCount
                :
                `${quest.peopleMinMax[0]} - ${quest.peopleMinMax[1]}`
            }&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {difficultyHumanized}
          </li>
        </ul>
        {
          isReservations
            ?
            <button
              className="btn btn--accent btn--secondary quest-card__btn"
              type="button"
              onClick={() => handleCancelClick(reservationInfo.id)}
            >
                Отменить
            </button>
            :
            ''
        }
      </div>
    </div>
  );
}
