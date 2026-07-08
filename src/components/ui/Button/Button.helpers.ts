import styles from './Button.module.css';

export type ButtonVariant =
  'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface GetButtonClassNamesOptions {
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth?: boolean;
  iconOnly?: boolean;
  className?: string;
}

export function getButtonClassNames({
  size,
  variant,
  fullWidth,
  iconOnly,
  className,
}: GetButtonClassNamesOptions) {
  return [
    styles.button,
    styles[size],
    styles[variant],
    fullWidth && styles.fullWidth,
    iconOnly && styles.iconOnly,
    className,
  ]
    .filter(Boolean)
    .join(' ');
}
