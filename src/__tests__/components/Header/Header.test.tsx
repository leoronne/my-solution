import { render, screen } from '@testing-library/react';

import { Header } from '../../../components/Header';

describe('Header', () => {
  it('should render the Header component', () => {
    render(<Header />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /markdown live preview/i,
      }),
    ).toBeInTheDocument();
  });
});
