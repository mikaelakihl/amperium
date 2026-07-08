import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Services } from './index';

function renderServices() {
  return render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );
}

describe('Services', () => {
  it('renders the page heading', () => {
    renderServices();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /våra tjänster|our services/i,
      })
    ).toBeInTheDocument();
  });

  it('does not render the ServicePreview section intro', () => {
    renderServices();
    expect(
      screen.queryByText(/vad vi gör|what we do/i)
    ).not.toBeInTheDocument();
  });

  it('renders a card for every service', () => {
    renderServices();
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3);
  });
});
