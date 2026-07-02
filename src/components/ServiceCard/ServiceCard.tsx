import { ArrowRight, Wrench } from 'lucide-react';
import { IconIndicator } from '../IconIndicator/IconIndicator';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.topContainer}>
        <IconIndicator icon={<Wrench />} />
        <div className={styles.contentContainer}>
          <h3 className="text-title-sm">{title}</h3>
          <p className="text-body-sm">{description}</p>
        </div>
      </div>
      <IconIndicator transparent icon={<ArrowRight />} />
    </div>
  );
}
