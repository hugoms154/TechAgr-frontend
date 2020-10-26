import React, { FormEvent, useCallback, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

import { Container, Error } from '../../styles/pages/createPost';
import api from '../../services/api';

interface IError {
  show: boolean;
  messages: string[];
}

const CreatePost: React.FC = () => {
  const { push } = useHistory();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const [iErrors, setIErrors] = useState({} as IError);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      setIErrors({ show: false, messages: [] });
      const errors = [];
      if (text === '' || text.length < 24)
        errors.push('Mensagem deve conter no mínimo 24 caracteres.');
      if (text.length > 256)
        errors.push('Mensagem deve conter no máximo 256 caracteres.');
      if (title === '' || title.length < 5)
        errors.push('Título deve conter no mínimo 24 caracteres.');
      if (title.length > 64)
        errors.push('Título deve conter no máximo 64 caracteres.');

      if (errors.length !== 0) {
        setIErrors({ show: true, messages: errors });
        return;
      }

      api.post('/posts', {
        title,
        content: text,
        created_at: Date.now(),
        comments: [],
      });

      push('/');
    },
    [title, text, push],
  );

  return (
    <>
      <Header />
      <Container>
        <h1>Faça uma nova postagem</h1>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <Error show={iErrors.show}>
              {iErrors.messages &&
                iErrors.messages.map(message => (
                  <strong key={message}>{message}</strong>
                ))}
            </Error>

            <input
              name="title"
              type="text"
              placeholder="Título"
              minLength={5}
              maxLength={64}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <textarea
              name="content"
              rows={5}
              placeholder="Mensagem"
              minLength={24}
              maxLength={256}
              value={text}
              onChange={e => setText(e.target.value)}
            />

            <button type="submit">Enviar</button>
          </fieldset>
        </form>
      </Container>
    </>
  );
};

export default CreatePost;
