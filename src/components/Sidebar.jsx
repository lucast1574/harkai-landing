import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Home, Layers3, Users, HelpCircle, Menu, X, Shield } from 'lucide-react';

const links = [
  ['#inicio', 'Inicio', Home], ['#comunidad', 'La comunidad', Layers3],
  ['#para-ti', 'Para personas y ciudades', Users], ['#preguntas', 'Preguntas frecuentes', HelpCircle],
];

export default function Sidebar({ onPanel }) {
  const [active, setActive] = useState('#inicio');
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  useEffect(() => {
    if (open && !dialog.current.open) dialog.current.showModal();
    if (!open && dialog.current.open) dialog.current.close();
  }, [open]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); });
    }, { rootMargin: '-10% 0px -55% 0px' });
    links.forEach(([id]) => { const section = document.querySelector(id); if (section) observer.observe(section); });
    const query = window.matchMedia('(min-width: 960px)');
    const close = () => { if (query.matches) setOpen(false); };
    query.addEventListener('change', close);
    return () => { observer.disconnect(); query.removeEventListener('change', close); };
  }, []);

  const content = <>
    <a className="brand" href="#inicio" onClick={() => setOpen(false)}><img src="/icon.png" alt="" width="56" height="56" /><span>harkai<span className="brand-dot">.</span></span></a>
    <p className="sidebar-label">CERCA DE TI</p>
    <nav aria-label="Navegación principal">{links.map(([href, title, Icon]) => <a key={href} href={href} className={active === href ? 'nav-link active' : 'nav-link'} aria-current={active === href ? 'location' : undefined} onClick={() => { setActive(href); setOpen(false); }}><Icon size={18} aria-hidden="true" /><span>{title}</span></a>)}</nav>
    <div className="sidebar-bottom"><div className="sidebar-note"><Shield size={20} aria-hidden="true" /><p>Una mirada local.<br /><strong>Un esfuerzo colectivo.</strong></p></div><button className="button secondary panel-button" onClick={() => { setOpen(false); onPanel(); }}>Acceso al panel <ArrowUpRight size={17} aria-hidden="true" /></button><span className="sidebar-location">Hecho para nuestras comunidades en Perú.</span></div>
  </>;

  return <>
    <button className="menu-trigger" aria-label="Abrir menú lateral" aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(true)}><Menu aria-hidden="true" /></button>
    <aside className="desktop-sidebar">{content}</aside>
    <dialog ref={dialog} id="mobile-navigation" className="mobile-sidebar" aria-label="Menú lateral" onClose={() => setOpen(false)} onClick={event => { if (event.target === dialog.current) setOpen(false); }}><button className="close-menu" aria-label="Cerrar menú lateral" onClick={() => setOpen(false)}><X aria-hidden="true" /></button>{content}</dialog>
  </>;
}
