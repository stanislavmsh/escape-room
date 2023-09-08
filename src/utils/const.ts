export const enum AppRoute {
  Root = '/',
  Login = '/login',
  Contacts = '/contacts',
  Booking = '/booking',
  MyQuests = '/my-quests',
  Quest = '/quest',
  NotFound = '/not-found'
}

export const enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const SortingDifficulty = [
  {
    value: 'Любой',
    id: 'any'
  },
  {
    value: 'Легкий',
    id: 'easy'
  },
  {
    value: 'Средний',
    id: 'medium'
  },{
    value: 'Сложный',
    id: 'hard'
  }
] as const;

export const enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Quest = '/quest',
  Reservation = '/reservation',
  Booking = '/booking',
}

export const enum NameSpace {
  Quests = 'QUESTS',
  User = 'USER',
  SingleQuest = 'SINGLEQUEST',
}

export const SortingTheme = [
  {
    value: 'Все квесты',
    id: 'all',
    iconName: '#icon-all-quests',
    iconW: 26,
    iconH: 30,
  },
  {
    value: 'Приключения',
    id: 'adventure',
    iconName: '#icon-adventure',
    iconW: 36,
    iconH: 30,
  },
  {
    value: 'Ужасы',
    id: 'horror',
    iconName: '#icon-horror',
    iconW: 30,
    iconH: 30,
  },
  {
    value: 'Мистика',
    id: 'mystic',
    iconName: '#icon-mystic',
    iconW: 30,
    iconH: 30,
  },
  {
    value: 'Детектив',
    id: 'detective',
    iconName: '#icon-detective',
    iconW: 40,
    iconH: 30,
  },
  {
    value: 'Ski-fi',
    id: 'sciFi',
    iconName: '#icon-sci-fi',
    iconW: 28,
    iconH: 30,
  },

] as const;


export const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room';
// export const URL_MARKER_DEFAULT = '../markup/img/svg/pin-default.svg';
// export const URL_MARKER_ACTIVE = '../markup/img/svg/pin-active.svg';
