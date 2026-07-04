import { useTranslation } from 'react-i18next';
import { SectionIntro } from '../SectionIntro/SectionIntro';

export function ServicePreview() {
  const { t } = useTranslation();
  return (
    <section>
      <SectionIntro
        label={t('home.servicesPreviewLabel')}
        heading={t('home.servicesPreviewHeading')}
      />
    </section>
  );
}
