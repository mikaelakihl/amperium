import { Trans, useTranslation } from 'react-i18next';
import { PageIntro } from '../../components/PageIntro/PageIntro';
import pageIntroStyles from '../../components/PageIntro/PageIntro.module.css';
import { ContactCardList } from '../../components/ContactCardList/ContactCardList';

export function About() {
  const { t } = useTranslation();
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
