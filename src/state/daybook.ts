import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';
import { PaperType } from './paperType';

export type DayBook = {
  respectBoardId: number | null; // 참조한 게시물
  content: string;
  category: string;
  hashtags: string[];
  paperType: PaperType;
};

export const daybookAtom = atomWithReset<Omit<DayBook, 'paperType'>>({
  respectBoardId: null,
  content: '',
  category: '',
  hashtags: [],
});

export const tagInputAtom = atom(false);
