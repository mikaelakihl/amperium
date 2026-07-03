import { Trans, useTranslation } from 'react-i18next';
import { Badge } from '../Badge/Badge';
import styles from './Hero.module.css';
import { Button } from '../Button/Button';
import { ButtonLink } from '../ButtonLink/ButtonLink';

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.heroText}>
          <p className={`${styles.label} text-label-sm`}>
            {t('hero.electricalInstallation&service')}
          </p>
          <h1 className={`text-heading-md ${styles.slogan}`}>
            <Trans
              i18nKey="hero.slogan"
              components={{
                highlight: <span className={styles.highlight} />,
                br: <br />,
              }}
            />
          </h1>
          <div className={styles.buttonsDesktop}>
            <ButtonLink to="/contact" size="xs" fullWidth>
              {t('hero.contactUs')}
            </ButtonLink>
            <ButtonLink to="/services" size="xs" variant="secondary" fullWidth>
              {t('hero.ourServices')}
            </ButtonLink>
          </div>
        </div>

        <div className={styles.badgeContainer}>
          <Badge />
          <Badge />
        </div>
      </div>

      <div className={styles.buttons}>
        <ButtonLink to="/contact" size="xs" fullWidth>
          {t('hero.contactUs')}
        </ButtonLink>
        <ButtonLink to="/services" size="xs" variant="secondary" fullWidth>
          {t('hero.ourServices')}
        </ButtonLink>
      </div>
    </section>
  );
}
