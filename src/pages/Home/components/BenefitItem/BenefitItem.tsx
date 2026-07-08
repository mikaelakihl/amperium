import { IconIndicator } from '../../../../components/ui/IconIndicator/IconIndicator';
import styles from './BenefitItem.module.css';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className={styles.benefitItem}>
      <IconIndicator transparent icon={icon} />
      <div className={styles.contentContainer}>
        <p className="text-title-sm">{title}</p>
        <p className={`${styles.description} text-body-sm`}>{description}</p>
      </div>
    </div>
  );
}
