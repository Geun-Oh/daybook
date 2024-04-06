export type PostDaybookResponse = {
  boardId: number;
  content: string;
  authorId: number;
  category: string;
  hearts: number;
  respectBoardId: number;
  hashtags: string;
};

export type GetDaybookResponse = {
  boardId: number;
  content: string;
  respectBoardId: number | null;
  authoreId: number;
  category: string;
  hearts: number;
  hashtags: string[];
  paperType: string;
  createdAt: string;
  reactions: ReactionObject[];
};

export const REACTION_TYPE = {
  MOVING: "MOVING",
  GREAT: "GREAT",
  ADMIRE: "ADMIRE",
} as const;

export type ReactionsResponse = {
  reactionId: number;
  reactionType: keyof typeof REACTION_TYPE;
  memberId: number;
  boardId: number;
};

export type ReactionObject = {
  count: number;
  reactionType: keyof typeof REACTION_TYPE;
};
