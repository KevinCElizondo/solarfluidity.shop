# SolarFluidity.shop – Tienda Afiliada de Energía Solar

**SolarFluidity.shop** es una tienda afiliada especializada en productos de energía solar (paneles, kits, baterías, accesorios, cursos), enfocada principalmente en el mercado de Costa Rica con una visión de expansión hacia toda la región americana (Latinoamérica y Norteamérica).

## 📚 Contenido

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Estructura del Sitio](#estructura-del-sitio)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Integración de Hostinger y GitHub](#integración-de-hostinger-y-github)
5. [Automatización y CI/CD](#automatización-y-cicd)
6. [Requisitos para Desarrollo Local](#requisitos-para-desarrollo-local)
7. [Instrucciones de Despliegue](#instrucciones-de-despliegue)

## Descripción del Proyecto

SolarFluidity.shop es una tienda afiliada dedicada a la promoción y venta de productos relacionados con energía solar, incluyendo paneles solares, kits completos, baterías, inversores, accesorios y cursos educativos. El sitio está optimizado para SEO y diseñado para proporcionar información valiosa sobre energía renovable.

## Estructura del Sitio

- **Inicio**: Presentación de la tienda y productos destacados
- **Categorías**: Organización de productos por tipos
- **Productos Individuales**: Páginas detalladas con enlaces de afiliado
- **Blog**: Artículos informativos sobre energía solar
- **Sobre Nosotros**: Información sobre la misión y visión
- **Contacto**: Formulario y datos de contacto

## Tecnologías Utilizadas

- **Frontend**: Next.js (React) con TypeScript y Tailwind CSS
- **Backend**: API FastAPI (Python) con LangGraph y Pydantic
- **Contenedorización**: Docker y Docker Compose
- **CI/CD**: GitHub Actions para despliegue automático
- **Hosting**: Netlify/Vercel para frontend con dominio en Hostinger

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Integración de Hostinger y GitHub

El proyecto utiliza GitHub como repositorio principal y Hostinger para la gestión del dominio. La integración se realiza mediante:

1. Configuración de DNS en Hostinger apuntando a la plataforma de despliegue (Netlify/Vercel)
2. Automatización de despliegues con GitHub Actions
3. API de Python para la sincronización y gestión

## Automatización y CI/CD

Se implementa un sistema de integración y despliegue continuo mediante:

- GitHub Actions para la compilación y despliegue automático
- Agentes Python basados en LangGraph para monitoreo y mantenimiento
- Docker para la estandarización del entorno de desarrollo

## Requisitos para Desarrollo Local

- Node.js 18.x o superior
- Python 3.10 o superior
- Docker y Docker Compose
- Git

## Instrucciones de Despliegue

### Despliegue Manual

```bash
# Construcción del proyecto
npm run build

# Despliegue a través de la API de Python
python sync.py
```

### Despliegue Automático

Cada push a la rama `main` activa el workflow de GitHub Actions que realiza:
1. Compilación del proyecto Next.js
2. Ejecución de pruebas
3. Despliegue automático a Netlify/Vercel
4. Sincronización con Hostinger mediante la API

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel/Netlify

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js or [Netlify](https://www.netlify.com/). Both platforms integrate seamlessly with GitHub.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
