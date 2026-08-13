import { BrandLogo } from './BrandLogo';
import { Icon } from './Icon';

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-grid"><div><BrandLogo light /><p className="footer-intro">Un geste simple, une vie sauvée.<br />Ensemble, faisons circuler l'espoir.</p></div><div><span className="footer-title">Explorer</span><a href="#why-donate">Pourquoi donner ?</a><a href="#who-can-donate">Critères</a><a href="#process">Le parcours</a></div><div><span className="footer-title">Besoin d'aide ?</span><a href="#eligibility-test">Tester mon éligibilité</a><a href="#centres">Trouver un centre</a><a href="#faq">Questions fréquentes</a></div><div className="footer-callout"><Icon name="heart" size={23} /><strong>Chaque don compte.</strong><p>Merci de faire partie de la chaîne.</p></div></div><div className="container footer-bottom"><span>© 2026 HemoLink. Fait avec soin au Bénin.</span><span>Confidentialité · Accessibilité</span></div></footer>;
}

