import { useState } from 'react';
import { Check, Building2, Users } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const audiences = [
  { id: 'personas', label: 'Para ti', Icon: Users, title: 'Conoce tu zona. Aporta a tu comunidad.', text: 'Una experiencia pensada para consultar lo que ocurre cerca, compartir un reporte y encontrar información clara.', items: ['Mapa y reportes de tu zona', 'Alertas, incluso antes de la confirmación', 'Actividad de la comunidad y gráficos en la web', 'Mascotas y lugares de ayuda'] },
  { id: 'municipios', label: 'Para municipios', Icon: Building2, title: 'Una mirada compartida para tu ciudad.', text: 'Estamos preparando herramientas para que gobiernos locales entiendan los reportes y exploren patrones con contexto.', items: ['Reportes filtrados por zona y periodo', 'Mapas de calor con estados de confirmación', 'Información descargable y exportaciones', 'Acceso institucional mediante el rol gov'] },
];

export default function Audiences() {
  const [selected, setSelected] = useState(0);
  const audience = audiences[selected];
  return <section id="para-ti" className="section audiences"><SectionHeading eyebrow="DISTINTAS MIRADAS. UNA COMUNIDAD." title="Para quien vive la ciudad. Y quien la cuida.">El mismo contexto, con las herramientas y los permisos adecuados para cada persona.</SectionHeading>
    <div role="tablist" aria-label="Experiencias Harkai" className="audience-tabs">{audiences.map(({ id, label, Icon }, index) => <button key={id} id={`tab-${id}`} role="tab" aria-selected={index === selected} aria-controls={`panel-${id}`} tabIndex={index === selected ? 0 : -1} className={index === selected ? 'selected' : ''} onClick={() => setSelected(index)} onKeyDown={event => { const next = event.key === 'ArrowRight' ? (index + 1) % audiences.length : event.key === 'ArrowLeft' ? (index + audiences.length - 1) % audiences.length : event.key === 'Home' ? 0 : event.key === 'End' ? audiences.length - 1 : null; if (next !== null) { event.preventDefault(); setSelected(next); document.getElementById(`tab-${audiences[next].id}`)?.focus(); } }}><Icon size={18} aria-hidden="true" />{label}</button>)}</div>
    <div className="audience-content" id={`panel-${audience.id}`} role="tabpanel" aria-labelledby={`tab-${audience.id}`} tabIndex={0}><div><span className="stage-label">NUEVA EXPERIENCIA EN DESARROLLO</span><h3>{audience.title}</h3><p>{audience.text}</p></div><ul>{audience.items.map(item => <li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}</ul></div>
  </section>;
}