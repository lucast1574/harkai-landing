import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
export default function MotionControl(){
 const [paused,setPaused]=useState(false);const [reduced,setReduced]=useState(false);const button=useRef(null);
 useEffect(()=>{const preference=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(preference.matches);update();preference.addEventListener('change',update);return()=>preference.removeEventListener('change',update)},[]);
 return <button ref={button} type="button" className="motion-control" aria-pressed={paused} disabled={reduced} onClick={()=>{const next=!paused;setPaused(next);button.current.closest('main').dataset.motion=next?'paused':'full';}}>{paused||reduced?<Play size={14} aria-hidden="true"/>:<Pause size={14} aria-hidden="true"/>}{reduced?'Movimiento reducido':paused?'Activar animaciones':'Pausar animaciones'}</button>;
}
