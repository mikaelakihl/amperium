import { useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Hamburger } from '../Hamburger/Hamburger';
import styles from './Navbar.module.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <div>
        <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {menuOpen && (
        <div className={styles.menu} role="dialog" aria-modal="true">
          <ul className={styles.menuList}>
            <li>
              <Link
                className={`${styles.link} text-navigation-sm`}
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.link} text-navigation-sm`}
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.link} text-navigation-sm`}
                to="/services"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.link} text-navigation-sm`}
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
