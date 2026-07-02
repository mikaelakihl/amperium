import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { IconIndicator } from '../IconIndicator/IconIndicator';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  linkTo,
}: ServiceCardProps) {
  return (
    <Link to={linkTo} className={styles.serviceCard}>
      <div className={styles.topContainer}>
        <IconIndicator icon={icon} />
        <div className={styles.contentContainer}>
          <h3 className="text-title-sm">{title}</h3>
          <p className="text-body-sm">{description}</p>
        </div>
      </div>
      <IconIndicator transparent icon={<ArrowRight />} />
    </Link>
  );
}
