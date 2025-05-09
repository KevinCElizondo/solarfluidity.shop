# SolarFluidity.shop – Tienda Afiliada de Energía Solar (Next.js)

**SolarFluidity.shop** es una tienda afiliada especializada en productos de energía solar (paneles, kits, baterías, accesorios, cursos), enfocada principalmente en el mercado de Costa Rica con una visión de expansión hacia toda la región americana (Latinoamérica y Norteamérica).

Nuestra misión es promover la adopción de energías renovables ofreciendo información de valor y una selección curada de productos a través del programa de Afiliados de Amazon, asegurando una experiencia de usuario fluida y transparente.

Este proyecto está construido con [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), y [Tailwind CSS](https://tailwindcss.com/).

## 1. Getting Started

El proyecto Next.js se encuentra dentro del directorio `app/`.

Primero, navega al directorio `app` e instala las dependencias:

```bash
cd app
npm install
# or
# yarn install
# or
# pnpm install
```

Luego, desde el directorio `app/`, ejecuta el servidor de desarrollo:

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes empezar a editar la página principal modificando `app/app/page.tsx`. La página se actualiza automáticamente mientras editas el archivo.

Este proyecto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar e incluir fuentes personalizadas automáticamente.

## 2. Tecnologías Utilizadas

*   **Framework**: Next.js (App Router)
*   **Lenguaje**: TypeScript
*   **UI**: React
*   **Estilos**: Tailwind CSS
*   **Linting**: ESLint
*   **Integración Principal**: Programa de Afiliados de Amazon.

## 3. Estructura de Carpetas (Actual)

La estructura principal del proyecto `solarfluidity.shop` es:
```
/solarfluidity.shop
├── app/                # Directorio del proyecto Next.js
│   ├── app/            # Rutas y layouts (App Router)
│   │   ├── layout.tsx
│   │   ├── page.tsx    # Página de inicio (Home)
│   │   ├── product/
│   │   │   └── [slug]/
│   │   │       └── page.tsx # Página de detalle de producto
│   │   └── category/
│   │       └── [slug]/
│   │           └── page.tsx # Página de categoría
│   ├── components/     # Componentes reutilizables (UI)
│   ├── public/         # Archivos estáticos (imágenes, favicons, etc.)
│   ├── .env.local      # Variables de entorno locales (¡No subir a Git!)
│   ├── .gitignore      # Archivos ignorados por Git específicos de la app Next.js
│   ├── next.config.ts  # Configuración de Next.js
│   ├── package.json    # Dependencias y scripts del proyecto Next.js
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts
│   └── tsconfig.json
├── data/               # Datos estáticos (ej. info de productos)
│   └── products.ts
├── types/              # Definiciones de TypeScript
│   └── product.ts
├── .gitignore          # Archivos/carpetas a ignorar por Git (nivel raíz del proyecto)
└── README.md           # Este archivo
```

## 4. Configuración de Variables de Entorno

Crear un archivo `.env.local` en la raíz del proyecto (basado en `.env.example` si se crea) con las siguientes variables:

```env
# ID de Afiliado de Amazon
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG="1405250224061-20"

# URL base del sitio en producción (ej. https://solarfluidity.shop)
# NEXT_PUBLIC_BASE_URL="https://solarfluidity.shop"

# Otras variables necesarias (ej. claves API)
# API_KEY_EXAMPLE="your_api_key"
```
*Nota: Las variables que necesitan ser expuestas al navegador deben empezar con `NEXT_PUBLIC_`.*

**Importante**: Asegúrate de que `.env.local` esté incluido en tu `.gitignore` (ya debería estarlo por la configuración inicial).

## 5. Integración con Amazon Afiliados

*   Todos los enlaces de productos que dirijan a Amazon deben incluir el tag de afiliado configurado en la variable de entorno `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG`. Ejemplo: `https://www.amazon.com/dp/PRODUCT_ASIN/?tag=${process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG}`.
*   Es **obligatorio** incluir una **declaración de afiliación** visible en el sitio. Esta ya ha sido añadida al pie de página (footer):
    > "© {Año Actual} Solar Fluidity Shop. Todos los derechos reservados. En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables."
    Asegúrate de que esta declaración (o una similar aprobada por Amazon) esté siempre visible para los usuarios.
*   **Políticas Clave a Seguir**:
    *   No ocultar que se trata de enlaces de afiliado.
    *   No mostrar precios directamente de forma que puedan quedar desactualizados (Amazon prohíbe el scraping directo de precios en muchos casos; usar la API si es posible o enlazar directamente).
    *   No usar acortadores de enlaces que oculten el dominio de Amazon.
    *   No realizar afirmaciones engañosas sobre los productos.
    *   Consultar siempre las [Políticas del Programa de Afiliados de Amazon](https://afiliados.amazon.es/help/operating/policies) (o la versión correspondiente a tu región).

## 6. Despliegue en Producción

*   **Plataformas Recomendadas**: **Vercel** (creadores de Next.js, integración perfecta) o **Netlify**. Ambas ofrecen excelentes planes gratuitos para empezar y se integran directamente con GitHub para CI/CD.
*   **Pasos Generales (con Vercel/Netlify)**:
    1.  Haz push de tu código a GitHub.
    2.  Crea una cuenta en Vercel/Netlify y conecta tu repositorio de GitHub.
    3.  La plataforma detectará que es un proyecto Next.js y configurará los comandos de build (`npm run build`) y el directorio de salida automáticamente.
    4.  Configura las variables de entorno (como `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG`) en el dashboard de Vercel/Netlify.
    5.  La plataforma desplegará tu sitio y te dará una URL (ej. `solarfluidity.vercel.app`).
    6.  **Conectar Dominio (Hostinger)**:
        *   En Vercel/Netlify, añade tu dominio personalizado (`solarfluidity.shop`).
        *   La plataforma te indicará los registros DNS (generalmente un registro `A` y/o `CNAME`) que debes configurar en tu panel de DNS de Hostinger.
        *   Actualiza los DNS en Hostinger para que apunten a Vercel/Netlify.
        *   Espera la propagación de DNS (puede tardar unos minutos u horas).
    7.  Vercel/Netlify gestionará automáticamente los certificados SSL (HTTPS).

*   **Despliegue en Hostinger (Opción Alternativa)**: Si prefieres usar Hostinger directamente (requiere un plan que soporte Node.js o un VPS):
    1.  Configura un workflow de GitHub Actions para hacer build (`npm run build`) y copiar los archivos (`.next`, `public`, `package.json`, `node_modules`, etc.) a tu servidor Hostinger vía SSH/SFTP tras cada push a `main`.
    2.  En el servidor Hostinger, usa un gestor de procesos como `pm2` para ejecutar `npm start`.
    3.  Configura las DNS en Hostinger para apuntar el dominio a la IP de tu servidor/VPS.
    4.  Gestiona el SSL (Hostinger puede ofrecerlo o puedes usar Let's Encrypt).

## 7. Contribuciones y Licencia

*   **Contribuciones**: Actualmente, el proyecto es gestionado por [KevinCElizondo](https://github.com/KevinCElizondo). Si deseas contribuir, por favor abre un "Issue" para discutir los cambios propuestos o contacta al autor.
*   **Licencia**: (Por definir - Se sugiere MIT License).

## 8. Contacto / Autor

*   **Autor**: Kevin Cordero Elizondo
*   **GitHub**: [KevinCElizondo](https://github.com/KevinCElizondo)
*   **Contacto**: (Añadir email o enlace a formulario de contacto del sitio una vez esté disponible).

---

Este README proporciona una guía inicial específica para el proyecto Next.js. Se actualizará a medida que el proyecto evolucione.
