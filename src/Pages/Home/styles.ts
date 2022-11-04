import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;
  display: flex;
  gap: 16px;
  background-color: #dbdbdb;
  overflow-y: hidden;

  > * {
    flex: 1;
  }
`;

export const TextArea = styled.textarea`
  padding: 8px;
  resize: none;
  border: none;
  overflow-y: auto;
  display: inline-block;
  vertical-align: top;
  overflow-y: scroll;
`;

export const Article = styled.article`
  padding: 8px;
  display: flex;
  background-color: #fff;
  overflow-y: auto;
  white-space: normal;
  display: inline-block;
  width: 50%;
  vertical-align: top;
  overflow-y: scroll;
`;
