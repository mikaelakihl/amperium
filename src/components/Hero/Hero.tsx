import { Trans, useTranslation } from 'react-i18next';
import { Badge } from '../Badge/Badge';
import styles from './Hero.module.css';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { servicesPath } from '../../routes/services';

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.heroText}>
          <p className={`${styles.label} text-label-sm`}>
            {t('home.hero.electricalInstallationAndService')}
          </p>
          <h1 className={`text-heading-md ${styles.slogan}`}>
            <Trans
              i18nKey="home.hero.slogan"
              components={{
                highlight: <span className={styles.highlight} />,
                br: <br />,
              }}
            />
          </h1>
          <div className={styles.buttonsDesktop}>
            <ButtonLink to="/kontakt" size="xs" fullWidth>
              {t('home.hero.contactUs')}
            </ButtonLink>
            <ButtonLink
              to={servicesPath}
              size="xs"
              variant="secondary"
              fullWidth
            >
              {t('home.hero.ourServices')}
            </ButtonLink>
          </div>
        </div>

        <div className={styles.badgeContainer}>
          <Badge />
          <Badge />
        </div>
      </div>

      <div className={styles.buttons}>
        <ButtonLink to="/kontakt" size="xs" fullWidth>
          {t('home.hero.contactUs')}
        </ButtonLink>
        <ButtonLink to={servicesPath} size="xs" variant="secondary" fullWidth>
          {t('home.hero.ourServices')}
        </ButtonLink>
      </div>
    </section>
  );
}
