import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchPosts } from "./queries";
import { Post } from "./types";


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

const TimelineContainer = styled.div.attrs({
  className: "p-6 bg-white shadow-md rounded-md overflow-y-scroll",
})`
  grid-column: 6 / 12;
  grid-row: 5 / 15;
`;


function App() {
  // const { isLoading, data } = useQuery<Array<Post>>("posts", fetchPosts);

  // useEffect(() => {
  //   if (data) {
  //     console.log("We have data!", data);
  //   }
  // }, [data])

  return (
    <AppGrid>
      <PageTitle>Timeline</PageTitle>
      <TimelineContainer></TimelineContainer>
    </AppGrid>
  );
}

export default App;
