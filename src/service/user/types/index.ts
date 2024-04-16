import { IUserResponse } from "../interfaces";

type KeysOfUserResponse = keyof IUserResponse;

export type IColumnsPage = {
  id: KeysOfUserResponse;
  label: string;
};
