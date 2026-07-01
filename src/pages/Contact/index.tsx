import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  return <h2>{t('contact.title')}</h2>;
}
