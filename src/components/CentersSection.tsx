import { centers } from '../data/centers';
import { CenterCard } from './CenterCard';
import { Icon } from './Icon';

export function CentersSection() {
  return <><div className="centers-grid">{centers.slice(0, 3).map((center) => <CenterCard center={center} key={center.name} />)}</div><div className="center-action"><a className="button" href="/centres"><Icon name="hospital" size={18} /> Voir tous les centres</a></div></>;
}
