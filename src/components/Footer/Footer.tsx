import styles from './Footer.module.css';
import logo from '../../assets/WhiteAmperium24x1024.png';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Amperium" className={styles.logoImage} />
      </Link>
      <div className={styles.linkContainer}>
        <nav className={styles.section} aria-label={t('footer.services')}>
          <h2 className="text-label-sm">{t('footer.services')}</h2>
          <ul className={`text-body-sm ${styles.linkList}`}>
            <li>
              <Link to="/tjanster/c">Service</Link>
            </li>
            <li>
              <Link to="/tjanster/a">{t('footer.electricalInstallation')}</Link>
            </li>
            <li>
              <Link to="/tjanster/b">{t('footer.projectManagement')}</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.section} aria-label={t('footer.theCompany')}>
          <h2 className="text-label-sm">{t('footer.theCompany')}</h2>
          <ul className={`text-body-sm ${styles.linkList}`}>
            <li>
              <Link to="/about">{t('footer.about')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('footer.contact')}</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.section} aria-label={t('footer.contact')}>
          <h2 className="text-label-sm">{t('footer.contact')}</h2>
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
    </footer>
  );
}
