import { useTranslation } from 'react-i18next';
import styles from './Banner.module.css';

export function Banner() {
  const { t } = useTranslation();
  return (
    <div className={styles.banner}>
      <ul className={`${styles.list}`} role="list">
        <li className="text-body-md">{t('home.banner.service')}</li>
        <li className="text-body-md">
          {t('home.banner.electricalInstallation')}
        </li>
        <li className="text-body-md">
          {t('home.banner.projectManagement')}
        </li>
      </ul>
    </div>
  );
}
