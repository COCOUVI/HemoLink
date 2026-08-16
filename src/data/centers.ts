import type { Center } from '../types/hemolink';

const standardDetails = {
  hours: 'Lundi au vendredi · 08h00–17h30',
  status: 'Fermé le dimanche',
  donationTypes: 'Sang total',
  access: 'Sans rendez-vous',
};

export const centers: Center[] = [
  { name: 'STS Littoral', city: 'Cotonou', address: "Dans l'enceinte du CNHU-HKM, Avenue de la Marina, Cotonou", phone: '+229 01 21 32 04 35', email: 'info@ants.bj', ...standardDetails },
  { name: 'STS Ouémé', city: 'Porto-Novo', address: 'À côté de la maison des jeunes de Djègan Kpèvi, Porto-Novo', phone: '+229 01 21 32 04 35', ...standardDetails },
  { name: 'STS Mono', city: 'Lokossa', address: "Derrière l'hôpital de zone de Lokossa", phone: '+229 01 21 32 04 35', ...standardDetails },
  { name: 'STS Zou', city: 'Abomey', address: 'Quartier Sogbo Aliho, Abomey', phone: '+229 01 21 32 04 35', ...standardDetails },
  { name: 'STS Plateau', city: 'Pobè', address: "Dans l'enceinte de l'hôpital de zone de Pobè", phone: '+229 01 21 32 04 35', ...standardDetails },
  { name: 'STS Collines — Entité A', city: 'Dassa-Zoumè', address: "Dans l'enceinte de l'hôpital de zone de Dassa-Zoumè", phone: '+229 01 21 32 04 35', ...standardDetails },
  { name: 'STS Collines — Entité B', city: 'Dassa-Zoumè', address: "Dans l'enceinte de l'hôpital de zone de Dassa-Zoumè", phone: '+229 01 21 32 04 35', ...standardDetails },
  { name: 'STS Kandi', city: 'Kandi', address: "Dans l'enceinte de l'hôpital de zone de Kandi", phone: '+229 01 21 32 04 35', ...standardDetails },
];
