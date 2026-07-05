import { useTranslation } from 'react-i18next';
import { Hero } from '../../components/Hero/Hero';
import { Banner } from '../../components/Banner/Banner';
import { AboutPreview } from '../../components/AboutPreview/AboutPreview';
import { ServicePreview } from '../../components/ServicePreview/ServicePreview';
import { BenefitBanner } from '../../components/BenefitBanner/BenefitBanner';
import styles from './index.module.css';

export function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <Banner />
      <div className="gradient">
        <div className="container">
          <AboutPreview />
          <ServicePreview />
          <div className={styles.benefitContainerDesktop}>
            <BenefitBanner />
          </div>
        </div>
      </div>

      <div className={styles.benefitContainerMobile}>
        <BenefitBanner />
      </div>
    </>
  );
}
