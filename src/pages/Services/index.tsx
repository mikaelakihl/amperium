import { Trans, useTranslation } from 'react-i18next';
import { PageIntro } from '../../components/PageIntro/PageIntro';
import pageIntroStyles from '../../components/PageIntro/PageIntro.module.css';
import { ServicePreview } from '../../components/ServicePreview/ServicePreview';

export function Services() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <PageIntro
        heading={t('services.heading')}
        description={
          <Trans
            i18nKey="services.description"
            components={{
              highlight: <span className={pageIntroStyles.highlight} />,
            }}
          />
        }
      />
      <ServicePreview showIntro={false} />
    </div>
  );
}
