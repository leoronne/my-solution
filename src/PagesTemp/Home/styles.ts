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
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  overflow-y: auto;
  white-space: normal;
  vertical-align: top;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 0.1em;
    padding-top: 0.3em;
  }

  ul,
  ol {
    list-style: none;
  }

  table > thead > tr > th {
    text-align: left;
  }
`;
