import { useTranslation } from 'react-i18next';
import { SectionIntro } from '../../../../components/ui/SectionIntro/SectionIntro';
import { StatisticCard } from '../StatisticCard/StatisticCard';
import styles from './AboutPreview.module.css';

export function AboutPreview() {
  const { t } = useTranslation();
  return (
    <section className={styles.aboutPreview}>
      <div>
        <SectionIntro
          label={t('home.aboutPreview.label')}
          heading={t('home.aboutPreview.heading')}
          description={t('home.aboutPreview.description')}
        />
      </div>
      <div className={styles.cards}>
        <StatisticCard title="40+" description={t('home.statistic.years')} />
        <StatisticCard
          title="500+"
          description={t('home.statistic.projects')}
        />
        <StatisticCard
          title="100%"
          description={t('home.statistic.certified')}
        />
      </div>
    </section>
  );
}
