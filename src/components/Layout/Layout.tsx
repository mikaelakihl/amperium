import { Navbar } from '../Navbar/Navbar';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';
import { NavbarDesktop } from '../NavbarDesktop/NavbarDesktop';

export function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.navContainer}>
          <div className={styles.desktopNav}>
            <NavbarDesktop />
          </div>
          <LanguageSwitcher />
          <button className={styles.actionButton}>Button</button>
          <div className={styles.mobileNav}>
            <Navbar />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Temporary footer</p>
      </footer>
    </div>
  );
}
