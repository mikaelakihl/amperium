import { Navbar } from '../Navbar/Navbar';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Link, Outlet } from 'react-router';
import styles from './Layout.module.css';
import { NavbarDesktop } from '../NavbarDesktop/NavbarDesktop';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { PhoneOutgoing } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/WhiteAmperium24x1024.png';

export function Layout() {
  const { t } = useTranslation();
  return (
    <div>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Amperium" className={styles.logoImage} />
        </Link>
        <div className={styles.navContainer}>
          <div className={styles.desktopNav}>
            <NavbarDesktop />
          </div>
          <LanguageSwitcher />
          <div className={styles.actionButton}>
            <ButtonLink
              href="tel:+46 8 854 524"
              iconLeft={<PhoneOutgoing size={16} />}
            >
              {t('nav.callUs')}
            </ButtonLink>
          </div>
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
