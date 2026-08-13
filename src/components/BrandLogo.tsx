export function BrandLogo({ light = false, href = '#hero' }: { light?: boolean; href?: string }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href={href} aria-label="HemoLink, accueil">
      <svg className="brand__mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 3.5S7.5 13.4 7.5 19.5a8.5 8.5 0 0 0 17 0C24.5 13.4 16 3.5 16 3.5Z" fill="currentColor" />
        <path d="M12.5 21.5a4 4 0 0 0 4 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity=".75" />
      </svg>
      <span>HemoLink</span>
    </a>
  );
}
