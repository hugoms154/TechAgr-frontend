import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 100%;

  margin: 32px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin-top: 32px;
    max-width: 768px;
    width: 100%;
    fieldset {
      padding: 20px 32px;

      border: 1px solid #ddd;
      border-radius: 25px;

      display: flex;
      flex-direction: column;

      input + textarea {
        margin-top: 32px;
      }
      textarea + button {
        margin-top: 32px;
      }

      input,
      textarea {
        padding: 20px 32px;
        border: 1px solid #ddd;
        background: #efefef;
        resize: none;
      }

      button {
        padding: 20px 32px;
        border-radius: 25px;
        border: 1px solid #ddd;
        background: #9853ff;
        color: #f0f2f5;
      }
    }
  }
`;

interface IError {
  show: boolean;
}

export const Error = styled.div<IError>`
  ${props =>
    props.show
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  color: #e83f5b;

  text-align: left;
`;
