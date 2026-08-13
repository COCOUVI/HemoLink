import { useState } from 'react';
import { faqs } from '../data/faqs';
import { Icon } from './Icon';

export function FaqAccordion() {
  const [active, setActive] = useState<number | null>(0);
  return <div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${active === index ? 'is-active' : ''}`} key={faq.question}><button type="button" aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)}><span>{faq.question}</span><Icon name="chevron-down" size={18} /></button><div className="faq-answer"><p>{faq.answer}</p></div></div>)}</div>;
}

