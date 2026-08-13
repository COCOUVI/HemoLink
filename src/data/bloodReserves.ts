import type { BloodReserve } from '../types/hemolink';

export const bloodReserves: BloodReserve[] = [
  { type: 'O−', status: 'URGENT', progress: 20 },
  { type: 'O+', status: 'BON', progress: 90 },
  { type: 'A−', status: 'NORMAL', progress: 60 },
  { type: 'A+', status: 'BON', progress: 85 },
  { type: 'B−', status: 'URGENT', progress: 25 },
  { type: 'B+', status: 'NORMAL', progress: 55 },
  { type: 'AB−', status: 'URGENT', progress: 15 },
  { type: 'AB+', status: 'NORMAL', progress: 65 },
];

