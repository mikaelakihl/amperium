import { useTranslation } from 'react-i18next';
import { Hero } from '../../components/Hero/Hero';
import { Banner } from '../../components/Banner/Banner';
import { AboutPreview } from '../../components/AboutPreview/AboutPreview';
import { ServicePreview } from '../../components/ServicePreview/ServicePreview';

export function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <Banner />
      <div className="container">
        <AboutPreview />
        <ServicePreview />
      </div>
    </>
  );
}
