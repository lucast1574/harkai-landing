import { Plus } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const questions = [
  ['¿Qué es Harkai?', 'Una plataforma de reportes comunitarios para conocer lo que pasa cerca. La nueva experiencia reúne mapas, alertas e información para personas y gobiernos locales.'],
  ['¿Un reporte no verificado también genera una alerta?', 'Sí: el nuevo flujo incluye alertas de reportes no verificados según la zona y las preferencias. Ese estado se mantiene visible al abrir el reporte. Una alerta comunitaria no equivale a una confirmación oficial.'],
  ['¿Cómo se confirma un reporte?', 'Una cuenta distinta a la del autor podrá darle una sola aprobación. El estado cambiará a «Confirmado por la comunidad». Esta confirmación no acredita una investigación ni una validación oficial de autoridades.'],
  ['¿Ya puedo usar el nuevo panel y la app?', 'Estamos renovando ambos. Esta página presenta la nueva experiencia; el panel se habilitará en panel.harkai.lat cuando esté listo. Durante esta etapa no hay cobros activos ni una nueva descarga publicada.'],
  ['¿Harkai reemplaza los servicios de emergencia?', 'No. Es una herramienta de información comunitaria. Ante un peligro inmediato, busca un lugar seguro y contacta al servicio de emergencia correspondiente a tu localidad. No te expongas para conseguir evidencia.'],
];
export default function FAQ() {
  return <section id="preguntas" className="section faq"><SectionHeading eyebrow="TODO CLARO, DESDE EL INICIO" title="Preguntas que sí importan." /><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={19} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>;
}
