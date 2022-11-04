import { useState } from 'react';
import { Header } from '../../components/Header';
import * as Styles from './styles';

export function Home() {
  const [markDownText, setMarkdownText] = useState('');

  return (
    <>
      <Header />
      <Styles.Main>
        <Styles.TextArea
          value={markDownText}
          onChange={(e) => setMarkdownText(e.target.value)}
          rows={5}
        />
        <Styles.Article>{markDownText}</Styles.Article>
      </Styles.Main>
    </>
  );
}
