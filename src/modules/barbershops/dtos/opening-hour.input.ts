export type OpeningHourInput = {
  dayOfWeek: number; // 0 = Domingo ... 6 = Sábado
  openTime: string; // "09:00"
  closeTime: string; // "18:00"
  lunchStart?: string | null;
  lunchEnd?: string | null;
};
