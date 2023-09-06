import { useCallback } from 'react';
import {useAppDispatch} from '../../hooks';
import { fetchQuestAction } from '../../store/quests-data/quests-data.action';

export default function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleAgainClick = useCallback(() => {
    dispatch(fetchQuestAction);
  },[dispatch]);

  return (
    <>
      <p className="error__text">Не удалось загрузить</p>
      <button
        onClick={handleAgainClick}
        className="replay replay--error"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </>
  );
}

