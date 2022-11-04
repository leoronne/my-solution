/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
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
    const firstParagraphLine1 = screen.getByText('This text will be italic');
    const firstParagraphLine2 = screen.getByText('This will also be italic');

    // Should belong to the same parentNode
    expect(firstParagraphLine1?.parentNode === firstParagraphLine2?.parentNode).toBeTruthy();

    // Should NOT belong to the same parentNode
    const secondParagraphLine1 = screen.getByText('This text will be bold');
    expect(firstParagraphLine1?.parentNode === secondParagraphLine1?.parentNode).not.toBeTruthy();
    expect(firstParagraphLine2?.parentNode === secondParagraphLine1?.parentNode).not.toBeTruthy();
  });
});
