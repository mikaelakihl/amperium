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
        title={t('home.benefitBannerCertifiedTitle')}
        description={t('home.benefitBannerCertifiedDescription')}
      />
      <BenefitItem
        icon={<Clock />}
        title={t('home.benefitBannerResponseTitle')}
        description={t('home.benefitBannerResponseDescription')}
      />
      <BenefitItem
        icon={<Star />}
        title={t('home.benefitBannerCreditTitle')}
        description={t('home.benefitBannerCreditDescription')}
      />
    </div>
  );
}
