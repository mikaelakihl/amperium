export interface DayHours {
  dayKey: string;
  hours: string;
  closed?: boolean;
}

export const openingHours: DayHours[] = [
  { dayKey: 'monday', hours: '07:00 – 17:00' },
  { dayKey: 'tuesday', hours: '07:00 – 17:00' },
  { dayKey: 'wednesday', hours: '07:00 – 17:00' },
  { dayKey: 'thursday', hours: '07:00 – 17:00' },
  { dayKey: 'friday', hours: '07:00 – 17:00' },
  { dayKey: 'saturday', hours: '', closed: true },
  { dayKey: 'sunday', hours: '', closed: true },
];

// Date.getDay() ger 0 för söndag, 1 för måndag osv.
// Vi vill ha måndag som index 0, så vi skiftar ett steg.
export function getTodayIndex() {
  return (new Date().getDay() + 6) % 7;
}
