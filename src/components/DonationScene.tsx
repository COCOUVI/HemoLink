export function DonationScene() {
  return (
    <div className="donation-scene" aria-label="Illustration animée d'un don de sang" role="img">
      <div className="scene-orbit" />
      <svg viewBox="0 0 560 460" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="280" cy="230" r="192" fill="white" fillOpacity=".45" />
        <g className="scene-figure">
          <circle cx="142" cy="137" r="35" stroke="currentColor" strokeWidth="3" />
          <path d="M62 382V251c0-40 30-61 80-61s80 21 80 61v131M199 281h64" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M130 190v30" stroke="#E8D5D0" strokeWidth="8" strokeLinecap="round" />
          <path d="M94 236c21 12 45 13 71 2" stroke="currentColor" strokeWidth="2" opacity=".45" />
        </g>
        <g className="scene-figure">
          <path d="M382 400h138M420 400V302h60v98" stroke="#E8D5D0" strokeWidth="6" strokeLinecap="round" />
          <circle cx="450" cy="148" r="35" stroke="currentColor" strokeWidth="3" />
          <path d="M370 382V260c0-40 30-60 80-60s80 20 80 60v122M390 281h-80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M415 236c22 12 46 13 70 2" stroke="currentColor" strokeWidth="2" opacity=".45" />
        </g>
        <g className="scene-medical">
          <rect x="260" y="270" width="40" height="20" rx="4" fill="white" stroke="currentColor" strokeWidth="2" />
          <rect className="syringe-liquid" x="262" y="272" width="36" height="16" rx="2" fill="#A84C3D" />
          <g className="needle-poke"><path d="M300 280h25l-5-2m5 2-5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></g>
          <path className="tube-flow" d="M310 280c0 0 0 70 90 70" stroke="#A84C3D" strokeWidth="2.5" strokeDasharray="8 5" />
          <path d="M400 350v24c0 10 8 18 18 18h24c10 0 18-8 18-18v-24" stroke="#A84C3D" strokeWidth="2" />
          <path className="bag-liquid" d="M402 366h56v8c0 7-5 12-12 12h-32c-7 0-12-5-12-12v-8Z" fill="#A84C3D" opacity=".75" />
        </g>
      </svg>
    </div>
  );
}

