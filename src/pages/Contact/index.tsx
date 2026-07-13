import { Form } from './components/Form/Form';
import { ContactDetails } from './components/ContactDetails/ContactDetails';
import { OpeningHours } from './components/OpeningHours/OpeningHours';
import styles from './index.module.css';
import { PageIntro } from '../../components/ui/PageIntro/PageIntro';
import pageIntroStyles from '../../components/ui/PageIntro/PageIntro.module.css';
import { Trans, useTranslation } from 'react-i18next';
import { usePageTitle } from '../../hooks/usePageTitle';

export function Contact() {
  const { t } = useTranslation();
  usePageTitle(t('common.contact'));
  return (
    <div className="container">
      <PageIntro
        heading={t('contact.heading')}
        description={
          <Trans
            i18nKey="contact.description"
            components={{
              highlight: <span className={pageIntroStyles.highlight} />,
            }}
          />
        }
      />
      <div className={styles.grid}>
        <Form />
        <div className={styles.sideColumn}>
          <ContactDetails />
          <OpeningHours />
        </div>
      </div>
    </div>
  );
}
