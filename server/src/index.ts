import dotenv from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./firebase";
import { Post } from "./types";
import firebase from "firebase";

const app = express();
var jsonParser = bodyParser.json();

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

app.post("/post", jsonParser, (req: Request, res: Response) => {
  const post: Post = {
    body: req.body.body,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    imageUrl: req.body.imageUrl,
    user: {
      firstName: "Dave",
      lastName: "Johnson",
      profileImageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  };

  db.collection("posts")
    .add(post)
    .then(() => res.sendStatus(200))
    .catch((reason) => {
      console.log(reason);
      res.sendStatus(500);
    });
});

app.listen(5000, () => {
  console.log("Server Started at Port, 5000");
});
