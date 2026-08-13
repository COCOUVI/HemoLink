import { Icon } from './Icon';
import type { IconName } from '../types/hemolink';

const steps: { icon: IconName; time: string; title: string; text: string }[] = [
  { icon: 'clipboard-check', time: '5–10 min', title: 'Accueil', text: 'Enregistrement et vérification de vos informations.' },
  { icon: 'stethoscope', time: '10 min', title: 'Test de santé', text: 'Prise de tension et entretien médical rapide.' },
  { icon: 'syringe', time: '10 min', title: 'Prélèvement', text: 'Collecte du sang en toute sécurité, accompagné par nos équipes.' },
  { icon: 'coffee', time: '15 min', title: 'Repos', text: 'Hydratation et récupération avec une collation.' },
];

export function ProcessSteps() {
  return <div className="process-grid">{steps.map((step, index) => <article className="process-card" key={step.title}><span className="process-card__number">0{index + 1}</span><div className="feature-card__icon"><Icon name={step.icon} size={25} /></div><span className="process-card__time"><Icon name="clock" size={14} /> {step.time}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>;
}

