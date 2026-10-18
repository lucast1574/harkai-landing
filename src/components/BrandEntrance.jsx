import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
export default function BrandEntrance() {
  const storageKey = 'harkai-brand-entrance-v1';
  const root = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const element = root.current;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || location.hash || preference.matches) return;
    try {
      if (sessionStorage.getItem(storageKey) && !started.current) return;
      sessionStorage.setItem(storageKey, "seen");
    } catch { /* Private browsing still gets a finite, dismissible entrance. */ }
    started.current = true;
    element.hidden = false;
    const main = element.closest("main");
    if (main) main.dataset.entrance = "active";
    const dismiss = () => {
      element.hidden = true;
      if (main) delete main.dataset.entrance;
    };
    const onKey = (event) => {
      if (event.key === "Escape" || event.key === "Tab") dismiss();
    };
    const timer = setTimeout(dismiss, 1850);
    window.addEventListener("keydown", onKey);
    preference.addEventListener("change", dismiss);
    return () => {
      clearTimeout(timer);
      dismiss();
      window.removeEventListener("keydown", onKey);
      preference.removeEventListener("change", dismiss);
    };
  }, [storageKey]);
  return <div ref={root} hidden className="brand-entrance entrance-harkai">
    <div className="brand-entrance-art" aria-hidden="true">
      <svg className="entrance-radar" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="170"/><circle cx="200" cy="200" r="120"/><circle cx="200" cy="200" r="70"/><path d="M200 15v35m0 300v35M15 200h35m300 0h35"/><circle className="entrance-radar-dot" cx="320" cy="200" r="5"/></svg>
      <div className="brand-entrance-logo harkai-entrance-wordmark"><img src="/icon.png" width="72" height="72" alt=""/><span>harkai<span>.</span></span></div>
      <p className="brand-entrance-caption">Tu comunidad. En el mismo mapa.</p><span className="brand-entrance-line"/>
    </div>
    <button type="button" className="brand-entrance-skip" onClick={()=>{if(root.current){root.current.hidden=true;const main=root.current.closest('main');if(main)delete main.dataset.entrance;}}}>Explorar mi comunidad <ArrowRight size={18} aria-hidden="true"/></button>
  </div>;
}
