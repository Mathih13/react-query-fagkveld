import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { useMutation, useQuery } from "react-query";
import { fetchPosts } from "./queries";
import { Post as PostType } from "./types";
import Post from "./components/Post";
import Loading from "./components/Loading";
import { sendPost } from "./mutations";
import NewPost from "./components/NewPost";

const AppGrid = styled.div.attrs({
  className: "bg-indigo-50",
})`
  display: grid;
  grid-template-rows: repeat(16, 1fr);
  grid-template-columns: repeat(16, 1fr);
  height: 100vh;
  overflow: hidden;
`;

const PageTitle = styled.div.attrs({
  className:
    "md:container md:mx-auto flex items-center justify-center text-4xl",
})`
  grid-column: 4 / 8;
`;

const NewPostContainer = styled.div.attrs({
  className: "p-6 overflow-y-scroll",
})`
  grid-column: 5 / 13;
  grid-row: 2 / -1;
`;

const TimelineContainer = styled.div.attrs({
  className: "p-6 overflow-y-scroll",
})`
  grid-column: 1 / -1;
  grid-row: 5 / -1;
`;

function App() {
  const { isLoading, data } = useQuery<Array<PostType>>("posts", fetchPosts);

  return (
    <AppGrid>
      <NewPostContainer>
        <NewPost />
      </NewPostContainer>
      <TimelineContainer>
        {isLoading && <Loading />}
        {!isLoading && data && data.map((postdata, i) => <Post key={i} data={postdata} />)}
      </TimelineContainer>
    </AppGrid>
  );
}

export default App;
