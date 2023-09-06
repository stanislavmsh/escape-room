import { SortingDifficulty, SortingTheme } from '../const';

export function humanizeDifficuly(value: string | undefined) {
  return SortingDifficulty.map((elem) => {
    if(elem.id === value) {
      return elem.value;
    }
  });
}

export function humanizeTheme(value: string | undefined) {

  return SortingTheme.map((elem) => {
    if(elem.id === value) {
      return elem.value;
    }
  });
}
