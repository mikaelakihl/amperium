import { Trans, useTranslation } from 'react-i18next';
import { PageIntro } from '../../components/ui/PageIntro/PageIntro';
import pageIntroStyles from '../../components/ui/PageIntro/PageIntro.module.css';
import { ServicePreview } from '../../components/ServicePreview/ServicePreview';
import { usePageTitle } from '../../hooks/usePageTitle';

export function Services() {
  const { t } = useTranslation();
  usePageTitle(t('common.services'));
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
