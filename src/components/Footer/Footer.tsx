import styles from './Footer.module.css';
import logo from '../../assets/AmperiumLogoWhite.svg';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Camera, Copyright } from 'lucide-react';
import { serviceDetailPath } from '../../routes/services';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Amperium" className={styles.logoImage} />
        </Link>
        <div className={styles.linkContainer}>
          <nav className={styles.section} aria-label={t('footer.services')}>
            <h2 className={`text-label-sm ${styles.heading}`}>
              {t('footer.services')}
            </h2>
            <ul className={`text-body-sm ${styles.linkList}`}>
              <li>
                <Link to={serviceDetailPath('service')}>Service</Link>
              </li>
              <li>
                <Link to={serviceDetailPath('electrical')}>
                  {t('footer.electricalInstallation')}
                </Link>
              </li>
              <li>
                <Link to={serviceDetailPath('project')}>
                  {t('footer.projectManagement')}
                </Link>
              </li>
            </ul>
          </nav>
          <nav className={styles.section} aria-label={t('footer.theCompany')}>
            <h2 className={`text-label-sm ${styles.heading}`}>
              {t('footer.theCompany')}
            </h2>
            <ul className={`text-body-sm ${styles.linkList}`}>
              <li>
                <Link to="/om-oss">{t('footer.about')}</Link>
              </li>
              <li>
                <Link to="/kontakt">{t('footer.contact')}</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.section} aria-label={t('footer.contact')}>
            <h2 className={`text-label-sm ${styles.heading}`}>
              {t('footer.contact')}
            </h2>
            <ul className={`text-body-sm ${styles.linkList}`}>
              <li>
                <a href="tel:+46854524">08-854 524</a>
              </li>
              <li>
                <a href="mailto:info@amperium.se">info@amperium.se</a>
              </li>
              <li>
                <address>Klostervägen 3, Gustavsberg</address>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.bottomItem}>
          <Copyright aria-hidden="true" size={16} />
          <p className="text-body-sm">
            {currentYear} Amperium - {t('footer.allRightsReserved')}
          </p>
        </div>
        <div className={styles.bottomItem}>
          <Camera aria-hidden="true" size={16} />
          <p className="text-body-sm">amperium_elektriska</p>
        </div>
      </div>
    </footer>
  );
}
