import React from "react";
import { FormattedRelativeTime, useIntl } from "react-intl";
import styled from "styled-components";
import { Post } from "../../types";

const Container = styled.div.attrs({
  className: "p-6 mb-4 w-4/12 mx-auto bg-white shadow-md rounded-md flex",
})``;

const UserProfileImage = styled.img.attrs({
  className: "h-16 rounded-full",
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
            {seconds < 60 ? (
              <FormattedRelativeTime
                updateIntervalInSeconds={1}
                value={seconds}
              />
            ) : (
              <FormattedRelativeTime
                updateIntervalInSeconds={60}
                value={seconds}
              />
            )}
          </PostTimestamp>
        </AuthorName>
        <PostBody>{data.body}</PostBody>
        <PostImage src={data.imageUrl} />
      </BodyContainer>
    </Container>
  );
};

export default UserPost;
