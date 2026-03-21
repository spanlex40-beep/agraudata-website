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
    shortDesc: 'Gestión completa de presupuestos, facturas y vencimientos de pago',
    longDesc:
      'Herramienta desarrollada a medida para cubrir el ciclo completo de facturación de un autónomo: creación de presupuestos, conversión a facturas, control de vencimientos de cobro y alertas automáticas de impago. Sin suscripciones, sin nube, sin coste mensual. Todo funciona en local con un solo archivo.',
    result: 'Control total del ciclo de facturación sin software externo',
    resultDetail: 'El autónomo tiene en un solo lugar todo el historial de presupuestos y facturas, sabe en todo momento qué cobros están pendientes y cuándo vencen, y genera documentos con formato profesional en segundos.',
    tags: ['Facturación', 'Presupuestos', 'Autónomos', 'Gestión financiera', 'Herramienta propia'],
  },
  {
    slug: 'cuadrante-personal',
    title: 'Programa de cuadrantes de personal',
    client: 'Desarrollo propio',
    sector: 'Hostelería / RRHH',
    sectorIcon: '🍽️',
    shortDesc: 'Gestión visual de turnos, vacaciones y disponibilidad del equipo',
    longDesc:
      'Herramienta desarrollada a medida para la planificación de cuadrantes de personal. Permite asignar turnos, gestionar vacaciones, controlar horas por empleado y detectar conflictos de disponibilidad de forma visual. Diseñada para negocios con equipos variables como restaurantes, hoteles o clínicas. En proceso de migración a aplicación de escritorio.',
    result: 'Cuadrantes semanales en minutos en lugar de horas',
    resultDetail: 'El responsable ve de un vistazo quién trabaja cada día, cuántas horas lleva cada empleado y dónde hay huecos. Sin errores, sin olvidos. Próximamente disponible como app de escritorio.',
    tags: ['RRHH', 'Hostelería', 'Planificación de personal', 'Turnos', 'Herramienta propia'],
  },
  {
    slug: 'pagina-web-personalizada',
    title: 'Página web profesional a medida',
    client: 'Sector servicios',
    sector: 'Presencia Digital',
    sectorIcon: '🌐',
    shortDesc: 'Web moderna, rápida y optimizada para captar clientes desde el primer día',
    longDesc:
      'Desarrollo de páginas web profesionales a medida para pequeñas empresas y autónomos que quieren una presencia digital real. Sin plantillas genéricas: diseño adaptado a la identidad del negocio, optimizada para móvil, con formulario de contacto inteligente y velocidad de carga máxima. Incluye dominio, hosting y configuración completa.',
    result: 'Web profesional operativa en menos de 2 semanas',
    resultDetail: 'El cliente tiene una web que representa su negocio de verdad, recibe consultas directamente por email con respuesta automática personalizada y aparece en Google desde el primer día.',
    tags: ['Next.js', 'Diseño web', 'SEO', 'Formulario inteligente', 'Presencia digital'],
  },
  {
    slug: 'presupuesto-gastos-personal',
    title: 'Control de presupuesto y gastos personales',
    client: 'Desarrollo propio',
    sector: 'Finanzas personales',
    sectorIcon: '💰',
    shortDesc: 'Dashboard de ingresos, gastos, categorías y ahorro mensual',
    longDesc:
      'Herramienta desarrollada a medida para tener el control total de las finanzas personales: registro de ingresos y gastos por categorías, seguimiento del presupuesto mensual, evolución del ahorro y alertas cuando se supera lo planificado. Visual, rápida y sin necesidad de apps externas ni suscripciones.',
    result: 'Control real del dinero mes a mes',
    resultDetail: 'El usuario sabe exactamente en qué gasta, cuánto ahorra y si va bien o mal respecto a su presupuesto. Tomar decisiones financieras deja de ser una estimación para convertirse en algo basado en datos reales.',
    tags: ['Finanzas personales', 'Presupuesto', 'Control de gastos', 'Ahorro', 'Herramienta propia'],
  },
]
