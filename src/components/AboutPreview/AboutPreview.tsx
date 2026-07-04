import { useTranslation } from 'react-i18next';
import { SectionIntro } from '../SectionIntro/SectionIntro';
import { StatisticCard } from '../StatisticCard/StatisticCard';
import styles from './AboutPreview.module.css';

export function AboutPreview() {
  const { t } = useTranslation();
  return (
    <section className={styles.aboutPreview}>
      <div>
        <SectionIntro
          label={t('home.aboutPreviewLabel')}
          heading={t('home.aboutPreviewHeading')}
          description={t('home.aboutPreviewDescription')}
        />
      </div>
      <div className={styles.cards}>
        <StatisticCard title="40+" description={t('home.statisticYears')} />
        <StatisticCard title="500+" description={t('home.statisticProjects')} />
        <StatisticCard
          title="100%"
          description={t('home.statisticCertified')}
        />
      </div>
    </section>
  );
}
