import { useTranslation } from 'react-i18next';
import styles from './Banner.module.css';

export function Banner() {
  const { t } = useTranslation();
  return (
    <div className={styles.banner}>
      <ul className={`${styles.list}`} role="list">
        <li className="text-body-md">{t('banner.service')}</li>
        <li className="text-body-md">{t('banner.electricalInstallation')}</li>
        <li className="text-body-md">{t('banner.projectManagement')}</li>
      </ul>
    </div>
  );
}
