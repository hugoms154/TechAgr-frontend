import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import {
  ContentContainer,
  CommentContainer,
  Footer,
  Error,
  TextArea,
} from '../../styles/components/post';

interface IError {
  show: boolean;
  messages: string[];
}

interface IPost {
  id: string;
  title: string;
  content: string;
  comments: IPost[];
  created_at: string;
}

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [replyBoxVisibility, setReplyBoxVisibility] = useState(false);
  const [iErrors, setIErrors] = useState({} as IError);
  const [reload, setReload] = useState(false);
  const [text, setText] = useState('');
  const history = useHistory();
  const [, , postId] = history.location.pathname.split('/');

  const handleReply = useCallback(async () => {
    if (!replyBoxVisibility) {
      setReplyBoxVisibility(!replyBoxVisibility);
      return;
    }

    setIErrors({ show: false, messages: [] });
    const errors = [];
    if (text === '' || text.length < 24)
      errors.push('Mensagem deve conter no mínimo 24 caracteres.');
    if (text.length > 256)
      errors.push('Mensagem deve conter no máximo 256 caracteres.');

    if (errors.length !== 0) {
      setIErrors({ show: true, messages: errors });
      return;
    }

    await api.post(`/posts/append/${postId}`, {
      fatherId: post.id,
      content: text,
      comments: [],
    });
    setReplyBoxVisibility(!replyBoxVisibility);
    setReload(true);
  }, [replyBoxVisibility, post, text, postId]);

  useEffect(() => {
    (async () => {
      if (reload) {
        setReload(false);
        const { data } = await api.get(`/posts/${postId}`);
        history.push(`/posts/${postId}`, {
          post: data,
        });
      }
    })();
  }, [reload, postId, history]);

  return (
    <ContentContainer>
      <CommentContainer>
        <ContentContainer>
          {post && (
            <>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
              <Footer>
                <Error show={iErrors.show}>
                  {iErrors.messages &&
                    iErrors.messages.map(message => (
                      <strong key={message}>{message}</strong>
                    ))}
                </Error>
                <TextArea
                  name={`${post.id}`}
                  rows={5}
                  placeholder="Mensagem"
                  minLength={24}
                  maxLength={256}
                  visible={replyBoxVisibility}
                  value={text}
                  onChange={e => setText(e.target.value)}
                />
                <button
                  name={`replyButton-${post.id}`}
                  type="button"
                  onClick={handleReply}
                >
                  Responder
                </button>
              </Footer>

              {post.comments &&
                post.comments.map(newComment => (
                  <Post post={newComment} key={newComment.id} />
                ))}
            </>
          )}
        </ContentContainer>
      </CommentContainer>
    </ContentContainer>
  );
};

export default Post;
