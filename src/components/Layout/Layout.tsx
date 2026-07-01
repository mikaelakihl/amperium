import { Navbar } from '../Navbar/Navbar';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';
import { NavbarDesktop } from '../NavbarDesktop/NavbarDesktop';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { PhoneOutgoing } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Layout() {
  const { t } = useTranslation();
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
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
