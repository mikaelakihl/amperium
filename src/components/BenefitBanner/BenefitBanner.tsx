import { useTranslation } from 'react-i18next';
import { BenefitItem } from '../BenefitItem/BenefitItem';
import styles from './BenefitBanner.module.css';
import { Clock, ShieldCheck, Star } from 'lucide-react';

export function BenefitBanner() {
  const { t } = useTranslation();
  return (
    <div className={styles.benefitBanner}>
      <BenefitItem
        icon={<ShieldCheck />}
        title={t('home.benefitBanner.certified.title')}
        description={t('home.benefitBanner.certified.description')}
      />
      <BenefitItem
        icon={<Clock />}
        title={t('home.benefitBanner.response.title')}
        description={t('home.benefitBanner.response.description')}
      />
      <BenefitItem
        icon={<Star />}
        title={t('home.benefitBanner.credit.title')}
        description={t('home.benefitBanner.credit.description')}
      />
    </div>
  );
}
