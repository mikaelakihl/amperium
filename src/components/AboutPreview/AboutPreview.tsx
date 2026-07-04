import { useTranslation } from 'react-i18next';
import { SectionIntro } from '../SectionIntro/SectionIntro';

export function AboutPreview() {
  const { t } = useTranslation();
  return (
    <section>
      <div>
        <SectionIntro
          label={t('home.aboutPreviewLabel')}
          heading={t('home.aboutPreviewHeading')}
          description={t('home.aboutPreviewDescription')}
        />
      </div>
    </section>
  );
}
