import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 16px;
  background-color: #dbdbdb;

  > * {
    flex: 1;
  }
`;

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

  h1 {
    font-size: 1.7rem;
    font-weight: 800;
  }

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

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  p {
    white-space: pre-wrap;
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;

  &[type='checkbox'] {
    border-radius: 4px;
  }
`;

export const Note = styled.p`
  font-size: 0.8rem;
`;

export const FieldSet = styled.fieldset`
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;
