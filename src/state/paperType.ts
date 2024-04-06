import { atom } from 'jotai';

export type PaperType = '모눈종이' | '줄노트';

export const paperTypeState = atom<PaperType | null>(null);
