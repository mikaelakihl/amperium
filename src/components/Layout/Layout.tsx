import { Navbar } from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <Navbar />
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
