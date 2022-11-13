import axios from "axios";
import { NextApiHandler } from "next";
import { Player } from "../../../types/Player";

const handler: NextApiHandler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET": {
      await axios
        .get<Player[]>("http://51.75.124.215:8080/api/players")
        .then(({ data }) => res.json(data))
        .catch((err) => {
          if (axios.isAxiosError(err) && err.response) {
            console.error(err);
            res.status(err.response.status || 400).end(err.response.statusText);
          } else res.status(400).end("Bad Request");
        });
      break;
    }
    default: {
      res.setHeader("Allow", "GET, POST");
      res.status(405).end("Method Not Allowed");
    }
  }
};

export default handler;
