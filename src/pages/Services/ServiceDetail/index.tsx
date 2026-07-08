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

  const labels = t(detail.labelsKey, { returnObjects: true }) as string[];

  return (
    <div className="container">
      <div className={styles.serviceDetail}>
        <ButtonLink
          size="xs"
          iconLeft={<ArrowLeft />}
          variant="link"
          to={servicesPath}
          className={styles.backLink}
        >
          {t('services.detail.backLink')}
        </ButtonLink>
        <div className={styles.content}>
          <PageIntro
            heading={t(detail.headingKey)}
            description={t(detail.descriptionKey)}
          />
          <ul className={styles.pills}>
            {labels.map((label) => (
              <li key={label}>
                <Pill>{label}</Pill>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.separator} />
        <div className={styles.cta}>
          <h2 className={`${styles.ctaHeading} text-heading-sm`}>
            {t('services.detail.ctaHeading')}
          </h2>
          <ButtonLink className={styles.contactBtn} to="/kontakt">
            {t('common.contactUs')}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
