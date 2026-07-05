import type { ReactNode } from 'react';
import styles from './PageIntro.module.css';

interface PageIntroProps {
  heading: string;
  description: ReactNode;
  note?: string;
}
export function PageIntro({ heading, description, note }: PageIntroProps) {
  return (
    <div className={styles.pageIntro}>
      <h2 className={`${styles.heading} text-heading-sm`}>{heading}</h2>
      <p className={`${styles.description} text-body-md `}>{description}</p>
      <p className={`${styles.note} text-body-md `}>{note}</p>
    </div>
  );
}
