import axios from "axios";
import { Player } from "../../types/Player";

export const getTop = async (by: string, limit: number = 10) => {
  return await axios
    .get<Player[]>(`/api/top?by=${by}&limit=${limit}`)
    .then((res) => res.data);
};
