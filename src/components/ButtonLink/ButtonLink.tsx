import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { getButtonClassNames } from '../Button/Button.helpers';
import type { ButtonVariant, ButtonSize } from '../Button/Button.helpers';
import { ButtonIcon } from '../Button/ButtonIcon';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconOnly?: boolean;
  children?: ReactNode;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
}

export function ButtonLink({
  variant = 'primary',
  size = 'sm',
  fullWidth = false,
  iconOnly = false,
  children,
  iconLeft,
  iconRight,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...props}
      className={getButtonClassNames({ size, variant, fullWidth, iconOnly, className })}
    >
      {iconLeft && <ButtonIcon position="left">{iconLeft}</ButtonIcon>}
      {children}
      {iconRight && <ButtonIcon position="right">{iconRight}</ButtonIcon>}
    </a>
  );
}
