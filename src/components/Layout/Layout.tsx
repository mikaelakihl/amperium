import { Navbar } from '../Navbar/Navbar';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.navContainer}>
          <LanguageSwitcher />
          <Navbar />
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
