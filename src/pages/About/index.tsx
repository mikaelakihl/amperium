import { Trans, useTranslation } from 'react-i18next';
import { PageIntro } from '../../components/ui/PageIntro/PageIntro';
import pageIntroStyles from '../../components/ui/PageIntro/PageIntro.module.css';
import { ContactCardList } from './components/ContactCardList/ContactCardList';
import { usePageTitle } from '../../hooks/usePageTitle';

export function About() {
  const { t } = useTranslation();
  usePageTitle(t('common.about'));
  return (
    <div className="container">
      <PageIntro
        heading={t('about.heading')}
        description={
          <Trans
            i18nKey="about.description"
            components={{
              highlight: <span className={pageIntroStyles.highlight} />,
            }}
          />
        }

        note={t('about.note')}
      />
      <ContactCardList />
    </div>
  );
}
