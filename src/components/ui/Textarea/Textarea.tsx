import styles from './Textarea.module.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  placeholder: string;
  invalid?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
}

export function Textarea({
  id,
  label,
  placeholder,
  disabled,
  invalid,
  errorMessage,
  fullWidth = false,
  required,
  ...props
}: TextareaProps) {
  return (
    <div className={styles.textareaContainer}>
      {label && (
        <label htmlFor={id} className="text-label-sm">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      <textarea
        id={id}
        className={[styles.textarea, fullWidth && styles.fullWidth]
          .filter(Boolean)
          .join(' ')}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={invalid}
        aria-describedby={invalid && errorMessage ? `${id}-error` : undefined}
        {...props}
      />
      {invalid && errorMessage && (
        <p id={`${id}-error`} className={styles.errorMessage} role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
