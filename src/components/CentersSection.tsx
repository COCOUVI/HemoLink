import { centers } from '../data/centers';
import { CenterCard } from './CenterCard';

export function CentersSection() {
  return <><div className="centers-grid">{centers.slice(0, 3).map((center) => <CenterCard center={center} key={center.name} />)}</div><div className="center-action"><a className="button" href="/centres">Voir tous les centres</a></div></>;
}
