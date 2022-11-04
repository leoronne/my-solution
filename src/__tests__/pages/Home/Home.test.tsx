/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen, within } from '@testing-library/react';
import { text } from '../../../data/text';

import { Home } from '../../../pages/Home';

describe('Home', () => {
  it('should render a textarea input', () => {
    render(<Home />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render a livepreview of the markdown', () => {
    render(<Home />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: text } });

    /* 
      Headers
    */
    expect(
      screen.getByRole('heading', {
        name: /markdown syntax guide/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /headers/i,
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /this is a heading h1/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /this is a heading h2/i,
        level: 2,
      }),
    ).toBeInTheDocument();

    /* 
      Separator
    */
    expect(screen.getByRole('separator')).toBeInTheDocument();

    /* 
      Paragraphs
    */
    const article = screen.getByRole('article');
    const firstParagraphLine = within(article).getByText(
      /this is an empty block this is part of the same block/i,
    );
    const secondParagraphLine1 = within(article).getByText(/this is a separated block/i);

    // Should NOT be the same node
    expect(firstParagraphLine?.isSameNode(secondParagraphLine1)).toBe(false);
  });
});
