import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { Send, Trash } from 'lucide-react';
import styles from './Form.module.css';

export function Form() {
  const { t } = useTranslation();
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.fullName.value;
    const email = form.epost.value;
    const message = form.message.value;
    let hasError = false;

    if (!name.trim()) {
      setNameError(t('contact.errors.required'));
      hasError = true;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError(t('contact.errors.required'));
      hasError = true;
    } else if (!email.includes('@')) {
      setEmailError(t('contact.errors.invalidEmail'));
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!message.trim()) {
      setMessageError(t('contact.errors.required'));
      hasError = true;
    } else {
      setMessageError('');
    }

    if (hasError) {
      setSubmitted(false);

      if (!name.trim()) {
        form.fullName.focus();
      } else if (!email.trim() || !email.includes('@')) {
        form.epost.focus();
      } else {
        form.message.focus();
      }

      return;
    }

    // TODO: skicka formulärdata när mail-koppling finns på plats
    form.reset();
    setSubmitted(true);
  }

  function handleReset() {
    setNameError('');
    setEmailError('');
    setMessageError('');
    setSubmitted(false);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Input
        label={t('contact.name')}
        id="name"
        name="fullName"
        placeholder={t('contact.name')}
        required
        invalid={!!nameError}
        errorMessage={nameError}
      />
      <Input
        label={t('contact.epost')}
        id="epost"
        name="epost"
        type="email"
        placeholder={t('contact.epost')}
        required
        invalid={!!emailError}
        errorMessage={emailError}
      />
      <Textarea
        label={t('contact.message')}
        id="message"
        name="message"
        placeholder={t('contact.message')}
        required
        invalid={!!messageError}
        errorMessage={messageError}
      />
      {submitted && (
        <p role="status" className={`text-body-sm ${styles.success}`}>
          {t('contact.success')}
        </p>
      )}
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
