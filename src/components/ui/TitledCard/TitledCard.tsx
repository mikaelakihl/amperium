import type { ReactNode } from 'react';
import styles from './TitledCard.module.css';

interface TitledCardProps {
  label: string;
  children: ReactNode;
}

export function TitledCard({ children, label }: TitledCardProps) {
  return (
    <div className={styles.titledCard}>
      <h2 className={`${styles.label} text-label-sm`}>{label}</h2>
      <div>{children}</div>
    </div>
  );
}
