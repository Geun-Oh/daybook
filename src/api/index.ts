import { DayBook } from "@state/daybook";
import client from "./client";
import {
  GetDaybookResponse,
  PostDaybookResponse,
  REACTION_TYPE,
  ReactionsResponse,
} from "./response";

interface Response<T> {
  status: number;
  data: T;
  timestamp: Date;
}

export const postDaybook = async (rawData: DayBook) => {
  const { data } = await client.post<Response<PostDaybookResponse>>("/board", {
    ...rawData,
  });
  return data;
};

export const getDaybook = async (id: string) => {
  const { data } = await client.get<Response<GetDaybookResponse>>(
    `/board/${id}`
  );
  return data;
};

export const getDaybookList = async () => {
  const { data } =
    await client.get<Response<GetDaybookResponse[]>>("/board/boards");
  return data;
};

export const deleteDaybookById = async (id: number) => {
  const { data } = await client.delete<
    Response<{
      boardId: number;
    }>
  >(`/board/${id}`);
  return data;
};

export const postReactions = async (
  reactionType: keyof typeof REACTION_TYPE,
  boardId: number
) => {
  const { data } = await client.post<Response<ReactionsResponse>>(
    `/reactions`,
    {
      reactionType,
      boardId,
    }
  );
  return data;
};

export const getRandomDaybooks = async () => {
  const { data } =
    await client.get<Response<GetDaybookResponse[]>>("/board/random");
  return data;
};
