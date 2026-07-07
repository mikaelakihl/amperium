import type { ReactNode } from 'react';
import styles from './Pill.module.css';

interface PillProps {
  children: ReactNode;
  variant?: 'default' | 'secondary';
  className?: string;
}

export function Pill({ children, variant = 'default', className = '' }: PillProps) {
  const variantClass = variant === 'secondary' ? styles.secondary : '';

  return (
    <span className={`text-label-sm ${styles.pill} ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
