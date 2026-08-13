import { bloodReserves } from '../data/bloodReserves';
import { Icon } from './Icon';

export function BloodReserves() {
  return <div className="reserve-wrap"><div className="demo-note"><Icon name="shield-check" size={17} /> Indicateurs de démonstration — les niveaux réels sont confirmés par chaque centre.</div><div className="reserve-grid">{bloodReserves.map((reserve) => <article className={`reserve-card reserve-card--${reserve.status.toLowerCase()}`} key={reserve.type}><div className="reserve-card__top"><strong>{reserve.type}</strong><span className="reserve-status"><i /> {reserve.status}</span></div><div className="progress"><span style={{ width: `${reserve.progress}%` }} /></div><small>Besoin de donneurs</small></article>)}</div></div>;
}

