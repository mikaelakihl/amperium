import { useTranslation } from 'react-i18next';
import { Hero } from '../../components/Hero/Hero';
import { Banner } from '../../components/Banner/Banner';

export function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <Banner />
      <div className="container">
        <h2>{t('home.title')}</h2>
      </div>
    </>
  );
}
