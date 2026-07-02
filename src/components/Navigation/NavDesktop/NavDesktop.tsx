import { NavLink } from 'react-router';
import styles from './NavDesktop.module.css';
import { useTranslation } from 'react-i18next';

export function NavDesktop() {
  const { t } = useTranslation();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.link} text-navigation-sm ${isActive ? styles.active : ''}`
            }
            to="/"
          >
            {t('nav.home')}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.link} text-navigation-sm ${isActive ? styles.active : ''}`
            }
            to="/about"
          >
            {t('nav.about')}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.link} text-navigation-sm ${isActive ? styles.active : ''}`
            }
            to="/services"
          >
            {t('nav.services')}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.link} text-navigation-sm ${isActive ? styles.active : ''}`
            }
            to="/contact"
          >
            {t('nav.contact')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
