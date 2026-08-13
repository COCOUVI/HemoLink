import { useCallback } from 'react';
import { SiteNav } from './components/SiteNav';
import { SectionHeading } from './components/SectionHeading';
import { DonationScene } from './components/DonationScene';
import { Icon } from './components/Icon';
import { FeatureCard } from './components/FeatureCard';
import { EligibilityForm } from './components/EligibilityForm';
import { ProcessSteps } from './components/ProcessSteps';
import { PreparationCards } from './components/PreparationCards';
import { BloodReserves } from './components/BloodReserves';
import { CentersSection } from './components/CentersSection';
import { FaqAccordion } from './components/FaqAccordion';
import { SiteFooter } from './components/SiteFooter';
import { ToastRegion } from './components/ToastRegion';
import { CentersPage } from './components/CentersPage';
import { useToast } from './hooks/useToast';
import './App.css';

function App() {
  const { show } = useToast();
  const scrollToCenters = useCallback(() => document.querySelector('#centres')?.scrollIntoView({ behavior: 'smooth' }), []);
  if (window.location.pathname === '/centres') {
    return <div className="app-shell"><SiteNav /><ToastRegion /><CentersPage /><SiteFooter /></div>;
  }
  return <div className="app-shell">
    <SiteNav />
    <ToastRegion />
    <main>
      <section className="hero" id="hero"><div className="hero__shape hero__shape--one" /><div className="hero__shape hero__shape--two" /><div className="container hero__grid"><div className="hero__copy"><span className="eyebrow">Don de sang · Bénin</span><h1>Un geste simple,<br /><em>une vie sauvée.</em></h1><p className="hero__lead">Votre don de sang peut sauver jusqu'à 3 vies en une seule visite. Un moment de calme pour vous, une seconde chance pour un autre.</p><a className="button button--large" href="#eligibility-test">Suis-je éligible ? <Icon name="arrow-right" size={19} /></a><div className="trust-signals"><span><Icon name="shield-check" size={17} /> Sécurisé</span><span><Icon name="check-circle" size={17} /> Gratuit</span><span><Icon name="lock" size={17} /> Confidentiel</span></div></div><DonationScene /></div></section>

      <section className="section section--white" id="why-donate"><div className="container"><SectionHeading eyebrow="Pourquoi agir" title="Votre don fait la différence." description="Le don de sang est un acte de solidarité qui change des vies. Chaque jour, des personnes en ont besoin pour une urgence, une opération ou un traitement." /><div className="feature-grid feature-grid--three"><FeatureCard icon="ambulance" title="Pour les urgences">Intervenir lors d'accidents de la route ou de complications lors d'accouchements.</FeatureCard><FeatureCard icon="microscope" title="Pour les malades">Accompagner le traitement des cancers et des maladies génétiques.</FeatureCard><FeatureCard icon="users" title="Pour la solidarité">Créer une chaîne humaine où chaque donateur renforce notre système de santé.</FeatureCard></div></div></section>

      <section className="section section--cream" id="who-can-donate"><div className="container"><SectionHeading centered title="Qui peut donner ?" description="La plupart des personnes en bonne santé peuvent donner. Voici les critères essentiels à connaître." /><div className="feature-grid feature-grid--four"><FeatureCard icon="calendar" title="Âge" compact>Avoir entre 18 et 65 ans révolus.</FeatureCard><FeatureCard icon="weight" title="Poids" compact>Peser au moins 50 kg.</FeatureCard><FeatureCard icon="clock" title="Délais" compact>Respecter 3 à 4 mois entre deux dons.</FeatureCard><FeatureCard icon="stethoscope" title="Santé" compact>Être en bonne forme le jour du don.</FeatureCard></div></div></section>

      <section className="section section--white" id="eligibility-test"><div className="container"><SectionHeading centered eyebrow="En moins d'une minute" title="Suis-je éligible ?" description="Répondez à trois questions pour obtenir une première indication." /><EligibilityForm onToast={show} onReserve={scrollToCenters} /><p className="medical-disclaimer">Seul un entretien médical professionnel lors de votre rendez-vous confirme l'aptitude réelle au don.</p></div></section>

      <section className="section section--cream" id="process"><div className="container"><SectionHeading centered title="Déroulement du don" description="Un processus simple et sécurisé en quatre étapes." /><ProcessSteps /><p className="total-time">Durée totale : <strong>environ 45 minutes</strong></p></div></section>
      <section className="section section--white" id="preparation"><div className="container"><SectionHeading centered title="Préparez-vous au don" description="Quelques conseils pour une meilleure expérience, avant, pendant et après." /><PreparationCards /></div></section>
      <section className="section section--cream" id="blood-supplies"><div className="container"><SectionHeading centered eyebrow="Aujourd'hui" title="Besoins actuels" description="Un aperçu des réserves par groupe sanguin. Chaque don peut aider à rééquilibrer les stocks." /><BloodReserves /></div></section>

      <section className="section section--white" id="centres"><div className="container"><SectionHeading title="Où donner au Bénin ?" description="Trouvez le centre le plus proche et faites le premier pas. Nos équipes vous accueillent avec attention." /><CentersSection /></div></section>
      <section className="section section--cream" id="faq"><div className="container faq-layout"><SectionHeading eyebrow="On vous répond" title="Les questions que vous vous posez." description="Donner pour la première fois peut soulever quelques questions. Voici les réponses les plus utiles." /><FaqAccordion /></div></section>
    </main>
    <SiteFooter />
  </div>;
}

export default App;
