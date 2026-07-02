import { Link, NavLink } from 'react-router';
import styles from './NavbarDesktop.module.css';
import { useTranslation } from 'react-i18next';

export function NavbarDesktop() {
  const { t } = useTranslation();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} text-navigation-sm ${isActive ? styles.active : ''}`
          }
          to="/"
        >
          {t('nav.home')}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} text-navigation-sm ${isActive ? styles.active : ''}`
          }
          to="/about"
        >
          {t('nav.about')}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} text-navigation-sm ${isActive ? styles.active : ''}`
          }
          to="/services"
        >
          {t('nav.services')}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} text-navigation-sm ${isActive ? styles.active : ''}`
          }
          to="/contact"
        >
          {t('nav.contact')}
        </NavLink>
      </ul>
    </nav>
  );
}
