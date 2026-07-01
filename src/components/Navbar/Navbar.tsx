import { useState } from 'react';
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
              <a className={`${styles.link} text-navigation-sm`} href="/">
                Hem
              </a>
            </li>
            <li>
              <a className={`${styles.link} text-navigation-sm`} href="/om-oss">
                Om oss
              </a>
            </li>
            <li>
              <a className={`${styles.link} text-navigation-sm`} href="/tjanster">
                Tjänster
              </a>
            </li>
            <li>
              <a className={`${styles.link} text-navigation-sm`} href="/kontakt">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
