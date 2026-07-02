import { Navigation } from '../Navigation/Navigation';
import { Link, Outlet } from 'react-router';
import styles from './Layout.module.css';
import logo from '../../assets/WhiteAmperium24x1024.png';
import { useTranslation } from 'react-i18next';

export function Layout() {
  const { t } = useTranslation();
  return (
    <div>
      <a href="#main-content" className={styles.skipLink}>
        {t('nav.skipToContent')}
      </a>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Amperium" className={styles.logoImage} />
        </Link>
        <Navigation />
      </header>
      <main id="main-content">
        <Outlet />
      </main>
      <footer>
        <p>Temporary footer</p>
      </footer>
    </div>
  );
}
