import { useTranslation } from 'react-i18next';
import styles from './Badge.module.css';

export function Badge() {
  const { t } = useTranslation();
  return (
    <div className={`text-body-sm ${styles.badge}`}>
      <div className={styles.temp}>
        <p>Temporary</p>
      </div>
      <p>{t('hero.credit')}</p>
    </div>
  );
}
