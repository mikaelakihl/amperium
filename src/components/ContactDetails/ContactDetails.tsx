import { Camera, Mail, Phone } from 'lucide-react';
import { TitledCard } from '../TitledCard/TitledCard';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import styles from './ContactDetails.module.css';
import { useTranslation } from 'react-i18next';

export function ContactDetails() {
  const { t } = useTranslation();
  return (
    <TitledCard label={t('contact.contactDetails')}>
      <div className={styles.contactInfo}>
        <ButtonLink
          href="tel:08-854-224"
          variant="link"
          className="text-body-sm"
          iconLeft={<Phone aria-hidden="true" size={16} />}
        >
          08-854-224
        </ButtonLink>
        <ButtonLink
          href="mailto:info@amperium.se"
          variant="link"
          className="text-body-sm"
          iconLeft={<Mail aria-hidden="true" size={16} />}
        >
          info@amperium.se
        </ButtonLink>
        <ButtonLink
          href="https://www.instagram.com/amperium_elektriska/"
          variant="link"
          className="text-body-sm"
          iconLeft={<Camera aria-hidden="true" size={16} />}
        >
          amperium_elektriska
        </ButtonLink>
      </div>
    </TitledCard>
  );
}
