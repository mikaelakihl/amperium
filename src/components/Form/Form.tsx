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
    const nameInput = form.elements.namedItem('fullName') as HTMLInputElement;
    const emailInput = form.elements.namedItem('epost') as HTMLInputElement;
    const messageInput = form.elements.namedItem(
      'message'
    ) as HTMLTextAreaElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    let hasError = false;

    if (!name.trim()) {
      setNameError(t('contact.form.errors.required'));
      hasError = true;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError(t('contact.form.errors.required'));
      hasError = true;
    } else if (!email.includes('@')) {
      setEmailError(t('contact.form.errors.invalidEmail'));
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!message.trim()) {
      setMessageError(t('contact.form.errors.required'));
      hasError = true;
    } else {
      setMessageError('');
    }

    if (hasError) {
      setSubmitted(false);

      if (!name.trim()) {
        nameInput.focus();
      } else if (!email.trim() || !email.includes('@')) {
        emailInput.focus();
      } else {
        messageInput.focus();
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
      noValidate
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Input
        label={t('contact.form.name')}
        id="name"
        name="fullName"
        placeholder={t('contact.form.name')}
        required
        invalid={!!nameError}
        errorMessage={nameError}
      />
      <Input
        label={t('contact.form.epost')}
        id="epost"
        name="epost"
        type="email"
        placeholder={t('contact.form.epost')}
        required
        invalid={!!emailError}
        errorMessage={emailError}
      />
      <Textarea
        label={t('contact.form.message')}
        id="message"
        name="message"
        placeholder={t('contact.form.message')}
        required
        invalid={!!messageError}
        errorMessage={messageError}
      />
      {submitted && (
        <p role="status" className={`text-body-sm ${styles.success}`}>
          {t('contact.form.success')}
        </p>
      )}
      <div className={styles.buttons}>
        <Button fullWidth type="submit" iconLeft={<Send />}>
          {t('contact.form.requestQuote')}
        </Button>
        <Button
          fullWidth
          type="reset"
          iconLeft={<Trash />}
          variant="secondary"
        >
          {t('contact.form.clearForm')}
        </Button>
      </div>
    </form>
  );
}
