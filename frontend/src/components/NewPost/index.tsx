import React, { useEffect, useState } from "react";
import { useMutation, useQueryCache } from "react-query";
import styled from "styled-components";
import { sendPost } from "../../mutations";
import Loading from "../Loading";

const NewPostTitle = styled.h2.attrs({
  className: "text-2xl font-medium text-blue-500",
})``;

const TextInput = styled.input.attrs({
  className: " h-10 p-2 shadow-md rounded w-full",
})``;

const InputContainer = styled.div.attrs({
  className: "flex items-center mt-4",
})``;

const PostButton = styled.button.attrs({
  className: "ml-4 w-2/12 h-10 bg-blue-500 text-gray-100 rounded",
})``;

const NewPost: React.FC = () => {
  const queryCache = useQueryCache();
  const [textInput, setTextInput] = useState("");
  const [mutatePost, { isLoading, error, isSuccess }] = useMutation(sendPost);

  const handleClick = async () => {
    if (textInput !== "") {
      const response = await mutatePost({
        body: textInput,
        date: new Date().getTime(),
        imageUrl: "",
      });

      if (response && response.ok) {
        setTextInput("");
        queryCache.invalidateQueries("posts");
      }
    }
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <NewPostTitle>What are you thinking about?</NewPostTitle>
      <InputContainer>
        <TextInput
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />
        <PostButton onClick={handleClick}>Post</PostButton>
      </InputContainer>
      {isLoading && <Loading />}
      {isSuccess && <p>Post saved!</p>}
      {error && <p>Oh no, something went wrong!</p>}
    </>
  );
};

export default NewPost;
