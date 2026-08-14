import { useState } from 'react';
import type { FormEvent } from 'react';
import { Icon } from './Icon';

interface EligibilityFormProps { onToast: (message: string, type?: 'success' | 'error' | 'info') => void; onReserve: () => void; }

export function EligibilityForm({ onToast, onReserve }: EligibilityFormProps) {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [monthsSinceDonation, setMonthsSinceDonation] = useState('');
  const [firstDonation, setFirstDonation] = useState(false);
  const [result, setResult] = useState<'eligible' | 'ineligible' | null>(null);
  const [reason, setReason] = useState('');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ageValue = Number(age);
    const weightValue = Number(weight);
    if (!age || ageValue < 18 || ageValue > 65) { setResult('ineligible'); setReason("L'âge doit être compris entre 18 et 65 ans."); onToast("Vérifiez votre âge : il doit être compris entre 18 et 65 ans.", 'error'); return; }
    if (!weight || weightValue < 50) { setResult('ineligible'); setReason('Le poids minimum requis est de 50 kg.'); onToast('Le poids minimum requis pour donner est de 50 kg.', 'error'); return; }
    const minimumDelay = gender === 'female' ? 4 : 3;
    const monthsValue = Number(monthsSinceDonation);
    if (!firstDonation && (!monthsSinceDonation || monthsValue < minimumDelay)) { setResult('ineligible'); setReason(`Après un don, le délai minimum est de ${minimumDelay} mois pour une ${gender === 'female' ? 'femme' : 'homme'}.`); onToast(`Vous devez attendre au moins ${minimumDelay} mois après votre dernier don.`, 'error'); return; }
    setResult('eligible'); setReason('Vous semblez remplir les critères de base pour donner votre sang.'); onToast('Votre test est positif. Prenez rendez-vous dans un centre.', 'success');
  };

  return (
    <div className="eligibility-layout">
      <form className="eligibility-form" onSubmit={submit}>
        <div className="form-step"><span className="form-label">Vous êtes :</span><div className="choice-grid">
          {['male', 'female'].map((value) => <label className={`choice ${gender === value ? 'is-selected' : ''}`} key={value}><input type="radio" name="gender" value={value} checked={gender === value} onChange={(event) => setGender(event.target.value)} /><Icon name={value === 'female' ? 'woman' : 'user'} size={22} /><span>{value === 'male' ? 'Homme' : 'Femme'}</span></label>)}
        </div></div>
        <div className="form-grid"><label>Votre âge <span>(18–65 ans)</span><input type="number" min="1" max="65" value={age} onChange={(event) => setAge(event.target.value)} placeholder="Ex : 25" required /></label><label>Votre poids <span>(minimum 50 kg)</span><input type="number" min="50" value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="Ex : 65" required /></label><label className={firstDonation ? 'field-disabled' : ''}>Il y a combien de mois avez-vous donné votre sang ? <input type="number" min="1" value={monthsSinceDonation} onChange={(event) => setMonthsSinceDonation(event.target.value)} placeholder={firstDonation ? 'Premier don' : 'Ex : 4'} disabled={firstDonation} required={!firstDonation} /></label></div>
        <label className="first-donation"><input type="checkbox" checked={firstDonation} onChange={(event) => setFirstDonation(event.target.checked)} /> <span>C'est mon premier don</span></label>
        <button className="button button--full" type="submit">Vérifier mon éligibilité <Icon name="arrow-right" size={19} /></button>
        <p className="form-note"><Icon name="lock" size={15} /> Vos réponses restent confidentielles et ne sont pas conservées.</p>
      </form>
      <div className={`eligibility-result ${result ? `eligibility-result--${result}` : ''}`} aria-live="polite">
        {!result ? <><span className="result-placeholder"><Icon name="shield-check" size={28} /></span><strong>Votre résultat apparaîtra ici</strong><p>Répondez aux quelques questions pour obtenir une première indication.</p></> : <><span className="result-icon"><Icon name={result === 'eligible' ? 'check-circle' : 'x'} size={28} /></span><span className="eyebrow">{result === 'eligible' ? 'Éligible !' : 'À vérifier plus tard'}</span><h3>{result === 'eligible' ? 'Vous pouvez probablement donner.' : 'Votre don doit être reporté.'}</h3><p>{reason}</p>{result === 'eligible' && <button className="text-button" type="button" onClick={onReserve}>Trouver un centre <Icon name="arrow-right" size={16} /></button>}</>}
      </div>
    </div>
  );
}
