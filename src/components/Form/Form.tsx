import { useTranslation } from 'react-i18next';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { Send, Trash } from 'lucide-react';
import styles from './Form.module.css';

export function Form() {
  const { t } = useTranslation();

  return (
    <form className={styles.form}>
      <Input
        label={t('contact.name')}
        id="name"
        placeholder={t('contact.name')}
        required
      />
      <Input
        label={t('contact.epost')}
        id="epost"
        placeholder={t('contact.epost')}
        required
      />
      <Textarea
        label={t('contact.message')}
        id="message"
        placeholder={t('contact.message')}
        required
      />
      <div className={styles.buttons}>
        <Button fullWidth type="submit" iconLeft={<Send />}>
          {t('contact.requestQuote')}
        </Button>
        <Button
          fullWidth
          type="reset"
          iconLeft={<Trash color="var(--color-action-primary)" />}
          variant="secondary"
        >
          {t('contact.clearForm')}
        </Button>
      </div>
    </form>
  );
}
