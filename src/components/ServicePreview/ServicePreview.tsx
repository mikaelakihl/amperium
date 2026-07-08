import { useTranslation } from 'react-i18next';
import { SectionIntro } from '../ui/SectionIntro/SectionIntro';
import { ServiceCard } from '../ServiceCard/ServiceCard';
import { ClipboardList, Wrench, Zap } from 'lucide-react';
import { serviceDetailPath } from '../../routes/services';
import styles from './ServicePreview.module.css';

interface ServicePreviewProps {
  showIntro?: boolean;
}

export function ServicePreview({ showIntro = true }: ServicePreviewProps) {
  const { t } = useTranslation();
  const cardHeadingLevel = showIntro ? 'h3' : 'h2';
  return (
    <section className={styles.servicePreview}>
      {showIntro && (
        <SectionIntro
          label={t('home.servicesPreview.label')}
          heading={t('home.servicesPreview.heading')}
        />
      )}
      <div className={styles.cards}>
        <div className={styles.cardContainer}>
          <ServiceCard
            title={t('home.serviceCard.service.title')}
            description={t('home.serviceCard.service.description')}
            icon={<Wrench />}
            linkTo={serviceDetailPath('service')}
            headingLevel={cardHeadingLevel}
          />
          <ServiceCard
            title={t('home.serviceCard.electrical.title')}
            description={t('home.serviceCard.electrical.description')}
            icon={<Zap />}
            linkTo={serviceDetailPath('electrical')}
            headingLevel={cardHeadingLevel}
          />
          <ServiceCard
            title={t('home.serviceCard.project.title')}
            description={t('home.serviceCard.project.description')}
            icon={<ClipboardList />}
            linkTo={serviceDetailPath('project')}
            headingLevel={cardHeadingLevel}
          />
        </div>
      </div>
    </section>
  );
}
