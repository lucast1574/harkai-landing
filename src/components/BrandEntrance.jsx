import { ArrowRight } from 'lucide-react';
export default function BrandEntrance() {
  return <div className="brand-entrance entrance-harkai">
    <div className="brand-entrance-art" aria-hidden="true">
      <svg className="entrance-radar" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="170"/><circle cx="200" cy="200" r="120"/><circle cx="200" cy="200" r="70"/><path d="M200 15v35m0 300v35M15 200h35m300 0h35"/><circle className="entrance-radar-dot" cx="320" cy="200" r="5"/></svg>
      <div className="brand-entrance-logo harkai-entrance-wordmark"><img src="/icon.png" width="72" height="72" alt=""/><span>harkai<span>.</span></span></div>
      <p className="brand-entrance-caption">Tu comunidad. En el mismo mapa.</p><span className="brand-entrance-line"/>
    </div>
    <button type="button" className="brand-entrance-skip" onClick={() => document.documentElement.removeAttribute("data-brand-arrival")}>Explorar mi comunidad <ArrowRight size={18} aria-hidden="true"/></button>
  </div>;
}
