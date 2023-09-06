import { Link } from 'react-router-dom';
import { TQuest } from '../../types/quest';
import { humanizeDifficuly } from '../../utils/utils';

type TCardProps = {
  quest: TQuest;
}

export default function Card({quest} : TCardProps) : JSX.Element {

  const difficulty = humanizeDifficuly(quest.level);

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
          <Link className="quest-card__link" to={`/quest/${quest.id}`}>
            {quest.title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {`${quest.peopleMinMax[0]} - ${quest.peopleMinMax[1]}`}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {difficulty}
          </li>
        </ul>
      </div>
    </div>
  );
}
