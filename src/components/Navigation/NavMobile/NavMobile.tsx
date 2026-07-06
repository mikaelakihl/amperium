import { useState } from 'react';
import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Hamburger } from '../../Hamburger/Hamburger';
import styles from './NavMobile.module.css';
import { servicesPath } from '../../../routes/services';

export function NavMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <div>
        <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {menuOpen && (
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} text-navigation-sm ${isActive ? styles.active : ''} `
                }
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} text-navigation-sm ${isActive ? styles.active : ''} `
                }
                to="/om-oss"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.about')}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} text-navigation-sm ${isActive ? styles.active : ''} `
                }
                to={servicesPath}
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.services')}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} text-navigation-sm ${isActive ? styles.active : ''} `
                }
                to="/kontakt"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
