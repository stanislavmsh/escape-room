// import { Link } from 'react-router-dom';
// import { TQuest } from '../../types/quest';
// import { humanizeDifficulty } from '../../utils/utils';
// import { TBookingStatus } from '../../types/booking-status';

// type TCardProps = {
//   data: TQuest | TBookingStatus;
//   isReservations: boolean;
// }

// export default function Card({data , isReservations} : TCardProps) : JSX.Element {

//   // const difficulty = humanizeDifficulty(quest.level);
//   let difficulty;

//   if('level' in data) {
//     difficulty = humanizeDifficulty(data.level);
//   } else {
//     difficulty = humanizeDifficulty(data.quest.level);
//   }

//   return(

//     <div className="quest-card">
//       <div className="quest-card__img">
//         <picture>
//           <source
//             type="image/webp"
//             srcSet= {`${data.previewImgWebp} , ${data.previewImgWebp.replace('.webp', '')}@2x.webp 2x`}
//           />
//           <img
//             src={data.previewImg}
//             srcSet={`${data.previewImg.replace('.jpg', '')}2x.jpg 2x`}
//             width={344}
//             height={232}
//             alt="Мужчина в клетке в подземелье."
//           />
//         </picture>
//       </div>
//       <div className="quest-card__content">
//         <div className="quest-card__info-wrapper">
//           <Link className="quest-card__link" to={`/quest/${data.id}`}>
//             {data.title}
//           </Link>
//         </div>
//         <ul className="tags quest-card__tags">
//           <li className="tags__item">
//             <svg width={11} height={14} aria-hidden="true">
//               <use xlinkHref="#icon-person" />
//             </svg>
//             {`${data.peopleMinMax[0]} - ${data.peopleMinMax[1]}`}&nbsp;чел
//           </li>
//           <li className="tags__item">
//             <svg width={14} height={14} aria-hidden="true">
//               <use xlinkHref="#icon-level" />
//             </svg>
//             {difficulty}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
