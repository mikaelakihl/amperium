import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactCardList } from './ContactCardList';

describe('ContactCardList', () => {
  it('renders a card for every contact', () => {
    render(<ContactCardList />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
  });

  it('renders the name of every contact', () => {
    render(<ContactCardList />);
    ['Simon Kihl', 'Jimmy Rittervall', 'William Darlöf', 'Oscar Sjögren'].forEach(
      (name) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      }
    );
  });
});
