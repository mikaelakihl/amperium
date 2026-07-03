import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Hero } from './Hero';

function renderHero() {
  return render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );
}

describe('Hero', () => {
  it('renders the slogan as the page heading', () => {
    renderHero();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /fungera|work/i
    );
  });

  it('links every "contact us" button to the contact page', () => {
    renderHero();
    const links = screen.getAllByRole('link', {
      name: /kontakta oss|contact us/i,
    });
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => expect(link).toHaveAttribute('href', '/contact'));
  });

  it('links every "our services" button to the services page', () => {
    renderHero();
    const links = screen.getAllByRole('link', {
      name: /våra tjänster|our services/i,
    });
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) =>
      expect(link).toHaveAttribute('href', '/services')
    );
  });

  it('renders a credit rating badge for each badge slot', () => {
    renderHero();
    expect(
      screen.getAllByText(/kreditvärdighet|credit rating/i)
    ).toHaveLength(2);
  });
});
