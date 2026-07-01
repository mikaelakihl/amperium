import { Link } from 'react-router';
import styles from './NavbarDesktop.module.css';
import { useTranslation } from 'react-i18next';

export function NavbarDesktop() {
  const { t } = useTranslation();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        <Link className={`${styles.link} text-navigation-md`} to="/">
          {t('nav.home')}
        </Link>
        <Link className={`${styles.link} text-navigation-md`} to="/about">
          {t('nav.about')}
        </Link>
        <Link className={`${styles.link} text-navigation-md`} to="/services">
          {t('nav.services')}
        </Link>
        <Link className={`${styles.link} text-navigation-md`} to="/contact">
          {t('nav.contact')}
        </Link>
      </ul>
    </nav>
  );
}
