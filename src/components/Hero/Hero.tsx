import { Trans, useTranslation } from 'react-i18next';
import { Badge } from '../Badge/Badge';
import styles from './Hero.module.css';
import { Button } from '../Button/Button';

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.heroText}>
          <p className={`${styles.label} text-label-sm`}>
            {t('hero.electricalInstallation&service')}
          </p>
          <p className={`text-heading-md ${styles.slogan}`}>
            <Trans
              i18nKey="hero.slogan"
              components={{
                highlight: <span className={styles.highlight} />,
                br: <br />,
              }}
            />
          </p>
          <div className={styles.buttonsDesktop}>
            <Button size="xs" fullWidth>
              {t('hero.contactUs')}
            </Button>
            <Button size="xs" variant="secondary" fullWidth>
              {t('hero.ourServices')}
            </Button>
          </div>
        </div>

        <div className={styles.badgeContainer}>
          <Badge />
          <Badge />
        </div>
      </div>

      <div className={styles.buttons}>
        <Button fullWidth>{t('hero.contactUs')}</Button>
        <Button variant="secondary" fullWidth>
          {t('hero.ourServices')}
        </Button>
      </div>
    </section>
  );
}
