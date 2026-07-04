import { useTranslation } from 'react-i18next';
import { Hero } from '../../components/Hero/Hero';
import { Banner } from '../../components/Banner/Banner';
import { AboutPreview } from '../../components/AboutPreview/AboutPreview';

export function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <Banner />
      <div className="container">
        <AboutPreview />
      </div>
    </>
  );
}
