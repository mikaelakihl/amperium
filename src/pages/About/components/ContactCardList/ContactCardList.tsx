import { ContactCard } from '../ContactCard/ContactCard';
import { contacts } from './contacts';
import styles from './ContactCardList.module.css';

export function ContactCardList() {
  return (
    <div className={styles.contactList}>
      {contacts.map((contact) => (
        <ContactCard key={contact.name} {...contact} />
      ))}
    </div>
  );
}
