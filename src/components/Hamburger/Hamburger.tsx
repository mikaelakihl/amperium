import styles from './Hamburger.module.css';

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}

export function Hamburger({
  open,
  onClick,
  disabled,
  label = 'Toggle menu',
}: HamburgerProps) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-expanded={open}
    >
      <span className={styles.bar} data-open={open ? '' : undefined} />
      <span className={styles.bar} data-open={open ? '' : undefined} />
      <span className={styles.bar} data-open={open ? '' : undefined} />
    </button>
  );
}
