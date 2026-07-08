import { Camera, Mail, Phone } from 'lucide-react';
import { TitledCard } from '../../../../components/ui/TitledCard/TitledCard';
import { ButtonLink } from '../../../../components/ui/ButtonLink/ButtonLink';
import styles from './ContactDetails.module.css';
import { useTranslation } from 'react-i18next';
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
} from '../../../../constants/contact';

export function ContactDetails() {
  const { t } = useTranslation();
  return (
    <TitledCard label={t('contact.contactDetails')}>
      <div className={styles.contactInfo}>
        <ButtonLink
          href={PHONE_HREF}
          variant="link"
          className="text-body-sm"
          iconLeft={<Phone aria-hidden="true" size={16} />}
        >
          {PHONE_DISPLAY}
        </ButtonLink>
        <ButtonLink
          href={EMAIL_HREF}
          variant="link"
          className="text-body-sm"
          iconLeft={<Mail aria-hidden="true" size={16} />}
        >
          {EMAIL}
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
