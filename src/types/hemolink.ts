export type IconName =
  | 'ambulance'
  | 'arrow-right'
  | 'calendar'
  | 'check-circle'
  | 'chevron-down'
  | 'clipboard-check'
  | 'clock'
  | 'coffee'
  | 'heart'
  | 'hospital'
  | 'lock'
  | 'map-pin'
  | 'microscope'
  | 'moon'
  | 'phone'
  | 'shield-check'
  | 'stethoscope'
  | 'syringe'
  | 'user'
  | 'users'
  | 'weight'
  | 'x'
  | 'zap';

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface Center {
  name: string;
  address: string;
  phone: string;
  hours: string;
  access: string;
}

export interface BloodReserve {
  type: string;
  status: 'URGENT' | 'NORMAL' | 'BON';
  progress: number;
}
