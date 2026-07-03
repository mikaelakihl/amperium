import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';
import { getButtonClassNames } from '../Button/Button.helpers';
import type { ButtonVariant, ButtonSize } from '../Button/Button.helpers';
import { ButtonIcon } from '../Button/ButtonIcon';

interface ButtonLinkBaseProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconOnly?: boolean;
  children?: ReactNode;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
}

type ButtonLinkProps = ButtonLinkBaseProps &
  (
    /** Internal route, e.g. "/contact" — renders as a react-router Link (no full page reload). */
    | { to: string; href?: never }
    /** External/tel/mailto link — renders as a plain <a>. */
    | { to?: never; href: string }
  );

export function ButtonLink({
  variant = 'primary',
  size = 'sm',
  fullWidth = false,
  iconOnly = false,
  children,
  iconLeft,
  iconRight,
  className,
  to,
  href,
  ...props
}: ButtonLinkProps) {
  const classNames = getButtonClassNames({
    size,
    variant,
    fullWidth,
    iconOnly,
    className,
  });

  const content = (
    <>
      {iconLeft && <ButtonIcon position="left">{iconLeft}</ButtonIcon>}
      {children}
      {iconRight && <ButtonIcon position="right">{iconRight}</ButtonIcon>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classNames} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classNames} {...props}>
      {content}
    </a>
  );
}
