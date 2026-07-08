import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import placeholder from '../../assets/contacts/placeholder.jpg';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import styles from './ContactCard.module.css';
import { useTranslation } from 'react-i18next';

interface ContactCardProps {
  name: string;
  image?: string;
  phone: string;
  email: string;
}

export function ContactCard({ name, image, phone, email }: ContactCardProps) {
  const { t } = useTranslation();
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className={styles.contactCard}>
      <h2 className={`text-heading-sm ${styles.contactName}`}>{name}</h2>
      <div className={styles.imgContainer}>
        <img
          src={!image || imageFailed ? placeholder : image}
          alt={!image || imageFailed ? t('contact.imageUnavailable') : name}
          className={styles.contactImage}
          onError={() => setImageFailed(true)}
        />
      </div>

      <div className={styles.contactInfo}>
        <ButtonLink
          href={`tel:${phone}`}
          variant="link"
          className="text-body-sm"
          iconLeft={<Phone aria-hidden="true" size={16} />}
        >
          {phone}
        </ButtonLink>
        <ButtonLink
          href={`mailto:${email}`}
          variant="link"
          className="text-body-sm"
          iconLeft={<Mail aria-hidden="true" size={16} />}
        >
          {email}
        </ButtonLink>
      </div>
    </div>
  );
}
