import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ServicePreview } from './ServicePreview';

function renderServicePreview(showIntro?: boolean) {
  return render(
    <MemoryRouter>
      <ServicePreview showIntro={showIntro} />
    </MemoryRouter>
  );
}

describe('ServicePreview', () => {
  it('renders the section intro by default', () => {
    renderServicePreview();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /våra tjänster|our services/i
    );
  });

  it('hides the section intro when showIntro is false', () => {
    renderServicePreview(false);
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
  });

  it('always renders a card for every service', () => {
    renderServicePreview(false);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3);
  });

  it('links every service card to the services page', () => {
    renderServicePreview();
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => expect(link).toHaveAttribute('href', '/services'));
  });
});
