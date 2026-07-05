import { useTranslation } from 'react-i18next';
import { PageIntro } from '../../components/PageIntro/PageIntro';

export function About() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <PageIntro
        heading={t('about.heading')}
        description={t('about.description')}
        note={t('about.note')}
      />
    </div>
  );
}
