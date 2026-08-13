import { Icon } from './Icon';
import type { IconName } from '../types/hemolink';
import type { ReactNode } from 'react';

export function FeatureCard({ icon, title, children, compact = false }: { icon: IconName; title: string; children: ReactNode; compact?: boolean }) {
  return <article className={`feature-card ${compact ? 'feature-card--compact' : ''}`}><div className="feature-card__icon"><Icon name={icon} size={compact ? 25 : 27} /></div><h3>{title}</h3><p>{children}</p></article>;
}
