import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { Navigation } from './Navigation';

function renderNavigation(initialPath = '/') {
  const utils = render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Navigation />
    </MemoryRouter>
  );
  const navs = utils.container.querySelectorAll('nav');
  const mobileNav = Array.from(navs).find((nav) =>
    nav.querySelector('button')
  )!;
  const desktopNav = Array.from(navs).find((nav) => nav !== mobileNav)!;
  return { ...utils, mobileNav, desktopNav };
}

describe('Navigation', () => {
  it('renders the language switcher and the call-us button', () => {
    renderNavigation();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /call us|ring oss/i })
    ).toBeInTheDocument();
  });
});

describe('NavDesktop', () => {
  it('renders a link for every page', () => {
    const { desktopNav } = renderNavigation();
    expect(within(desktopNav).getAllByRole('link')).toHaveLength(4);
  });

  it('marks the link for the current route as active', () => {
    const { desktopNav } = renderNavigation('/about');
    const aboutLink = within(desktopNav).getByRole('link', {
      name: /about|om oss/i,
    });
    expect(aboutLink).toHaveAttribute('aria-current', 'page');
  });

  it('does not mark the home link as active on another route', () => {
    const { desktopNav } = renderNavigation('/about');
    const homeLink = within(desktopNav).getByRole('link', {
      name: /^home$|^hem$/i,
    });
    expect(homeLink).not.toHaveAttribute('aria-current', 'page');
  });

  it('marks the home link as active on the home route', () => {
    const { desktopNav } = renderNavigation('/');
    const homeLink = within(desktopNav).getByRole('link', {
      name: /^home$|^hem$/i,
    });
    expect(homeLink).toHaveAttribute('aria-current', 'page');
  });
});

describe('NavMobile', () => {
  it('keeps the menu links hidden until the hamburger button is opened', () => {
    const { mobileNav } = renderNavigation();
    const toggle = within(mobileNav).getByRole('button');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(within(mobileNav).queryAllByRole('link')).toHaveLength(0);
  });

  it('reveals the menu links when the hamburger button is clicked', async () => {
    const user = userEvent.setup();
    const { mobileNav } = renderNavigation();
    const toggle = within(mobileNav).getByRole('button');

    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(within(mobileNav).getAllByRole('link')).toHaveLength(4);
  });

  it('closes the menu again after a link is clicked', async () => {
    const user = userEvent.setup();
    const { mobileNav } = renderNavigation();
    const toggle = within(mobileNav).getByRole('button');

    await user.click(toggle);
    await user.click(
      within(mobileNav).getByRole('link', { name: /about|om oss/i })
    );

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(within(mobileNav).queryAllByRole('link')).toHaveLength(0);
  });
});
