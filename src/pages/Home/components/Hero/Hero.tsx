import { Trans, useTranslation } from 'react-i18next';
import { Badge } from '../../../../components/ui/Badge/Badge';
import styles from './Hero.module.css';
import { ButtonLink } from '../../../../components/ui/ButtonLink/ButtonLink';
import { servicesPath } from '../../../../routes/services';

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
              {t('home.hero.buttons.contactUs')}
            </ButtonLink>
            <ButtonLink
              to={servicesPath}
              size="xs"
              variant="secondary"
              fullWidth
            >
              {t('home.hero.buttons.ourServices')}
            </ButtonLink>
          </div>
        </div>

        <div className={styles.badgeContainer}>
          <Badge>
            <a
              href="https://www.uc.se/risksigill2/?showorg=559429-8407&language=swe&special="
              title="Sigillet är utfärdat av UC AB. Klicka på bilden för information om UC:s Riskklasser."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.ucLogoCrop}>
                <img
                  className={styles.ucLogoImg}
                  src="https://www.uc.se/ucsigill2/sigill?org=559429-8407&language=swe&product=lsa&special=&fontcolor=w&type=png"
                  alt=""
                  style={{ border: 0 }}
                />
              </span>
            </a>
          </Badge>
          <Badge>
            <a
              href="https://www.dnb.com/sv-se/om-oss/kreditvarderingsmodell-foretag/"
              target="_blank"
            >
              <img
                className={styles.dnbLogo}
                src="https://ratinglogo.bisnode.com/2837623899972697505228558.svg"
                alt=""
              />
            </a>
          </Badge>
        </div>
      </div>

      <div className={styles.buttons}>
        <ButtonLink to="/kontakt" size="sm" fullWidth>
          {t('home.hero.buttons.contactUs')}
        </ButtonLink>
        <ButtonLink to={servicesPath} size="sm" variant="secondary" fullWidth>
          {t('home.hero.buttons.ourServices')}
        </ButtonLink>
      </div>
    </section>
  );
}
