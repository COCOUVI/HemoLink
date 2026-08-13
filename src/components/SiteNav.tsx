import { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Icon } from './Icon';

const links = [
  ['Pourquoi ?', '#why-donate'],
  ['Critères', '#who-can-donate'],
  ['Test', '#eligibility-test'],
  ['Le parcours', '#process'],
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const isCentersPage = window.location.pathname === '/centres';
  return (
    <header className="site-nav">
      <div className="container site-nav__inner">
        <BrandLogo href={isCentersPage ? '/' : '#hero'} />
        <nav className={`site-nav__links ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
          {isCentersPage ? <a href="/" onClick={() => setOpen(false)}>Retour à l'accueil</a> : links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button--small" href={isCentersPage ? '#all-centres' : '/centres'} onClick={() => setOpen(false)}>{isCentersPage ? 'Tous les centres' : 'Trouver un centre'}</a>
        </nav>
        <button className="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? 'x' : 'users'} size={22} />
        </button>
      </div>
    </header>
  );
}
