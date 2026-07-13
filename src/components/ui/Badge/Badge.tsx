import { useTranslation } from 'react-i18next';
import styles from './Badge.module.css';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  const { t } = useTranslation();
  return (
    <div className={`text-body-sm ${styles.badge}`}>
      <div className={styles.temp}>{children}</div>
      <p>{t('home.hero.credit')}</p>
    </div>
  );
}
