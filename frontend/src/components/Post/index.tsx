import React from "react";
import { Post } from "../../types";

type PostProps = {
  data: Post;
};

const Post: React.FC<PostProps> = ({ data }) => <div>{data.body}</div>;
