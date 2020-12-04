import Timestamp from "firebase/firestore";

export type Post = {
  body: string;
  imageUrl: string;
  user: User;
  date: string | any;
};

export type User = {
  firstName: string;
  lastName: string;
  profileImageUrl: string;
};
