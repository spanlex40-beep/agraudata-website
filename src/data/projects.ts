export interface Project {
  slug: string
  title: string
  client: string
  sector: string
  shortDesc: string
  longDesc: string
  result: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'control-financiero',
    title: 'Sistema de control financiero y reporting automático',
    client: 'Proyecto propio',
    sector: 'Business Intelligence',
    shortDesc: 'Dashboard completo de control de ventas, costes y rentabilidad',
    longDesc:
      'Desarrollo de un sistema de control financiero que integra datos de ventas, costes y operaciones para ofrecer una visión clara del negocio en tiempo real. Automatización de reporting mensual y análisis de desviaciones.',
    result: 'Reducción del tiempo de reporting en más del 70%',
    tags: ['Power BI', 'Excel avanzado', 'Automatización', 'Análisis financiero'],
  },
  {
    slug: 'planificacion-personal',
    title: 'Sistema de planificación de personal y vacaciones',
    client: 'Proyecto propio',
    sector: 'Recursos Humanos',
    shortDesc: 'Herramienta para gestionar cuadrantes, vacaciones y recursos',
    longDesc:
      'Diseño de una herramienta interna para la planificación de personal, gestión de vacaciones y control de recursos. Permite visualizar disponibilidad, evitar conflictos y optimizar la planificación operativa.',
    result: 'Mejora en la organización del equipo y reducción de errores manuales',
    tags: ['Excel VBA', 'Automatización', 'Gestión de recursos'],
  },
  {
    slug: 'automatizacion-administrativa',
    title: 'Automatización de procesos administrativos',
    client: 'Proyecto conceptual',
    sector: 'Consultoría / Asesoría',
    shortDesc: 'Automatización de tareas repetitivas y procesos internos',
    longDesc:
      'Implementación de sistemas para automatizar procesos administrativos como gestión de documentos, seguimiento de clientes y respuestas automáticas. Integración de herramientas para reducir carga manual.',
    result: 'Ahorro de tiempo operativo y reducción de errores',
    tags: ['Automatización', 'Procesos', 'Integración de sistemas'],
  },
]
