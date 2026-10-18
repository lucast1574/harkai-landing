import { useRef } from 'react';
import { ArrowRight, ArrowUpRight, BellRing, MapPinned, HeartHandshake, Eye, FileText, CheckCircle2, X, Shield } from 'lucide-react';

import Neighborhood from './components/Neighborhood.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import Audiences from './components/Audiences.jsx';
import FAQ from './components/FAQ.jsx';
import LocalContext from './components/LocalContext.jsx';

const features = [
  { Icon: MapPinned, number: '01', title: 'Mira lo que pasa cerca', text: 'Un mapa para explorar reportes de tu zona, con categorías claras y contexto a simple vista.' },
  { Icon: BellRing, number: '02', title: 'Recibe una señal a tiempo', text: 'Consulta alertas de tu zona, también las no verificadas. El envío de notificaciones móviles está en preparación.' },
  { Icon: HeartHandshake, number: '03', title: 'Ayuda a que otros sepan', text: 'Comparte lo que observas. Otra persona puede confirmar el reporte con una sola aprobación.' },
];

export default function App() {
  const dialog = useRef(null);
  const onPanel = () => { if (import.meta.env.VITE_PANEL_READY === 'true') window.location.assign('https://panel.harkai.lat'); else dialog.current.showModal(); };
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a><header className="landing-masthead"><a href="/" className="landing-brand" aria-label="Harkai, inicio"><img src="/icon.png" alt="" width="55" height="55"/><span>harkai<span className="brand-dot">.</span></span></a><span className="masthead-note">Reportes comunitarios en Perú</span><nav className="masthead-links" aria-label="Navegación principal"><a href="#comunidad">La comunidad</a><a href="#preguntas">Preguntas</a><button onClick={onPanel}>Explorar Harkai <ArrowUpRight size={16} aria-hidden="true" /></button></nav></header>
    <main id="contenido">
      <section id="inicio" className="hero section">
        <div className="hero-copy"><span className="hero-badge"><span />El barrio también tiene algo que decir</span><h1>Tu comunidad.<br />En el mismo<br />mapa.</h1><p>Harkai reúne reportes comunitarios en Perú para entender lo que pasa cerca. Mira tu zona, reconoce el estado de cada reporte y encuentra contexto entre las voces de tu comunidad.</p><div className="hero-actions"><a className="button primary" href="#comunidad">Cómo funciona <ArrowRight size={19} aria-hidden="true" /></a><button className="text-button" onClick={onPanel}>Explorar mi zona <ArrowUpRight size={17} aria-hidden="true" /></button></div><div className="hero-caption"><Shield size={17} aria-hidden="true" />Información local. Confirmación comunitaria.</div></div>
        <Neighborhood />
        <div className="hero-bottom"><span>Tu barrio se entiende mejor cuando lo miramos juntos.</span><span>Diseñado para nuestras comunidades en Perú <ArrowUpRight size={15} aria-hidden="true" /></span></div>
      </section>
      <LocalContext />
      <section id="comunidad" className="section community"><SectionHeading eyebrow="Información con contexto" title="Una ciudad que se mira en comunidad.">Un reporte puede ser el comienzo de una conversación útil. La ubicación y el estado de confirmación ayudan a entenderlo antes de compartirlo.</SectionHeading><div className="feature-grid">{features.map(({ Icon, number, title, text }) => <article className="feature-card" key={number}><div><span className="feature-icon"><Icon size={24} aria-hidden="true" /></span><span className="feature-number">{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="trust-strip"><Eye size={23} aria-hidden="true" /><div><strong>El estado del reporte nunca se esconde.</strong><p>«No verificado» y «Confirmado por la comunidad» son distintos. Las sugerencias de categoría no verifican los hechos.</p></div></div></section>
      <section className="section workflow"><SectionHeading eyebrow="Del reporte a la comunidad" title="De lo que observas a lo que compartimos." /><div className="steps"><article><FileText aria-hidden="true" /><span>PASO 01</span><h3>Describe</h3><p>Cuenta qué ocurre con texto o audio. Revisa la transcripción y la categoría sugerida.</p></article><article><MapPinned aria-hidden="true" /><span>PASO 02</span><h3>Ubica y revisa</h3><p>Selecciona el lugar y añade evidencia si corresponde. Revisa antes de publicar.</p></article><article><CheckCircle2 aria-hidden="true" /><span>PASO 03</span><h3>Confirma en comunidad</h3><p>El reporte nace sin verificar. La aprobación de otra cuenta lo confirma para la comunidad.</p></article></div><p className="section-note">Este es el flujo que estamos implementando en la nueva versión.</p></section>
      <Audiences /><FAQ />
      <section className="section closing"><span className="eyebrow">Cerca de ti</span><h2>La ciudad es grande.<br /><span>La comunidad está cerca.</span></h2><button className="button primary" onClick={onPanel}>Ir al mapa de mi comunidad <ArrowUpRight size={19} aria-hidden="true" /></button><p>Conoce la propuesta y consulta la disponibilidad del panel. La app móvil está en renovación.</p></section>
      <footer className="landing-footer"><div><a className="footer-brand" href="#inicio"><img src="/icon.png" alt="" width="36" height="36"/>harkai.</a><p>Reportes comunitarios. Contexto local.<br/>Hecho para nuestras comunidades en Perú.</p></div><nav aria-label="Información legal"><a href="/privacidad/">Política de privacidad</a><a href="/terminos/">Términos y condiciones</a><a href="/aviso-legal/">Aviso legal</a><a href="/eliminar-cuenta/">Eliminar cuenta y datos</a><a href="/normas-comunidad/">Normas de la comunidad</a></nav><span>© {new Date().getFullYear()} Harkai</span></footer>
    </main>
    <dialog ref={dialog} className="panel-dialog" aria-labelledby="panel-title" onClick={event => { if (event.target === dialog.current) dialog.current.close(); }}><button className="close-menu" onClick={() => dialog.current.close()} aria-label="Cerrar aviso"><X aria-hidden="true" /></button><span className="feature-icon"><Shield aria-hidden="true" /></span><h2 id="panel-title">Una nueva experiencia está en camino.</h2><p>Estamos renovando el panel y la app. El mapa, los reportes y los espacios para municipios estarán en <strong>panel.harkai.lat</strong>.</p><p>El acceso todavía no está habilitado. Aquí puedes conocer cómo funcionará.</p><button className="button primary" onClick={() => { dialog.current.close(); document.getElementById('para-ti').scrollIntoView({ behavior: 'smooth' }); }}>Ver las experiencias <ArrowRight size={17} aria-hidden="true" /></button></dialog>
  </>;
}
