import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { getButtonClassNames } from './Button.helpers';
import type { ButtonVariant, ButtonSize } from './Button.helpers';
import { ButtonIcon } from './ButtonIcon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconOnly?: boolean;
  children?: ReactNode;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  loading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'sm',
  fullWidth = false,
  iconOnly = false,
  children,
  iconLeft,
  iconRight,
  loading = false,
  type = 'button',
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      disabled={loading || disabled}
      className={getButtonClassNames({ size, variant, fullWidth, iconOnly, className })}
    >
      {!loading && iconLeft && <ButtonIcon position="left">{iconLeft}</ButtonIcon>}

      {loading ? 'Loading...' : children}

      {!loading && iconRight && <ButtonIcon position="right">{iconRight}</ButtonIcon>}
    </button>
  );
}
