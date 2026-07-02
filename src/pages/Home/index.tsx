import { useTranslation } from 'react-i18next';

export function Home() {
  const { t } = useTranslation();
  return <h2>{t('home.title')}</h2>;
}
