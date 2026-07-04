import { useTranslation } from 'react-i18next';
import { SectionIntro } from '../SectionIntro/SectionIntro';
import { ServiceCard } from '../ServiceCard/ServiceCard';
import { ClipboardList, Wrench, Zap } from 'lucide-react';
import styles from './ServicePreview.module.css';

export function ServicePreview() {
  const { t } = useTranslation();
  return (
    <section className={styles.servicePreview}>
      <SectionIntro
        label={t('home.servicesPreviewLabel')}
        heading={t('home.servicesPreviewHeading')}
      />
      <div className={styles.cards}>
        <div className={styles.cardContainer}>
          <ServiceCard
            title={t('home.serviceCardServiceTitle')}
            description={t('home.serviceCardServiceDescription')}
            icon={<Wrench />}
            linkTo="/services"
          />
          <ServiceCard
            title={t('home.serviceCardElectricalTitle')}
            description={t('home.serviceCardElectricalDescription')}
            icon={<Zap />}
            linkTo="/services"
          />
          <ServiceCard
            title={t('home.serviceCardProjectTitle')}
            description={t('home.serviceCardProjectDescription')}
            icon={<ClipboardList />}
            linkTo="/services"
          />
        </div>
      </div>
    </section>
  );
}
