import { Navigation } from '../Navigation/Navigation';
import { Link, Outlet } from 'react-router';
import styles from './Layout.module.css';
import logo from '../../assets/WhiteAmperium24x1024.png';

export function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Amperium" className={styles.logoImage} />
        </Link>
        <Navigation />
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
