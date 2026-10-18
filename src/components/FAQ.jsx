import { Plus } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const questions = [
  ['¿Qué es Harkai?', 'Una plataforma de reportes comunitarios para conocer lo que pasa cerca. La nueva experiencia reúne mapas, alertas e información para personas y gobiernos locales.'],
  ['¿Un reporte no verificado también genera una alerta?', 'Con las notificaciones activadas, los reportes no verificados también pueden avisarte según tu zona y preferencias. Ese estado se mantiene visible al abrir el reporte. Una alerta comunitaria no equivale a una confirmación oficial.'],
  ['¿Cómo se confirma un reporte?', 'Una cuenta distinta a la del autor puede darle una aprobación. El estado cambia a «Confirmado por la comunidad». Esta confirmación no acredita una investigación ni una validación oficial de autoridades.'],
  ['¿Ya puedo usar el nuevo panel y la app?', 'Usa «Explorar Harkai» para consultar la disponibilidad del panel web. La app móvil se está renovando; por ahora no anunciamos una nueva descarga pública ni cobros activos.'],
  ['¿Harkai reemplaza los servicios de emergencia?', 'No. Es una herramienta de información comunitaria. Ante un peligro inmediato, busca un lugar seguro y contacta al servicio de emergencia correspondiente a tu localidad. No te expongas para conseguir evidencia.'],
];
export default function FAQ() {
  return <section id="preguntas" className="section faq"><SectionHeading eyebrow="Para conocer mejor Harkai" title="Preguntas que sí importan." /><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={19} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>;
}
