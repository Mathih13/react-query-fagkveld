import React from "react";
import { FormattedRelativeTime, useIntl } from "react-intl";
import styled from "styled-components";
import { Post } from "../../types";

const Container = styled.div.attrs({
  className: "p-6 mb-4 w-6/12 mx-auto bg-white shadow-md rounded-md flex",
})``;

const UserProfileImage = styled.img.attrs({
  className: "h-20 rounded-full",
})``;

const BodyContainer = styled.div.attrs({ className: "mx-4 w-full" })``;

const AuthorName = styled.div.attrs({ className: "text-sm text-indigo-400" })``;

const PostBody = styled.p.attrs({ className: "p-4 text-lg" })``;

const PostTimestamp = styled.div.attrs({
  className: "text-sm text-gray-400",
})``;

const PostImage = styled.img.attrs({ className: "w-full" })``;

type PostProps = {
  data: Post;
};

const UserPost: React.FC<PostProps> = ({ data }) => {
  let seconds =
    ((new Date().getTime() - new Date(data.date).getTime()) / 1000) * -1;

  return (
    <Container>
      <UserProfileImage src={data.user.profileImageUrl} />
      <BodyContainer>
        <AuthorName>
          {data.user.firstName} {data.user.lastName}
          <PostTimestamp>
            <FormattedRelativeTime
              updateIntervalInSeconds={60000}
              value={seconds}
            />
          </PostTimestamp>
        </AuthorName>
        <PostBody>{data.body}</PostBody>
        {data.imageUrl && <PostImage src={data.imageUrl} />}
      </BodyContainer>
    </Container>
  );
};

export default UserPost;
