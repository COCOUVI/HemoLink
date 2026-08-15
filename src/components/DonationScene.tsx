import { useCallback, useEffect, useState } from 'react';
import { Icon } from './Icon';
import imageTwo from '../assets/JM-don-Sang-2.jpg';
import imageThree from '../assets/JM-don-Sang-3.jpg';
import imageFour from '../assets/JM-don-Sang-4.jpg';

const slides = [
  { src: imageTwo, alt: 'Donneur installe pendant une seance de don de sang', label: 'Un geste concret', title: 'Chaque don compte.' },
  { src: imageThree, alt: 'Professionnelle de sante accompagnant un donneur', label: 'Un accompagnement humain', title: 'Donner en toute confiance.' },
  { src: imageFour, alt: 'Seance de don de sang dans un centre medical', label: 'Un cadre securise', title: 'Agir pour la vie.' },
];

export function DonationScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const showSlide = useCallback((index: number) => setActiveIndex((index + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="hero-carousel" role="region" aria-roledescription="carousel" aria-label="Scenes de don de sang"
      onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false); }}>
      <div className="hero-carousel__viewport">
        {slides.map((slide, index) => (
          <figure className={`hero-carousel__slide${index === activeIndex ? ' is-active' : ''}`} key={slide.src} aria-hidden={index !== activeIndex}>
            <img src={slide.src} alt={slide.alt} />
            <figcaption><span>{slide.label}</span><strong>{slide.title}</strong></figcaption>
          </figure>
        ))}
      </div>
      <div className="hero-carousel__controls">
        <button type="button" className="hero-carousel__arrow" onClick={() => showSlide(activeIndex - 1)} aria-label="Image precedente"><Icon name="arrow-right" size={18} /></button>
        <div className="hero-carousel__dots" aria-label="Choisir une image">
          {slides.map((slide, index) => <button type="button" className={`hero-carousel__dot${index === activeIndex ? ' is-active' : ''}`} key={slide.src} onClick={() => showSlide(index)} aria-label={`Afficher l'image ${index + 1}`} aria-current={index === activeIndex} />)}
        </div>
        <button type="button" className="hero-carousel__arrow" onClick={() => showSlide(activeIndex + 1)} aria-label="Image suivante"><Icon name="arrow-right" size={18} /></button>
      </div>
    </div>
  );
}
