import { TextareaHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const ContentContainer = styled.div`
  background: #fff;

  width: 100%;
  max-width: 1024px;
  padding-left: 16px;
  padding-right: 2px;
  border-radius: 25px;
`;

export const CommentContainer = styled.div`
  position: relative;

  p {
    word-wrap: break-word;
  }

  &::before {
    content: '';
    margin-top: 5px;

    position: absolute;
    left: 4px;
    height: 100%;

    border-style: solid;
    border-radius: 25px;
    border-color: #d0d0d0;
    background: #d0d0d0;
    border-width: 1px;
  }

  margin: 16px 0;
`;

export const Footer = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 16px 0;
  button {
    padding: 5px 8px;
    border: none;
    background-color: #9853ff;
    border-radius: 25px;
    color: #f0f2f5;
    width: 150px;
    font-size: 12px;
  }
`;

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  visible: boolean;
}

export const TextArea = styled.textarea<TextAreaProps>`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 100%;
  resize: none;
  margin-bottom: 16px;

  padding: 20px 32px;
  border: 1px solid #ddd;
  background: #efefef;
`;

interface IError {
  show: boolean;
}

export const Error = styled.div<IError>`
  ${props =>
    props.show
      ? css`
          display: block;
          margin-bottom: 32px;
        `
      : css`
          display: none;
          margin-bottom: 0;
        `}
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e83f5b;

  text-align: left;
`;
