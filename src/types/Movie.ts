import { AxiosResponse } from "axios";

export type Movie = {
  slug: string;
  title: string;
  items: AxiosResponse<any, any> | undefined;
  // id: number
  // name: string
  // vote_aberage: number
}