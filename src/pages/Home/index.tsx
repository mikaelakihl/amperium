import { useTranslation } from 'react-i18next';
import { Hero } from '../../components/Hero/Hero';

export function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <div className="container">
        <h2>{t('home.title')}</h2>
      </div>
    </>
  );
}
