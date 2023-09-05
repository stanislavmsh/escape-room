export const enum AppRoute {
  Root = '/',
  Login = '/login',
  Contacts = '/contacts',
  Booking = '/booking',
  MyQuests = '/my-quests',
  Quest = '/quest'
}

export const enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortingDifficulty {
  Any = 'Любой',
  Easy = 'Легкий',
  Medium = 'Средний',
  Hard = 'Сложный',
}

export enum SortingTheme {
  Adventures = 'Приключения',
  Horrors = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi',

}

export const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room/';
