import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const languages = [
  { code: 'sv', label: 'SV' },
  { code: 'en', label: 'EN' },
];

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <select
      aria-label={t('nav.languageSwitcher')}
      className={styles.switcher}
      value={i18n.language}
      onChange={(event) => i18n.changeLanguage(event.target.value)}
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code} lang={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
}
