import { NavLink } from 'react-router';
import styles from './NavDesktop.module.css';
import { useTranslation } from 'react-i18next';
import { servicesPath } from '../../../routes/services';

export function NavDesktop() {
  const { t } = useTranslation();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList} role="list">
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
            to="/om-oss"
          >
            {t('nav.about')}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.link} text-navigation-sm ${isActive ? styles.active : ''}`
            }
            to={servicesPath}
          >
            {t('nav.services')}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.link} text-navigation-sm ${isActive ? styles.active : ''}`
            }
            to="/kontakt"
          >
            {t('nav.contact')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
