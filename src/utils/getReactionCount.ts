import { ReactionObject } from "@api/response";

export const getReactionCount = (reactions: ReactionObject[]) => {
  const ADMIRE = reactions.find(
    ({ reactionType }) => reactionType === "ADMIRE"
  )?.count;
  const GREAT = reactions.find(
    ({ reactionType }) => reactionType === "GREAT"
  )?.count;
  const MOVING = reactions.find(
    ({ reactionType }) => reactionType === "MOVING"
  )?.count;
  return {
    ADMIRE,
    GREAT,
    MOVING,
  };
};
