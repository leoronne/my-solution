import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import { Header } from '../../components/Header';
import { text } from '../../data/text';
import * as Styles from './styles';
import { sanitizeBlocks, translateToHTML } from '../../utils/translateToHTML';

export function Home() {
  const [markDownText, setMarkdownText] = useState(text);
  const [isReactMarkdown, setIsReactMarkdown] = useState(false);
  const [markDownPreview, setMarkdownPreview] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const sanitizedBlocks = sanitizeBlocks(markDownText.split(/\n/));

    setMarkdownPreview(translateToHTML(sanitizedBlocks));
  }, [markDownText]);

  return (
    <>
      <Header />
      <Styles.Container>
        <Styles.InfoContainer>
          <Styles.FieldSet>
            <Styles.Checkbox
              type="checkbox"
              id="react-markdown"
              name="react-markdown"
              checked={isReactMarkdown}
              onChange={() => setIsReactMarkdown((state) => !state)}
            />
            <label htmlFor="react-markdown">
              use <code>react-markdown</code>
            </label>
          </Styles.FieldSet>

          <Styles.Note>
            Note: the application has two implementations, one using <code>react-markdown</code>{' '}
            with more features and one using a manual logic. Keep in mind to always add an empty
            line to render a proper paragraph block when using the manual implementation.
          </Styles.Note>
        </Styles.InfoContainer>

        <Styles.Main>
          <Styles.TextArea
            value={markDownText}
            onChange={(e) => setMarkdownText(e.target.value)}
            placeholder="Type your markdown text here"
            rows={5}
          />
          <Styles.Article id="live-preview">
            {isReactMarkdown ? (
              <ReactMarkdown remarkPlugins={[gfm]}>{markDownText}</ReactMarkdown>
            ) : (
              markDownPreview.map((Element, index) => (
                <React.Fragment key={String(index)}>{Element}</React.Fragment>
              ))
            )}
          </Styles.Article>
        </Styles.Main>
      </Styles.Container>
    </>
  );
}
