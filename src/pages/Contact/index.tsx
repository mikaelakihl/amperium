import { useTranslation } from 'react-i18next';
import { Form } from '../../components/Form/Form';

export function Contact() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Form />
    </div>
  );
}
