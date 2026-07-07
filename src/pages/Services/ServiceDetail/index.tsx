import { Navigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { getServiceIdFromSlug, servicesPath } from '../../../routes/services';
import { Pill } from '../../../components/Pill/Pill';
import { ButtonLink } from '../../../components/ButtonLink/ButtonLink';
import { PageIntro } from '../../../components/PageIntro/PageIntro';
import { serviceDetails } from './content';
import styles from './index.module.css';

export function ServiceDetail() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const serviceId = slug ? getServiceIdFromSlug(slug) : undefined;

  const detail = serviceDetails.find((item) => item.id === serviceId);

  if (!detail) {
    return <Navigate to={servicesPath} replace />;
  }

  return (
    <div className="container">
      <ButtonLink
        iconLeft={<ArrowLeft />}
        variant="link"
        to={servicesPath}
        className={styles.backLink}
      >
        {t('services.detail.backLink')}
      </ButtonLink>
      <PageIntro
        heading={t(detail.headingKey)}
        description={t(detail.descriptionKey)}
      />
      <div className={styles.pills}>
        {detail.labels.map((label) => (
          <Pill key={label}>{label}</Pill>
        ))}
      </div>
    </div>
  );
}
