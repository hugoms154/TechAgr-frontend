import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Table from '../../components/Table';
import api from '../../services/api';

import { Container, ActionsContainer } from '../../styles/pages/dashboard';

interface Post {
  id: string;
  title: string;
  content: string;
  comments: Post[];
  created_at: string;
}

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const { data } = await api.get<Post[]>('/posts');
      setPosts(data);
      setLoading(false);
    }
    loadPosts();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ActionsContainer>
          <Link to="/posts">Criar novo tópico</Link>
        </ActionsContainer>

        {loading ? <h1>Carregando...</h1> : <Table posts={posts} />}
      </Container>
    </>
  );
};

export default Dashboard;
