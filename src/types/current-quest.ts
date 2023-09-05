import { TQuest } from './quest';

export type TCurrentQuest = {
  description: string;
  coverImg: string;
  coverImgWebp: string;

} & TQuest
