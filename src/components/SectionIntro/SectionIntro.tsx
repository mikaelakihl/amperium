import styles from './SectionIntro.module.css';

interface SectionIntroProps {
  label?: string;
  heading: string;
  description?: string;
}

export function SectionIntro({
  label,
  heading,
  description,
}: SectionIntroProps) {
  return (
    <section className={styles.section}>
      <p className={`text-label-sm ${styles.label}`}>{label}</p>
      <h2 className={`text-heading-md ${styles.heading}`}>{heading}</h2>
      <p className={`text-body-md ${styles.description}`}>{description}</p>
    </section>
  );
}
