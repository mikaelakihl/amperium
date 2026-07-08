import { NavMobile } from './NavMobile/NavMobile';
import { NavDesktop } from './NavDesktop/NavDesktop';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { ButtonLink } from '../ui/ButtonLink/ButtonLink';
import { PhoneOutgoing } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.css';

export function Navigation() {
  const { t } = useTranslation();

  return (
    <div className={styles.navContainer}>
      <div className={styles.desktopNav}>
        <NavDesktop />
      </div>
      <LanguageSwitcher />
      <div className={styles.actionButton}>
        <ButtonLink
          size="xs"
          href="tel:+46 8 854 524"
          iconLeft={<PhoneOutgoing size={16} aria-hidden="true" />}
        >
          {t('nav.callUs')}
        </ButtonLink>
      </div>
      <div className={styles.mobileNav}>
        <NavMobile />
      </div>
    </div>
  );
}
