# Portfolio de Jonathan Dajome

Portfolio personal desarrollado con React y TypeScript. Presenta información profesional, proyectos destacados, habilidades, enlaces de contacto y una navegación adaptable para dispositivos móviles y escritorio.

## Caracteristicas

- Hero con efecto de escritura animado
- Navegacion fija y menu responsivo
- Secciones de perfil, proyectos, habilidades y contacto
- Animaciones activadas al entrar en el area visible
- Boton flotante para volver al inicio
- Desplazamiento suave entre secciones
- Iconos mediante Lucide React
- Diseno responsivo con Tailwind CSS

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- Oxlint

## Requisitos

- Node.js 20 o superior
- pnpm

## Instalacion

Clona el repositorio y entra en el directorio del proyecto:

```bash
git clone https://github.com/jonni595/portfolio
cd portfolio
```

Instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

Abre la URL que muestra Vite en la terminal, normalmente `http://localhost:5173`.

## Scripts disponibles

| Comando        | Descripcion                                          |
| -------------- | ---------------------------------------------------- |
| `pnpm dev`     | Inicia el servidor de desarrollo                     |
| `pnpm build`   | Ejecuta TypeScript y genera la version de produccion |
| `pnpm lint`    | Ejecuta el analizador Oxlint                         |
| `pnpm preview` | Sirve localmente la compilacion de produccion        |

## Estructura del proyecto

```text
src/
├── App.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── ScrollToTop.tsx
│   └── Skills.tsx
├── data/
│   ├── contact.ts
│   ├── hero.ts
│   ├── projects.ts
│   └── skill.ts
├── hooks/
│   ├── useIntersectionObserver.ts
│   └── useScrollToTop.ts
└── types/
    └── models.ts
```

## Personalizacion

El contenido principal se encuentra en archivos separados dentro de `src/data`:

- `hero.ts`: nombre, descripcion, roles, estadisticas y enlaces sociales
- `projects.ts`: proyectos, tecnologias y enlaces
- `skill.ts`: categorias y habilidades
- `contact.ts`: enlaces de correo electronico, GitHub y LinkedIn

Los estilos globales se cargan desde `src/index.css`, mientras que el enrutamiento visual es por anclas dentro de la pagina principal.

## Compilacion

Para crear una version lista para desplegar:

```bash
pnpm build
```

Los archivos generados se colocan en el directorio `dist`.
