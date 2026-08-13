import type { IconName } from '../types/hemolink';

const paths: Record<IconName, string> = {
  ambulance: 'M3 7h11v10H3zM14 11h4l3 3v3h-7M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 10h4M8 8v4',
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  calendar: 'M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z',
  'check-circle': 'M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  'chevron-down': 'm6 9 6 6 6-6',
  'clipboard-check': 'M9 5h6M9 3h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a1 1 0 0 1 1-1Zm-2 9 2 2 4-4',
  clock: 'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  coffee: 'M4 8h14v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm14 2h1a3 3 0 1 1 0 6h-1M7 21h10',
  heart: 'M20.8 8.6c0 5.4-8.8 10.2-8.8 10.2S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z',
  hospital: 'M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 7v6M7 10h4M14 9h2M14 13h2M9 21v-4h6v4',
  lock: 'M6 10h12v10H6zM8 10V7a4 4 0 0 1 8 0v3',
  'map-pin': 'M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  microscope: 'M9 3h4v8H9zM11 11v4M6 21h12M4 17h10a4 4 0 0 1 4 4M14 7h3l2 3M8 17a5 5 0 0 1 5-5h2',
  moon: 'M20 15.5A8 8 0 0 1 8.5 4 8 8 0 1 0 20 15.5Z',
  phone: 'M6 3h3l2 5-2 1a12 12 0 0 0 4 4l1-2 5 2v3a2 2 0 0 1-2 2C10.4 18 6 13.6 6 8a2 2 0 0 1 0-5Z',
  'shield-check': 'M12 3 20 6v5c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10V6l8-3Zm-4 9 2.5 2.5L16 9',
  stethoscope: 'M6 3v5a4 4 0 0 0 8 0V3M4 3h4M12 3h4M14 17a4 4 0 1 0 4-4v-2M18 13h2a2 2 0 0 1 2 2v1',
  syringe: 'm14 4 6 6M13 5l6 6M4 20l4-4m-2-2 8-8 4 4-8 8H6v-4ZM16 2l6 6',
  user: 'M20 21a8 8 0 0 0-16 0M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-7a4 4 0 0 1 0 7.7M22 21v-2a4 4 0 0 0-3-3.9',
  weight: 'M5 20h14l-2-13H7L5 20Zm4-13a3 3 0 0 1 6 0M12 11v4M10 13h4',
  x: 'M6 6l12 12M18 6 6 18',
  zap: 'm13 2-9 12h7l-1 8 9-12h-7l1-8Z',
};

export function Icon({ name, size = 20, strokeWidth = 1.8 }: { name: IconName; size?: number; strokeWidth?: number }) {
  return (
    <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}
