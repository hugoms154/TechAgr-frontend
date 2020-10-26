import React, { TableHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/components/table';

interface Post {
  id: string;
  title: string;
  content: string;
  comments: Post[];
  created_at: string;
}

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  posts: Post[];
}

const Table: React.FC<TableProps> = ({ posts }) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Respostas</th>
            <th>Data de criação</th>
          </tr>
        </thead>

        <tbody>
          {posts &&
            posts.map(
              post =>
                post.title && (
                  <tr key={post.id}>
                    <td>
                      <Link
                        to={{
                          pathname: `/posts/${post.id}`,
                          state: { post },
                        }}
                      >
                        {post.title}
                      </Link>
                    </td>
                    <td>{post.comments.length}</td>
                    <td>
                      <span>
                        {Intl.DateTimeFormat('pt-br').format(
                          new Date(post.created_at),
                        )}
                      </span>
                    </td>
                  </tr>
                ),
            )}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
