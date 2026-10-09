import { ArrowUpRight, Check, Flame, MapPin, PawPrint, Clock3 } from 'lucide-react';

export default function Neighborhood() {
  return <figure className="neighborhood">
    <div className="preview-heading"><div><span className="eyebrow">UNA MIRADA A TU ZONA</span><h2>La comunidad en el mapa</h2></div><span className="preview-tag">Vista ilustrativa</span></div>
    <div className="map-illustration" aria-label="Ilustración de un barrio con reportes comunitarios, no es un mapa ni información en tiempo real">
      <svg className="street-grid" viewBox="0 0 720 430" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><pattern id="blocks" patternUnits="userSpaceOnUse" width="100" height="76" patternTransform="rotate(-20)"><rect x="9" y="9" width="78" height="53" rx="5" fill="#142f3c" stroke="#24434d" strokeWidth="1" /><path d="M0 0H100M0 0V76" stroke="#41646c" strokeWidth="5" /></pattern></defs><rect width="720" height="430" fill="#0b2537" /><rect width="720" height="430" fill="url(#blocks)" /><path d="M-20 350C120 380 150 195 310 220S530 400 760 155" fill="none" stroke="#214c53" strokeWidth="48" /><path d="M-20 350C120 380 150 195 310 220S530 400 760 155" fill="none" stroke="#42868a" strokeWidth="24" /><path d="M440 0L550 170 720 100V0Z" fill="#1a453d" /><path d="M35 65H125V145H35Z" fill="#1a453d" /></svg>
      <div className="radius-ring" aria-hidden="true" /><div className="you-marker"><span /><small>Tu zona</small></div>
      <div className="map-pin fire-pin"><Flame size={19} aria-hidden="true" /></div><div className="map-pin pet-pin"><PawPrint size={19} aria-hidden="true" /></div><div className="map-pin place-pin"><MapPin size={19} aria-hidden="true" /></div>
      <div className="report-preview"><div className="report-icon"><Flame size={20} aria-hidden="true" /></div><div><strong>Reporte de incendio</strong><span><Clock3 size={12} aria-hidden="true" /> Publicado por la comunidad</span></div><span className="status">No verificado</span></div>
      <div className="confirmation-preview"><span className="check-circle"><Check size={15} aria-hidden="true" /></span><div><strong>Otra persona lo confirma</strong><small>Una aprobación de otra cuenta.</small></div><ArrowUpRight size={17} aria-hidden="true" /></div>
    </div>
    <figcaption>Reportar primero. Confirmar juntos. Cada estado, siempre visible.</figcaption>
  </figure>;
}
