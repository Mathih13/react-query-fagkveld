import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import db from "./firebase";
import { Post } from "./types";

const app = express();

app.use(cors());

app.get("/posts", async (req: Request, res: Response) => {
  console.log("Request for Posts");
  let result: Array<Post> = [];
  const postsRef = db.collection("posts").limit(25).orderBy("date", "desc");
  const snapshot = await postsRef.get();
  snapshot.forEach((doc) => {
    let obj = doc.data();
    obj.date = obj.date.toDate();
    result.push(obj as Post);
  });
  res.json(result);
});

app.listen(5000, () => {
  console.log("Server Started at Port, 5000");
});
