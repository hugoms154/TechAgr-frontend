import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
  width: 90%;
  height: 100%;

  margin: 32px auto;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-bottom: 32px;
  border-bottom: 1px solid #bababa;
  a {
    padding: 5px 15px;
    border-radius: 25px;
    border: 0;

    background: #9853ff;
    color: #f0f2f5;
  }
`;
