import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MapPinned, MessageCircle, Mic, PawPrint, HeartHandshake } from 'lucide-react';
import './mobile-app.css';
const screens = [
  {id:'mapa', title:'Tu zona, en el mapa', text:'Explora los reportes cerca de ti y consulta dónde están ocurriendo.', Icon:MapPinned},
  {id:'comunidad', title:'La voz de tu comunidad', text:'Lee lo que comparten tus vecinos y participa en las conversaciones.', Icon:MessageCircle},
  {id:'reportar', title:'Cuenta lo que observas', text:'Describe con texto o voz, añade una foto y revisa tu reporte antes de compartirlo.', Icon:Mic},
  {id:'mascotas', title:'Ellos también son del barrio', text:'Consulta reportes de mascotas perdidas y encontradas cerca de tu zona.', Icon:PawPrint},
  {id:'ayuda', title:'Encuentra una mano cerca', text:'Consulta lugares de ayuda, centros de salud y contactos disponibles.', Icon:HeartHandshake},
];
export default function MobileApp() {
  const [active,setActive]=useState(0);
  const root=useRef(null);
  useEffect(()=>{
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    const observer=new IntersectionObserver(([entry])=>{
      clearInterval(timer);
      if(entry.isIntersecting && !motion.matches) timer=setInterval(()=>setActive(value=>(value+1)%screens.length),5000);
    },{threshold:.2});
    observer.observe(root.current);
    const stop=()=>{clearInterval(timer);observer.disconnect();};
    motion.addEventListener('change',stop);
    return ()=>{stop();motion.removeEventListener('change',stop);};
  },[]);
  return <section ref={root} id="app" className="section app-showcase" aria-labelledby="mobile-app-title">
    <div className="app-showcase-copy"><span className="eyebrow">Harkai para iPhone y Android</span><h2 id="mobile-app-title">Tu barrio.<br />En tu bolsillo<span>.</span></h2><p className="app-showcase-intro">Lo que pasa cerca, las voces que importan y las manos que ayudan. Ahora, contigo donde vayas.</p>
      <div className="app-feature-list" aria-label="Explora las funciones de la app">{screens.map(({id,title,Icon},i)=><button type="button" key={id} className={active===i?'is-active':''} aria-pressed={active===i} onClick={()=>setActive(i)}><Icon size={20} aria-hidden="true"/><span>{title}</span><ArrowUpRight size={16} aria-hidden="true"/></button>)}</div>
      <div className="mobile-store-links"><a href="https://apps.apple.com/app/id6829396398"><span>Descárgala en<strong>App Store</strong></span><ArrowUpRight size={22} aria-hidden="true"/></a><a href="https://play.google.com/store/apps/details?id=com.lucast.harkai"><span>Pruébala en<strong>Google Play</strong></span><ArrowUpRight size={22} aria-hidden="true"/></a></div><small className="app-availability">Android disponible para participantes de las pruebas. Cobertura en Lima, Callao y Trujillo.</small>
    </div>
    <figure className="app-device-stage"><div className="app-stage-word" aria-hidden="true">CERCA.</div><div className="app-phone"><div className="app-phone-screen">{screens.map(({id,title},i)=><img key={id} className={active===i?'is-active':''} src={`/app/${id}.webp`} alt={`Pantalla de Harkai: ${title}`} width="650" height="1413" loading="lazy" aria-hidden={active!==i}/>)}<span className="app-phone-camera" aria-hidden="true"/></div></div><figcaption><span className="app-caption-number">0{active+1} / 05</span><div><strong>{screens[active].title}</strong><p>{screens[active].text}</p><small>Pantallas de la app con datos de demostración.</small></div></figcaption></figure>
  </section>;
}
