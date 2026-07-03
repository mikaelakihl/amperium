import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import placeholder from '../../assets/contacts/placeholder.jpg';
import styles from './ContactCard.module.css';

interface ContactCardProps {
  name: string;
  image?: string;
  phone: string;
  email: string;
}

export function ContactCard({ name, image, phone, email }: ContactCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className={styles.contactCard}>
      <h3 className="text-heading-md">{name}</h3>
      <div className={styles.imgContainer}>
        <img
          src={!image || imageFailed ? placeholder : image}
          alt={name}
          className={styles.contactImage}
          onError={() => setImageFailed(true)}
        />
      </div>

      <div className={styles.contactInfo}>
        <div className={`text-body-sm ${styles.contactInfoItem}`}>
          <Phone size={16} />
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div className={`text-body-sm ${styles.contactInfoItem}`}>
          <Mail size={16} />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </div>
  );
}
