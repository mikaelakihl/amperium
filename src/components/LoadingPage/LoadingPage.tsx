import { useTranslation } from 'react-i18next';
import styles from './LoadingPage.module.css';

export function LoadingPage() {
  const { t } = useTranslation();
  return (
    <div className={styles.loading}>
      <p>{t('loading')}</p>
    </div>
  );
}
