import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import router from "../../../lib/router";

const handler = nextConnect();

handler.use(router).get((req, res: NextApiResponse) => {
  res.json(req["session"] ?? {});
});

export default handler;
