import styles from './IconIndicator.module.css';

interface IconIndicatorProps {
  icon: React.ReactNode;
  transparent?: boolean;
}

export function IconIndicator({ icon, transparent }: IconIndicatorProps) {
  return (
    <div
      aria-hidden="true"
      className={transparent ? `${styles.iconIndicator} ${styles.transparent}` : styles.iconIndicator}
    >
      {icon}
    </div>
  );
}
