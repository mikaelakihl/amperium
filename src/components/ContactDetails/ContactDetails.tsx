import { Camera, Mail, Phone } from 'lucide-react';
import { TitledCard } from '../TitledCard/TitledCard';
import styles from './ContactDetails.module.css';
import { useTranslation } from 'react-i18next';

export function ContactDetails() {
  const { t } = useTranslation();
  return (
    <TitledCard label={t('contact.contactDetails')}>
      <div className={styles.contactInfo}>
        <div className={`text-body-sm ${styles.contactInfoItem}`}>
          <Phone aria-hidden="true" size={16} />
          <a href="tel:08-854-224">08-854-224</a>
        </div>
        <div className={`text-body-sm ${styles.contactInfoItem}`}>
          <Mail aria-hidden="true" size={16} />
          <a href="mailto:info@amperium.se">info@amperium.se</a>
        </div>
        <div className={`text-body-sm ${styles.contactInfoItem}`}>
          <Camera aria-hidden="true" size={16} />
          <a href="https://www.instagram.com/amperium_elektriska/">
            amperium_elektriska
          </a>
        </div>
      </div>
    </TitledCard>
  );
}
