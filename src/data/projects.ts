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
    slug: 'facturacion-autonomos',
    title: 'Programa de facturación y presupuestos para autónomos',
    client: 'Desarrollo propio',
    sector: 'Autónomo / Freelance',
    sectorIcon: '👤',
    shortDesc: 'Gestión completa de presupuestos, facturas y vencimientos de pago en Excel',
    longDesc:
      'Programa desarrollado íntegramente en Excel con VBA para cubrir el ciclo completo de facturación de un autónomo: creación de presupuestos, conversión a facturas, control de vencimientos de cobro y alertas automáticas de impago. Sin suscripciones, sin nube, sin coste mensual. Todo funciona en local con un solo archivo.',
    result: 'Control total del ciclo de facturación sin software externo',
    resultDetail: 'El autónomo tiene en un solo archivo todo el historial de presupuestos y facturas, sabe en todo momento qué cobros están pendientes y cuándo vencen, y genera documentos con formato profesional en segundos.',
    tags: ['Excel VBA', 'Macros', 'Facturación', 'Autónomos', 'Gestión financiera'],
  },
  {
    slug: 'cuadrante-personal',
    title: 'Programa de cuadrantes de personal en Excel',
    client: 'Desarrollo propio',
    sector: 'Hostelería / RRHH',
    sectorIcon: '🍽️',
    shortDesc: 'Gestión visual de turnos, vacaciones y disponibilidad del equipo',
    longDesc:
      'Herramienta desarrollada en Excel con VBA para la planificación de cuadrantes de personal. Permite asignar turnos, gestionar vacaciones, controlar horas por empleado y detectar conflictos de disponibilidad de forma visual. Diseñada para negocios con equipos variables como restaurantes, hoteles o clínicas. Próximamente disponible como aplicación de escritorio.',
    result: 'Cuadrantes semanales en minutos en lugar de horas',
    resultDetail: 'Elimina el Excel manual de turno por turno. El responsable ve de un vistazo quién trabaja cada día, cuántas horas lleva cada empleado y dónde hay huecos. Sin errores, sin olvidos.',
    tags: ['Excel VBA', 'Macros', 'RRHH', 'Hostelería', 'Planificación de personal'],
  },
  {
    slug: 'control-financiero',
    title: 'Dashboard de control financiero y reporting automático',
    client: 'Proyecto propio',
    sector: 'Business Intelligence',
    sectorIcon: '📊',
    shortDesc: 'Dashboard de ventas, costes y rentabilidad con cierre mensual automatizado',
    longDesc:
      'Sistema de control financiero que integra datos de ventas, costes y operaciones para ofrecer una visión clara del negocio en tiempo real. El cierre mensual, que antes requería días de trabajo manual en Excel, se genera automáticamente con un solo clic. Incluye análisis de desviaciones, márgenes por categoría y previsión de tesorería.',
    result: 'Reducción del tiempo de reporting en más del 70%',
    resultDetail: 'Lo que antes era 2-3 días de trabajo manual consolidando datos ahora es un informe automático disponible cada mañana. Más tiempo para el negocio, menos tiempo delante del Excel.',
    tags: ['Power BI', 'Excel VBA', 'SQL', 'Automatización', 'Control financiero'],
  },
]
