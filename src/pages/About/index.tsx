import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();
  return <h2>{t('about.title')}</h2>;
}
