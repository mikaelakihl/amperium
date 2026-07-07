import type { ReactNode } from 'react';
import styles from './Pill.module.css';

interface PillProps {
  children: ReactNode;
}

export function Pill({ children }: PillProps) {
  return <span className={` text-label-sm ${styles.pill}`}>{children}</span>;
}
