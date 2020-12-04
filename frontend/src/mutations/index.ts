import config from "../config";
import { Post } from "../types";

type PostData = { date: number } & Pick<Post, "body" | "imageUrl">;

const sendPost = async (data: PostData) => {
  return await fetch(`${config.api.baseUrl}/post`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export { sendPost };
