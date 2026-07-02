import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();
  return <h2>{t('services.title')}</h2>;
}
