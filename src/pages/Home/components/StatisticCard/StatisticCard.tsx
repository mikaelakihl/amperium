import styles from './StatisticCard.module.css';
interface StatisticCardProps {
  title: string;
  description: string;
}

export function StatisticCard({ title, description }: StatisticCardProps) {
  return (
    <div className={styles.statisticCard}>
      <p className={`text-heading-md ${styles.title}`}>{title}</p>
      <p className={`text-body-sm ${styles.description}`}>{description}</p>
    </div>
  );
}
