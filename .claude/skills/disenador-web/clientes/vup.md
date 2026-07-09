# VUP — Ficha de cliente

**Qué es:** VUP es una agencia de contenidos / social media.
**Rol en este proyecto:** primer cliente. Su propia web es el primer trabajo del equipo.

---

## Kit de marca

### Paleta de colores
| Color | Nombre | HEX |
|---|---|---|
| Magenta / rosa | — | `#E71D73` |
| Violeta / lila | — | `#9461A5` |
| Amarillo lima | — | `#DEDC00` |
| Verde | — | `#008D36` |

> Falta definir cuál es el color principal y cuáles los secundarios/acento, y qué colores neutros (fondos, textos) se usan. Definir al arrancar el diseño.

### Tipografía
Familia **Gotham**:
- Gotham Light
- Gotham Book
- Gotham Bold

> Pendiente: conseguir los archivos de la fuente (o su equivalente web) para poder usarla en la página. Gotham es de pago; si no hay licencia web, evaluar una alternativa parecida.

### Logos
- Logo principal ya descargado del Drive → **`assets/logo-vup.png`** (fondo transparente). **(2026-07-08)** se recortó el margen transparente sobrante (665×927 → 633×897, mismo contenido, solo se sacó aire vacío alrededor).
- Es un logo **neón**: "VUP" en blanco dentro de un marco violeta tipo pantalla de celular, bajada "Contenido para redes", con glow rosa/magenta. **Pensado para fondo oscuro** (las letras son blancas → no sirve sobre fondo claro).
- Es de **composición vertical (portrait)** con 3 elementos apilados (marco + "VUP" + bajada "Contenido para redes"): en el header/footer (40-54px de alto) el conjunto se ve ilegible — no es un problema de nitidez, es que a ese tamaño no entran los 3 elementos con claridad. Recortar el margen transparente ayuda poco; hace falta separar el marco+VUP de la bajada.
- **Pendiente — bloqueado, necesita material del cliente (2026-07-08):** para hacer una versión compacta (isologo) sin inventar nada, pedimos por Drive: (a) `estetica vup.pdf` (manual de marca) — puede que ya defina un isologo/versión compacta oficial; (b) el archivo **vectorial** original (AI/EPS/SVG) si existe, para ver si el marco+VUP y la bajada están en objetos/capas separadas y así exportar solo esa parte tal cual fue diseñada. El cliente explícitamente no quiere que se recorte/edite el logo por nuestra cuenta — solo usar piezas que ya vengan separadas en el archivo fuente.
- Origen en Drive: carpeta VUP → `12.REDES VUP` → `redes vup` → `LOGO.png`. También existen `logoAnimado.mp4` (logo animado, 6 MB) y `estetica vup.pdf` (manual de marca) si hacen falta.

---

## Brief de la web
> Pendiente de definir. Acá se anota: objetivo de la web, a quién le habla, qué secciones lleva, referencia de diseño, y cualquier decisión que se vaya tomando.

## Decisiones tomadas
- **Página de prueba (2026-07-08):** réplica de estructura de la referencia [cicheroia.com/mentoria](https://cicheroia.com/mentoria/) con marca VUP. Archivos: `index.html`, `css/styles.css`, `js/main.js`.
- **Tecnología:** HTML/CSS/JS puro (sin framework). Suficiente para una landing one-page.
- **Tema visual:** oscuro "neón" (fondo `#0e0a12`), elegido porque el logo es blanco con glow → necesita fondo oscuro. Se aparta del fondo claro de la referencia a favor de la identidad real de VUP.
- **Jerarquía de color (provisional):** magenta `#E71D73` = principal (botones, acentos, glow); violeta `#9461A5` = secundario. **El fondo neón usa solo magenta + violeta.** Lima `#DEDC00` = acento en destacados/números. Verde `#008D36` = **solo botones tipo WhatsApp** — el verde NO va en el fondo (rompe con la estética neón).
- **Fondo:** capa global fija animada (blobs magenta/violeta + logo VUP flotando sutil al ~5% de opacidad) detrás de toda la página.
- **Tipografía:** Montserrat (Google Fonts) como **sustituto temporal de Gotham** (Gotham es de pago; falta licencia web).
- **Imágenes/videos:** son recuadros placeholder a la espera de material real.

## Publicación (deploy)
- **Repositorio:** https://github.com/Plaguecraft/vup-web (público).
- **Web online (GitHub Pages):** https://plaguecraft.github.io/vup-web/ — se despliega automáticamente desde la rama `main`. Cada `push` actualiza el sitio en ~1 min. Por ahora es un link interno/de muestra.

## Retoques (2026-07-09)
- **Footer simplificado:** el footer tenía una segunda columna que repetía el CTA "¿Arrancamos? / Escribinos por WhatsApp" (ya está arriba, en su propia sección). Se sacó — el footer ahora es una sola columna centrada: logo + tagline + redes, divisor, y copyright abajo. Igual en mobile y desktop.
- **Franja negra al hacer scroll despacio (Android, sobre todo en el hero):** causada por el fondo global (`.site-bg`) en `position: fixed` — esa capa se compone aparte del resto de la página y en Android, con blur de por medio, a veces no llega a repintarse a tiempo durante scroll lento, y se ve negro un instante. Fix: en mobile (`max-width: 720px`) el fondo pasa a `position: absolute` (deja de ser una capa fija aparte y scrollea como el resto del contenido, sin repintado propio). Para que cubra todo el alto del documento y no solo el viewport, `body` pasa a `position: relative` en ese mismo breakpoint. En desktop el fondo sigue `fixed` (ahí no se vio el bug, se mantiene el efecto parallax).

## Pendientes de la web
- Conseguir licencia web de Gotham (o elegir alternativa definitiva) y reemplazar Montserrat.
- Versión horizontal / isologo del logo para el header.
- Reemplazar textos placeholder por copy real y cargar imágenes/videos reales.
- Definir número de WhatsApp real para los CTA.
