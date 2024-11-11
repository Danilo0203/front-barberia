import { Data } from "@/types/background.types";
import { queryStrapi } from "../../config";

export const getBackground = async (): Promise<Data> => {
  const res = await queryStrapi("api/turno?populate=*");
  return res.data;
};
