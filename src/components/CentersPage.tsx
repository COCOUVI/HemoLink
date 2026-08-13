import { centers } from '../data/centers';
import { CenterCard } from './CenterCard';
import { SectionHeading } from './SectionHeading';

export function CentersPage() {
  return <div className="centers-page" id="all-centres"><section className="centers-page__hero"><div className="container"><a className="back-link" href="/"><span aria-hidden="true">←</span> Retour à l'accueil</a><SectionHeading eyebrow="Réseau HemoLink" title="Les centres de collecte au Bénin" description="Choisissez le centre qui vous convient. Nos équipes vous accueillent avec attention et vous accompagnent à chaque étape du don." /></div></section><section className="section section--white"><div className="container"><div className="centers-page__intro"><span>8 centres disponibles</span><p>Les horaires peuvent évoluer : pensez à appeler avant votre déplacement.</p></div><div className="centers-grid centers-grid--all">{centers.map((center) => <CenterCard center={center} key={center.name} />)}</div></div></section></div>;
}
