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
    slug: 'control-financiero',
    title: 'Control de márgenes y escandallos para restaurante',
    client: 'Restaurante (datos anonimizados)',
    sector: 'Hostelería',
    sectorIcon: '🍽️',
    shortDesc: 'Dashboard de costes, ventas y rentabilidad por plato en tiempo real',
    longDesc:
      'Un restaurante con buena facturación pero sin control real de sus márgenes. El propietario no sabía qué platos ganaban dinero y cuáles lo perdían. Construimos un sistema de escandallos conectado a las ventas reales, con un dashboard que muestra en tiempo real el margen por plato, familia y turno. El cierre mensual pasó de ser un trabajo de 2 días en Excel a un informe automático disponible cada mañana.',
    result: 'Margen bruto mejorado un 8% en 2 meses',
    resultDetail: '3 platos estrella resultaron ser deficitarios. Con el dato claro, el propietario ajustó precios y recetas. El ahorro anual estimado superó los 18.000€.',
    tags: ['Power BI', 'Excel VBA', 'Escandallos', 'Control de costes', 'Hostelería'],
  },
  {
    slug: 'planificacion-personal',
    title: 'Automatización de reporting mensual para asesoría',
    client: 'Asesoría (datos anonimizados)',
    sector: 'Asesoría / Gestoría',
    sectorIcon: '📁',
    shortDesc: 'De 3 días de trabajo manual a un informe automático en 4 horas',
    longDesc:
      'Una asesoría con 3 personas dedicaba entre 2 y 3 días cada mes a consolidar datos de clientes, preparar informes y cuadrar números en Excel. El proceso era repetitivo, propenso a errores y robaba tiempo que podría dedicarse a los clientes. Automatizamos la extracción, consolidación y generación de informes. Ahora el sistema lo hace solo, el equipo lo revisa en 4 horas y lo envía.',
    result: 'De 3 días a 4 horas de trabajo mensual',
    resultDetail: 'El equipo recuperó más de 40 horas al mes. Sin errores de consolidación manual. Los clientes reciben sus informes antes y con mejor presentación.',
    tags: ['Python', 'SQL', 'Excel VBA', 'Automatización', 'Reporting'],
  },
  {
    slug: 'automatizacion-administrativa',
    title: 'Dashboard financiero personal para autónomo',
    client: 'Autónomo (datos anonimizados)',
    sector: 'Autónomo / Freelance',
    sectorIcon: '👤',
    shortDesc: 'Control total de ingresos, gastos, impuestos y previsión de tesorería',
    longDesc:
      'Un profesional autónomo con buenos ingresos pero sin claridad sobre su situación financiera real. No sabía cuánto dinero era "suyo" después de impuestos, cuánto tenía que reservar para la Seguridad Social ni si podía permitirse una inversión. Construimos un dashboard conectado a sus datos reales: ingresos por cliente, gastos deducibles, retenciones, previsión de IVA e IRPF y saldo disponible real.',
    result: 'Primera vez con control financiero real',
    resultDetail: 'Detectó que estaba infravalorando sus servicios en un 20%. Con la previsión clara, tomó decisiones de inversión con seguridad y dejó de acumular sorpresas fiscales.',
    tags: ['Google Sheets', 'Excel', 'Automatización', 'Finanzas personales', 'Autónomos'],
  },
]
