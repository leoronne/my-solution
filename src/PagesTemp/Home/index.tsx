import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import { Header } from '../../components/Header';
import * as Styles from './styles';
import { text } from '../../data/text';

export function Home() {
  const [markDownText, setMarkdownText] = useState(text);

  return (
    <>
      <Header />
      <Styles.Main>
        <Styles.TextArea
          value={markDownText}
          onChange={(e) => setMarkdownText(e.target.value)}
          rows={5}
        />
        <Styles.Article>
          <ReactMarkdown remarkPlugins={[gfm]}>{markDownText}</ReactMarkdown>
        </Styles.Article>
      </Styles.Main>
    </>
  );
}
