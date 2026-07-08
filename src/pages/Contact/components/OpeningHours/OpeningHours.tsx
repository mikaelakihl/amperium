import { TitledCard } from '../../../../components/ui/TitledCard/TitledCard';
import { Pill } from '../../../../components/ui/Pill/Pill';
import { openingHours, getTodayIndex } from './hours';
import styles from './OpeningHours.module.css';
import { useTranslation } from 'react-i18next';

export function OpeningHours() {
  const { t } = useTranslation();
  const todayIndex = getTodayIndex();

  return (
    <TitledCard label={t('contact.hours.label')}>
      <dl className={styles.list}>
        {openingHours.map((item, index) => {
          const isToday = index === todayIndex;

          return (
            <div
              key={item.dayKey}
              className={styles.row}
              aria-current={isToday ? 'date' : undefined}
            >
              <dt
                className={`text-body-sm ${styles.day} ${isToday ? styles.today : ''}`}
              >
                {t(`contact.hours.${item.dayKey}`)}
                {isToday && (
                  <Pill variant="secondary">{t('contact.hours.today')}</Pill>
                )}
              </dt>
              <dd
                className={`text-body-sm ${styles.hours} ${isToday ? styles.today : ''}`}
              >
                {item.closed ? t('contact.hours.closed') : item.hours}
              </dd>
            </div>
          );
        })}
      </dl>
    </TitledCard>
  );
}
