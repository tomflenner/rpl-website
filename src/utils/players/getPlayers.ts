import axios from "axios";
import { Player } from "../../types/Player";

export const getPlayers = async () => {
  return await axios.get<Player[]>("/api/players").then((res) => res.data);
};
