# AgrauData Portfolio — Briefing para Claude Code

## 🚀 Stack técnico
- **Framework**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS
- **Tipado**: TypeScript
- **Despliegue**: Vercel (conectado a GitHub)
- **Fuentes**: Google Fonts — Claude elige. Buscar algo moderno con personalidad (ej: Syne, Plus Jakarta Sans, DM Sans, Outfit). NUNCA Inter, Roboto ni Arial.
- **Animaciones**: Framer Motion para entradas y hover states

---

## 🎨 Identidad visual

**Concepto**: Consultora tecnológica humana. No es una empresa fría ni un portfolio artístico — es una persona experta que ayuda a empresas reales. Transmite confianza, claridad y energía.

**Paleta sugerida** (Claude puede ajustar pero respetar la dirección):
- Fondo claro (blanco roto o gris muy claro, no blanco puro)
- Un color principal vibrante como acento dominante: azul eléctrico, verde lima, naranja o similar — que llame la atención sin cansar
- Un segundo color de apoyo más neutro/cálido
- Texto en casi-negro (no negro puro), legible y limpio

**Tipografía**:
- Display/titulares: fuente expresiva, moderna, con carácter
- Cuerpo: fuente limpia y muy legible
- Nunca más de 2 familias

**Estética general**:
- Layouts con asimetría controlada, no cuadriculado genérico
- Uso de formas geométricas suaves como elementos decorativos (no iconos stock)
- Espaciado generoso — que respire
- Cards con sombras sutiles, bordes redondeados
- Hover states animados en proyectos y botones
- Humano y cercano pero profesional — como si una persona real lo hubiera diseñado con cuidado

**Lo que NO quiero**:
- Gradientes morados genéricos
- Estética dark/oscura tipo Vercel
- Plantilla corporativa fría
- Demasiado texto, secciones abarrotadas
- Lorem ipsum — usar siempre el contenido real de CONTENIDO.md

---

## 📐 Páginas y secciones

### Página principal (`/`)
1. **Navbar** — Logo "AgrauData" + navegación: Proyectos, Sobre mí, Contacto
2. **Hero** — Headline grande, subtítulo, botón CTA "Start a project" → sección contacto
3. **Proyectos** — Grid de 3 tarjetas con hover animado
4. **Sobre mí** — Layout dos columnas: texto + visual/ilustración placeholder
5. **Contacto** — Formulario + email directo
6. **Footer** — Simple, © AgrauData · 2025 + email

### Página de proyecto (`/proyectos/[slug]`)
- Imagen/banner, título, sector, descripción larga, tags, resultado clave

---

## 🧩 Componentes a crear

```
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── proyectos/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProjectsSection.tsx
│   ├── ProjectCard.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── data/
│   └── projects.ts
└── styles/
    └── globals.css
```

---

## ⚙️ Requisitos técnicos
- **Mobile-first**, totalmente responsive
- **SEO básico**: title, meta description, og:image por página
- Smooth scroll entre secciones
- Animaciones de entrada al hacer scroll (Framer Motion)
- Colores y tipografías como variables CSS / tokens Tailwind en globals.css
- Bundle ligero — sin dependencias innecesarias

---

## ✅ Orden de construcción recomendado
1. npx create-next-app@latest . --typescript --tailwind --app
2. npm install framer-motion
3. Definir tokens en globals.css (colores, fuentes, espaciados)
4. layout.tsx con fuentes y metadata global
5. Navbar.tsx
6. Hero.tsx
7. data/projects.ts con los 3 proyectos
8. ProjectCard.tsx + ProjectsSection.tsx
9. AboutSection.tsx
10. ContactSection.tsx con formulario
11. Footer.tsx
12. Página de detalle /proyectos/[slug]
13. Revisión responsive + animaciones finales

---

## 📄 Contenido
Todo el contenido real (textos, proyectos, datos) está en CONTENIDO.md. Leerlo antes de escribir cualquier texto en la web.
