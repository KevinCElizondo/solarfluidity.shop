# SolarFluidity.shop – Tienda Afiliada de Energía Solar

**SolarFluidity.shop** es una tienda afiliada especializada en productos de energía solar (paneles, kits, baterías, accesorios, cursos), enfocada principalmente en el mercado de Costa Rica con una visión de expansión hacia toda la región americana (Latinoamérica y Norteamérica).

Nuestra misión es promover la adopción de energías renovables ofreciendo información de valor y una selección curada de productos a través del programa de Afiliados de Amazon, asegurando una experiencia de usuario fluida y transparente.

## 1. Tecnologías Utilizadas

*   **Front-end**: (Por definir - Se sugiere React, Vue, Next.js o similar con HTML5, CSS3, JavaScript)
*   **Back-end**: (Por definir - Necesario para gestión de contenido y enlaces de afiliado, podría ser Node.js, Python/Django/Flask, o un CMS Headless)
*   **Integración Principal**: Programa de Afiliados de Amazon.
*   **Librerías Adicionales**: (Por definir - Ej. para SEO, sliders, manejo de estado, etc.)

## 2. Estructura de Carpetas (Propuesta Inicial)

```
/
├── public/             # Archivos estáticos (imágenes, fuentes, etc.)
├── src/                # Código fuente principal
│   ├── components/     # Componentes reutilizables (UI)
│   ├── pages/          # Páginas/Vistas de la aplicación
│   ├── styles/         # Archivos de estilos (CSS, SCSS, etc.)
│   ├── lib/            # Funciones de utilidad, integración API
│   ├── data/           # Datos estáticos (ej. info de productos inicial)
│   └── App.js/tsx      # Componente raíz o entrada principal
├── blog/               # Contenido del blog (ej. archivos Markdown si se usa SSG)
├── config/             # Archivos de configuración
├── .env.example        # Ejemplo de variables de entorno
├── .gitignore          # Archivos/carpetas a ignorar por Git
├── package.json        # Dependencias y scripts del proyecto (si aplica Node.js)
└── README.md           # Este archivo
```
*(Esta estructura es una sugerencia y puede variar según el framework elegido)*

## 3. Requisitos de Sistema e Instalación

*   **Node.js**: (Especificar versión, ej. v18.x o superior)
*   **npm/yarn**: Gestor de paquetes.
*   **Git**: Para control de versiones.

**Pasos de Instalación:**

1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/KevinCElizondo/solarfluidity.shop.git
    cd solarfluidity.shop
    ```
2.  Instalar dependencias (ejemplo con npm):
    ```bash
    npm install
    ```
    *(Ajustar según el gestor de paquetes elegido)*

## 4. Configuración de Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto (basado en `.env.example` si existe) con las siguientes variables:

```env
# ID de Afiliado de Amazon
AMAZON_ASSOCIATE_TAG=1405250224061-20

# URL base del sitio en producción (ej. https://solarfluidity.shop)
BASE_URL=http://localhost:3000

# Otras variables necesarias (ej. claves API, configuración de base de datos si aplica)
# API_KEY_EXAMPLE=your_api_key
```

**Importante**: Asegúrate de añadir el archivo `.env` a tu `.gitignore` para no subir información sensible al repositorio público.

## 5. Cómo Ejecutar el Proyecto

*   **Modo Desarrollo** (ejemplo con npm):
    ```bash
    npm run dev
    ```
    Acceder localmente en `http://localhost:3000` (o el puerto configurado).

*   **Modo Producción (Build)** (ejemplo con npm):
    ```bash
    npm run build
    # Luego, ejecutar el servidor de producción (depende del framework)
    # npm start
    ```

## 6. Integración con Amazon Afiliados

*   Todos los enlaces de productos que dirijan a Amazon deben incluir el tag de afiliado configurado en la variable de entorno `AMAZON_ASSOCIATE_TAG`. Ejemplo: `https://www.amazon.com/dp/PRODUCT_ASIN/?tag=1405250224061-20`.
*   Es **obligatorio** incluir una **declaración de afiliación** visible en el sitio (generalmente en el footer y/o sección "Sobre Nosotros"), cumpliendo las políticas del Programa de Afiliados de Amazon. Ejemplo:
    > "En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables."
*   **Políticas Clave a Seguir**:
    *   No ocultar que se trata de enlaces de afiliado.
    *   No mostrar precios directamente de forma que puedan quedar desactualizados (Amazon prohíbe el scraping directo de precios en muchos casos; usar la API si es posible o enlazar directamente).
    *   No usar acortadores de enlaces que oculten el dominio de Amazon.
    *   No realizar afirmaciones engañosas sobre los productos.
    *   Consultar siempre las [Políticas del Programa de Afiliados de Amazon](https://afiliados.amazon.es/help/operating/policies) (o la versión correspondiente a tu región).

## 7. Despliegue en Producción

*   **Plataformas Recomendadas**: Vercel, Netlify (ideales para front-ends modernos), Heroku, AWS, Google Cloud (si se requiere un back-end más complejo).
*   **Pasos Generales**:
    1.  Configurar las variables de entorno en la plataforma de hosting.
    2.  Conectar el repositorio de GitHub para despliegues automáticos (CI/CD).
    3.  Ejecutar el comando de build (`npm run build`).
    4.  Configurar el dominio personalizado (`solarfluidity.shop`).
    5.  Asegurar HTTPS.

## 8. Contribuciones y Licencia

*   **Contribuciones**: Actualmente, el proyecto es gestionado por [KevinCElizondo](https://github.com/KevinCElizondo). Si deseas contribuir, por favor abre un "Issue" para discutir los cambios propuestos o contacta al autor.
*   **Licencia**: (Por definir - Ej. MIT License).

## 9. Contacto / Autor

*   **Autor**: Kevin Cordero Elizondo
*   **GitHub**: [KevinCElizondo](https://github.com/KevinCElizondo)
*   **Contacto**: (Añadir email o enlace a formulario de contacto del sitio una vez esté disponible).

---

Este README proporciona una guía inicial. Se actualizará a medida que el proyecto evolucione.
