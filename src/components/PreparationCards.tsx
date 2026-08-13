import { FeatureCard } from './FeatureCard';

export function PreparationCards() {
  return <div className="preparation-grid"><FeatureCard icon="moon" title="AVANT" compact><span className="bullet-list">Mangez sainement<br />Dormez bien<br />Hydratez-vous<br />Apportez vos documents</span></FeatureCard><FeatureCard icon="heart" title="PENDANT" compact><span className="bullet-list">Respirez calmement<br />Restez détendu<br />Informez le personnel si besoin<br />Gardez-vous au chaud</span></FeatureCard><FeatureCard icon="zap" title="APRÈS" compact><span className="bullet-list">Reposez-vous 15 min<br />Buvez beaucoup d'eau<br />Évitez l'effort 48h<br />Mangez bien</span></FeatureCard></div>;
}

