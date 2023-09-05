import { SortingDifficulty , SortingTheme } from '../../const';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortQuestsByDifficulty, sortQuestsByTheme } from '../../store/quests-data/quests-data.slice';
import { getCurrentDifficulty, getCurrentTheme } from '../../store/quests-data/quests-data.selectors';


export default function Sorting() : JSX.Element {

  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(getCurrentTheme);
  const currentDifficulty = useAppSelector(getCurrentDifficulty);

  const handleSortingByTheme = useCallback((optionText: string) => () => {
    dispatch(sortQuestsByTheme(optionText));
  }, [dispatch]);

  const handleSortingByDifficulty = useCallback((optionText: string) => () => {
    dispatch(sortQuestsByDifficulty(optionText));
  }, [dispatch]);


  return (

    <div className="page-content__item">
      <form className="filter" action="#" method="get">
        <fieldset className="filter__section">
          <legend className="visually-hidden">Тематика</legend>
          <ul className="filter__list">
            {SortingTheme.map((elem) => (
              <li key={elem.id} className="filter__item">
                <input type="radio" name="type" id={elem.id} defaultChecked={elem.id === currentTheme} />
                <label onClick={handleSortingByTheme(elem.id)} className="filter__label" htmlFor={elem.id}>
                  <svg
                    className="filter__icon"
                    width={elem.iconW}
                    height={elem.iconH}
                    aria-hidden="true"
                  >
                    <use xlinkHref={elem.iconName} />
                  </svg>
                  <span className="filter__label-text">{elem.value}</span>
                </label>
              </li>))}
          </ul>
        </fieldset>
        <fieldset className="filter__section">
          <legend className="visually-hidden">Сложность</legend>
          <ul className="filter__list">

            {SortingDifficulty.map((elem) => (
              <li key={elem.id} className="filter__item">
                <input type="radio" name="level" id={elem.id} defaultChecked={elem.id === currentDifficulty} />
                <label onClick={handleSortingByDifficulty(elem.id)} className="filter__label" htmlFor={elem.id}>
                  <span

                    className="filter__label-text"
                  >{elem.value}
                  </span>
                </label>
              </li>))}
          </ul>
        </fieldset>
      </form>
    </div>
  );
}
