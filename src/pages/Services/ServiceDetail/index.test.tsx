import { afterAll, beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import i18n from '../../../i18n/i18n';
import { serviceSlugs, servicesPath } from '../../../routes/services';
import { ServiceDetail } from './index';

function renderServiceDetail(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`${servicesPath}/${slug}`]}>
      <Routes>
        <Route path={`${servicesPath}/:slug`} element={<ServiceDetail />} />
        <Route path={servicesPath} element={<div>services list</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('ServiceDetail', () => {
  const originalLanguage = i18n.language;

  beforeEach(() => {
    i18n.changeLanguage('sv');
  });

  afterAll(() => {
    i18n.changeLanguage(originalLanguage);
  });

  it('redirects to the services list for an unknown slug', () => {
    renderServiceDetail('does-not-exist');
    expect(screen.getByText('services list')).toBeInTheDocument();
  });

  it('renders the heading and description for a given service', () => {
    renderServiceDetail(serviceSlugs.service);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Service och underhåll' })
    ).toBeInTheDocument();
  });

  it('renders a pill for every label', () => {
    renderServiceDetail(serviceSlugs.service);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByText('Akut service')).toBeInTheDocument();
    expect(screen.getByText('Förebyggande underhåll')).toBeInTheDocument();
  });

  it('translates labels when the language changes', async () => {
    renderServiceDetail(serviceSlugs.electrical);
    expect(screen.getByText('Nyinstallation')).toBeInTheDocument();

    await i18n.changeLanguage('en');
    expect(screen.getByText('New installation')).toBeInTheDocument();
  });

  it('links back to the services list', () => {
    renderServiceDetail(serviceSlugs.project);
    expect(screen.getByRole('link', { name: /tjänster/i })).toHaveAttribute(
      'href',
      servicesPath
    );
  });

  it('links the contact CTA to the contact page', () => {
    renderServiceDetail(serviceSlugs.project);
    expect(screen.getByRole('link', { name: /kontakta oss/i })).toHaveAttribute(
      'href',
      '/kontakt'
    );
  });
});
