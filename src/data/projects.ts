export interface Project {
  slug: string
  title: string
  client: string
  sector: string
  sectorIcon: string
  shortDesc: string
  longDesc: string
  result: string
  resultDetail: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'menu-engineering',
    title: 'Menu Engineering: rentabilidad real por plato',
    client: 'Sector hostelería',
    sector: 'Hostelería',
    sectorIcon: '🍽️',
    shortDesc: 'Análisis de popularidad y margen de cada plato para tomar decisiones de carta',
    longDesc:
      'El Menu Engineering es la herramienta que todo restaurante debería tener y casi ninguno aplica. Desarrollamos un sistema que cruza las ventas reales con el coste de cada plato para clasificarlos en cuatro categorías: estrellas, caballos de batalla, puzzles y perros. Con ese análisis el propietario sabe exactamente qué platos potenciar, cuáles retirar, cuáles subir de precio y cuáles necesitan un rediseño de receta.',
    result: 'Decisiones de carta basadas en datos, no en intuición',
    resultDetail: 'Un restaurante que aplica Menu Engineering tiene una ventaja competitiva real: cada cambio de carta está justificado con números. El margen medio de menú puede mejorar entre un 5% y un 15% con ajustes que el cliente ni nota.',
    tags: ['Menu Engineering', 'Control de costes', 'Escandallos', 'Hostelería', 'Rentabilidad'],
  },
  {
    slug: 'pyg-control-financiero',
    title: 'P&L: cuenta de resultados automatizada',
    client: 'Sector hostelería y servicios',
    sector: 'Control financiero',
    sectorIcon: '📈',
    shortDesc: 'Cuenta de pérdidas y ganancias mensual automática con análisis de desviaciones',
    longDesc:
      'La mayoría de pequeños negocios no saben si ganan o pierden dinero hasta que hablan con su gestor a final de año. Con un P&L bien construido y automatizado el propietario tiene cada mes una foto clara: ingresos reales, costes fijos, costes variables, EBITDA y resultado neto. Desarrollamos sistemas de P&L adaptados a cada negocio, con alertas de desviación y comparativa contra presupuesto.',
    result: 'Cuenta de resultados disponible antes del día 5 de cada mes',
    resultDetail: 'Sin esperar al gestor, sin consolidar Excel manualmente. El propietario tiene el P&L completo nada más cerrar el mes y puede tomar decisiones con datos frescos, no con información de hace 3 meses.',
    tags: ['P&L', 'Control financiero', 'Reporting', 'Automatización', 'Business Intelligence'],
  },
  {
    slug: 'facturacion-autonomos',
    title: 'Programa de facturación y presupuestos para autónomos',
    client: 'Autónomos y freelances',
    sector: 'Autónomo / Freelance',
    sectorIcon: '👤',
    shortDesc: 'Gestión completa de presupuestos, facturas y vencimientos de cobro',
    longDesc:
      'Herramienta desarrollada a medida para cubrir el ciclo completo de facturación de un autónomo: creación de presupuestos, conversión a facturas, control de vencimientos de cobro y alertas automáticas de impago. Sin suscripciones, sin nube, sin coste mensual. Todo funciona en local, es tuyo para siempre.',
    result: 'Control total del ciclo de facturación sin software externo',
    resultDetail: 'El autónomo tiene en un solo lugar todo el historial de presupuestos y facturas, sabe en todo momento qué cobros están pendientes y cuándo vencen, y genera documentos con formato profesional en segundos.',
    tags: ['Facturación', 'Presupuestos', 'Autónomos', 'Gestión financiera', 'Herramienta propia'],
  },
  {
    slug: 'pagina-web-personalizada',
    title: 'Página web profesional a medida',
    client: 'Sector servicios',
    sector: 'Presencia Digital',
    sectorIcon: '🌐',
    shortDesc: 'Web moderna, rápida y optimizada para captar clientes desde el primer día',
    longDesc:
      'Desarrollo de páginas web profesionales a medida para pequeñas empresas y autónomos que quieren una presencia digital real. Sin plantillas genéricas: diseño adaptado a la identidad del negocio, optimizada para móvil, con formulario de contacto inteligente que responde de forma automática y personalizada según el sector del visitante.',
    result: 'Web profesional operativa en menos de 2 semanas',
    resultDetail: 'El cliente tiene una web que representa su negocio de verdad, recibe consultas directamente por email con respuesta automática personalizada y aparece en Google desde el primer día.',
    tags: ['Next.js', 'Diseño web', 'SEO', 'Formulario inteligente', 'Presencia digital'],
  },
]
