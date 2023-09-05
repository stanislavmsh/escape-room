export type TQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: TLevel;
  type: TTheme;
  peopleMinMax: number[];
}


type TTheme = 'adventures'|'horror'|'mystic'|'detective'|'sci-fi';
type TLevel = 'easy'|'medium'|'hard';
