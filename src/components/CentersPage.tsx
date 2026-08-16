import { useMemo, useState } from 'react';
import { centers } from '../data/centers';
import { CenterCard } from './CenterCard';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

const cities = ['Cotonou', 'Parakou', 'Porto-Novo', 'Abomey-Calavi', 'Ouidah', 'Djougou', 'Bohicon', 'Natitingou'];
const donationTypes = ['Sang total', 'Plasma', 'Plaquettes'];
const searchableCenters = centers.map((center, index) => ({ ...center, city: cities[index], donationType: donationTypes[index % donationTypes.length], availability: center.access === 'Sans rendez-vous' ? 'Sans rendez-vous' : 'Sur rendez-vous' }));

export function CentersPage() {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('Toutes les villes');
  const [donationType, setDonationType] = useState('Tous les dons');
  const [availability, setAvailability] = useState('Toutes les disponibilités');
  const filteredCenters = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return searchableCenters.filter((center) => {
      const matchesQuery = !normalizedQuery || `${center.name} ${center.address} ${center.city}`.toLocaleLowerCase().includes(normalizedQuery);
      return matchesQuery && (city === 'Toutes les villes' || center.city === city) && (donationType === 'Tous les dons' || center.donationType === donationType) && (availability === 'Toutes les disponibilités' || center.availability === availability);
    });
  }, [availability, city, donationType, query]);
  const resetFilters = () => { setQuery(''); setCity('Toutes les villes'); setDonationType('Tous les dons'); setAvailability('Toutes les disponibilités'); };

  return <div className="centers-page" id="all-centres"><section className="centers-page__hero"><div className="container"><a className="back-link" href="/"><span aria-hidden="true">←</span> Retour à l'accueil</a><SectionHeading eyebrow="Réseau HemoLink" title="Les centres de collecte au Bénin" description="Explorez les centres proches de vous et trouvez le créneau qui correspond à votre don." /></div></section><section className="section section--white"><div className="container"><div className="centers-page__intro"><span>{filteredCenters.length} centre{filteredCenters.length > 1 ? 's' : ''} trouvé{filteredCenters.length > 1 ? 's' : ''}</span><p>Les horaires peuvent évoluer : pensez à appeler avant votre déplacement.</p></div><div className="center-filters"><label className="center-search"><Icon name="map-pin" size={18} /><span className="sr-only">Rechercher un centre</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une ville ou un centre" /></label><label><span className="sr-only">Filtrer par ville</span><select value={city} onChange={(event) => setCity(event.target.value)}><option>Toutes les villes</option>{cities.map((item) => <option key={item}>{item}</option>)}</select></label><label><span className="sr-only">Filtrer par type de don</span><select value={donationType} onChange={(event) => setDonationType(event.target.value)}><option>Tous les dons</option>{donationTypes.map((item) => <option key={item}>{item}</option>)}</select></label><label><span className="sr-only">Filtrer par disponibilité</span><select value={availability} onChange={(event) => setAvailability(event.target.value)}><option>Toutes les disponibilités</option><option>Sans rendez-vous</option><option>Sur rendez-vous</option></select></label><button className="filter-reset" type="button" onClick={resetFilters}>Réinitialiser</button></div>{filteredCenters.length > 0 ? <div className="centers-grid centers-grid--all">{filteredCenters.map((center, index) => <CenterCard center={center} key={`${center.name}-${index}`} />)}</div> : <div className="centers-empty"><Icon name="map-pin" size={28} /><h3>Aucun centre trouvé</h3><p>Modifiez votre recherche ou réinitialisez les filtres.</p><button className="button button--outline" type="button" onClick={resetFilters}>Réinitialiser les filtres</button></div>}</div></section></div>;
}
