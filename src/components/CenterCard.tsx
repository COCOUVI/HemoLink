import type { Center } from '../types/hemolink';
import { Icon } from './Icon';

export function CenterCard({ center }: { center: Center }) {
  return <article className="center-card"><div className="center-card__heading"><div className="center-card__icon"><Icon name="hospital" size={24} /></div><div><h3>{center.name}</h3><span className="center-access">{center.access}</span></div></div><p className="center-address"><Icon name="map-pin" size={16} /> {center.address}</p><div className="center-meta"><span><Icon name="phone" size={15} /> {center.phone}</span><span><Icon name="clock" size={15} /> {center.hours}</span></div></article>;
}

