import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { IconIndicator } from '../ui/IconIndicator/IconIndicator';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  headingLevel?: 'h2' | 'h3';
}

export function ServiceCard({
  title,
  description,
  icon,
  linkTo,
  headingLevel = 'h3',
}: ServiceCardProps) {
  const Heading = headingLevel;
  return (
    <Link to={linkTo} className={styles.serviceCard}>
      <div className={styles.topContainer}>
        <IconIndicator icon={icon} />
        <div className={styles.contentContainer}>
          <Heading className="text-title-sm">{title}</Heading>
          <p className="text-body-sm">{description}</p>
        </div>
      </div>
      <IconIndicator transparent icon={<ArrowRight />} />
    </Link>
  );
}
