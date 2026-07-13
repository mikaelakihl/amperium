import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../../../components/ui/Input/Input';
import { Textarea } from '../../../../components/ui/Textarea/Textarea';
import { Button } from '../../../../components/ui/Button/Button';
import { Send, Trash } from 'lucide-react';
import { FORM_ENDPOINT } from '../../../../constants/contact';
import styles from './Form.module.css';

export function Form() {
  const { t } = useTranslation();
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
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

    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setSubmitError(t('contact.form.errors.submitFailed'));
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setNameError('');
    setEmailError('');
    setMessageError('');
    setSubmitted(false);
    setSubmitError('');
  }

  return (
    <form
      className={styles.form}
      noValidate
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <input
        type="hidden"
        name="_subject"
        value="Jag vill ha hjälp! - Ny offertförfrågan"
      />
      <Input
        label={t('contact.form.name')}
        id="name"
        name="name"
        placeholder={t('contact.form.name')}
        required
        invalid={!!nameError}
        errorMessage={nameError}
      />
      <Input
        label={t('contact.form.epost')}
        id="epost"
        name="email"
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
      {submitError && (
        <p role="alert" className={`text-body-sm ${styles.error}`}>
          {submitError}
        </p>
      )}
      <div className={styles.buttons}>
        <Button
          fullWidth
          type="submit"
          loading={isSubmitting}
          iconLeft={<Send aria-hidden="true" />}
        >
          {t('contact.form.requestQuote')}
        </Button>
        <Button
          fullWidth
          type="reset"
          iconLeft={<Trash aria-hidden="true" />}
          variant="secondary"
        >
          {t('contact.form.clearForm')}
        </Button>
      </div>
    </form>
  );
}
