# RutaU – Landing Page

Landing Page de RutaU (HTML5 + CSS3 + JavaScript puro, sin frameworks).

Integrantes:
* Adrián Mesías Huatuco (u202421946)
* Jhoyner Arnold Calampa Bardales (u202117290)
* Cristian Marcelo Magallanes Arias (u202423870)
* Omar Estefano Gonzales Rios (u202423014)

## Estructura
```
landing/
├─ index.html          Página principal
├─ terminos.html       Términos de Servicio y Política de privacidad
├─ css/
│  ├─ variables.css    Style Guide v2 (--primary, --secondary, tipografías…)
│  ├─ base.css         Reset, accesibilidad (foco, skip-link, sr-only)
│  ├─ layout.css       Header, secciones, footer
│  ├─ components.css   Botones, tarjetas, FAQ, etc.
│  └─ responsive.css   Tablet y móvil
├─ js/
│  ├─ config.js        APP_URL de la Web App, idioma por defecto
│  ├─ i18n.js          Cambio de idioma es_419 / en_US
│  ├─ main.js          Enlaces a la Web App
│  ├─ nav.js           Menú móvil y enlace activo
│  └─ faq.js           Acordeón de preguntas frecuentes
├─ i18n/
│  ├─ es_419.js        Textos en español
│  └─ en_US.js         Textos en inglés
└─ assets/             logo.svg, favicon.svg
```

## Cómo verlo
Abre `index.html` con doble clic (no necesita servidor). En VS Code también sirve la extensión Live Server.

## Conectar con la Web App
Cuando la Web App esté desplegada, cambia `APP_URL` en `js/config.js`.

## Accesibilidad
Enlace "Saltar al contenido", landmarks, `aria-expanded`/`aria-controls` en menú y FAQ, `aria-pressed` en el selector de idioma, región `aria-live` al cambiar de idioma, foco visible y `prefers-reduced-motion`.
