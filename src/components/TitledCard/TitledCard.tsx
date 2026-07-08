import type { ReactNode } from 'react';
import styles from './TitledCard.module.css';

interface TitledCardProps {
  label: string;
  children: ReactNode;
}

export function TitledCard({ children, label }: TitledCardProps) {
  return (
    <div className={styles.titledCard}>
      <h3 className={`${styles.label} text-label-sm`}>{label}</h3>
      <div>{children}</div>
    </div>
  );
}
