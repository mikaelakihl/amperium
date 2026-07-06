import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Footer } from './Footer';

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
}

describe('Footer', () => {
  it('links the logo to the home page', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: 'Amperium' })).toHaveAttribute(
      'href',
      '/'
    );
  });

  it('renders the services links with the correct routes', () => {
    renderFooter();
    const nav = screen.getByRole('navigation', { name: /tjänster|services/i });
    expect(within(nav).getByRole('link', { name: 'Service' })).toHaveAttribute(
      'href',
      '/tjanster/service'
    );
    expect(
      within(nav).getByRole('link', {
        name: /elinstallation|electrical installation/i,
      })
    ).toHaveAttribute('href', '/tjanster/elinstallation');
    expect(
      within(nav).getByRole('link', {
        name: /projektledning|project management/i,
      })
    ).toHaveAttribute('href', '/tjanster/projektledning');
  });

  it('renders the company links with the correct routes', () => {
    renderFooter();
    const nav = screen.getByRole('navigation', {
      name: /företaget|the company/i,
    });
    expect(
      within(nav).getByRole('link', { name: /om oss|about/i })
    ).toHaveAttribute('href', '/om-oss');
    expect(
      within(nav).getByRole('link', { name: /kontakt|contact/i })
    ).toHaveAttribute('href', '/kontakt');
  });

  it('links the phone number with a tel: href', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: '08-854 524' })).toHaveAttribute(
      'href',
      'tel:+46854524'
    );
  });

  it('links the email with a mailto: href', () => {
    renderFooter();
    expect(
      screen.getByRole('link', { name: 'info@amperium.se' })
    ).toHaveAttribute('href', 'mailto:info@amperium.se');
  });

  it('renders the postal address as text', () => {
    renderFooter();
    expect(screen.getByText('Klostervägen 3, Gustavsberg')).toBeInTheDocument();
  });

  it('renders the current year in the copyright text', () => {
    renderFooter();
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${year} Amperium`))
    ).toBeInTheDocument();
  });

  it('renders the instagram handle', () => {
    renderFooter();
    expect(screen.getByText('amperium_elektriska')).toBeInTheDocument();
  });
});
