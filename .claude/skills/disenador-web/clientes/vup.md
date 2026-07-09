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
- Logo principal ya descargado del Drive → **`assets/logo-vup.png`** (96 KB, fondo transparente).
- Es un logo **neón**: "VUP" en blanco dentro de un marco violeta tipo pantalla de celular, bajada "Contenido para redes", con glow rosa/magenta. **Pensado para fondo oscuro** (las letras son blancas → no sirve sobre fondo claro).
- Es de **composición vertical (portrait)**: en un header horizontal queda angosto/pequeño. Pendiente: pedir/generar una versión horizontal (lockup) para el header, o un isologo compacto.
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

## Pendientes de la web
- Conseguir licencia web de Gotham (o elegir alternativa definitiva) y reemplazar Montserrat.
- Versión horizontal / isologo del logo para el header.
- Reemplazar textos placeholder por copy real y cargar imágenes/videos reales.
- Definir número de WhatsApp real para los CTA.
