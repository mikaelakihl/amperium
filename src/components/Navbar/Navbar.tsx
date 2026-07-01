import { useState } from 'react';
import { Link } from 'react-router';
import { Hamburger } from '../Hamburger/Hamburger';
import styles from './Navbar.module.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div>
        <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {menuOpen && (
        <div className={styles.menu} role="dialog" aria-modal="true">
          <ul className={styles.menuList}>
            <li>
              <Link className={`${styles.link} text-navigation-sm`} to="/">
                Hem
              </Link>
            </li>
            <li>
              <Link className={`${styles.link} text-navigation-sm`} to="/om-oss">
                Om oss
              </Link>
            </li>
            <li>
              <Link className={`${styles.link} text-navigation-sm`} to="/tjanster">
                Tjänster
              </Link>
            </li>
            <li>
              <Link className={`${styles.link} text-navigation-sm`} to="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
