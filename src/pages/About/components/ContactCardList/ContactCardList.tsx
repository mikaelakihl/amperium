import { ContactCard } from '../ContactCard/ContactCard';
import simon from '../../../../assets/contacts/simon.png';
import jimmy from '../../../../assets/contacts/jimmy.png';
import wille from '../../../../assets/contacts/wille.jpg';
import styles from './ContactCardList.module.css';

export function ContactCardList() {
  return (
    <div className={styles.contactList}>
      <ContactCard
        name="Simon Kihl"
        phone="+46 737 847 135"
        email="simon.kihl@amperium.se "
        image={simon}
      />
      <ContactCard
        name="Jimmy Rittervall"
        phone=" 08 -854 524 "
        email="jimmy.rittervall@amperium.se "
        image={jimmy}
      />
      <ContactCard
        name="William Darlöf"
        phone=" +46 762 101 291"
        email="william.darlof@amperium.se  "
        image={wille}
      />
      <ContactCard
        name="Oscar Sjögren"
        phone=" +46 763 374 131"
        email="oscar.sjogren@amperium.se   "
      />
    </div>
  );
}
