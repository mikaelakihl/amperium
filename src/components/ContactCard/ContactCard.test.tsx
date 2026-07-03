import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactCard } from './ContactCard';

const defaultProps = {
  name: 'Simon Kihl',
  image: '/simon.png',
  phone: '+1234567890',
  email: 'simon.kihl@example.com',
};

const unavailableAltText = /no image available|ingen bild kunde visas/i;

describe('ContactCard', () => {
  it('renders the image with the contact name as alt text', () => {
    render(<ContactCard {...defaultProps} />);
    const img = screen.getByRole('img', { name: defaultProps.name });
    expect(img).toHaveAttribute('src', defaultProps.image);
  });

  it('falls back to the placeholder image when no image is provided', () => {
    render(<ContactCard {...defaultProps} image={undefined} />);
    const img = screen.getByRole('img', { name: unavailableAltText });
    expect(img.getAttribute('src')).not.toBe(defaultProps.image);
  });

  it('falls back to the placeholder image and updates the alt text when the image fails to load', () => {
    render(<ContactCard {...defaultProps} />);
    const img = screen.getByRole('img', { name: defaultProps.name });

    fireEvent.error(img);

    const fallbackImg = screen.getByRole('img', { name: unavailableAltText });
    expect(fallbackImg.getAttribute('src')).not.toBe(defaultProps.image);
  });

  it('links the phone number with a tel: href', () => {
    render(<ContactCard {...defaultProps} />);
    expect(
      screen.getByRole('link', { name: defaultProps.phone })
    ).toHaveAttribute('href', `tel:${defaultProps.phone}`);
  });

  it('links the email with a mailto: href', () => {
    render(<ContactCard {...defaultProps} />);
    expect(
      screen.getByRole('link', { name: defaultProps.email })
    ).toHaveAttribute('href', `mailto:${defaultProps.email}`);
  });
});
