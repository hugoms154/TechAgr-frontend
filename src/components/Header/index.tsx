import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from '../../styles/components/header';

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <div className="content">
        {history.location.pathname !== '/' && <Link to="/">{'<<<'}</Link>}

        <h1>Twiddit</h1>
      </div>
    </Container>
  );
};

export default Header;
