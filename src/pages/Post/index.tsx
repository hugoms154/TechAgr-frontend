import React from 'react';
import Header from '../../components/Header';

import PostComponent from '../../components/Post';

import { Container } from '../../styles/pages/post';

interface Post {
  id: string;
  title: string;
  content: string;
  comments: Post[];
  created_at: string;
}

interface Props {
  location: {
    state: {
      post: Post;
    };
  };
}

const Post: React.FC<Props> = props => {
  const {
    location: {
      state: { post },
    },
  } = props;

  return (
    <>
      <Header />
      <Container>
        <PostComponent post={post} />
      </Container>
    </>
  );
};

export default Post;
