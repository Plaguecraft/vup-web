# Manual interno — Webs

Convenciones de equipo para armar páginas web. Valen para todo el proyecto: la skill `disenador-web` y cualquier otra que se sume después, además de cualquier trabajo que se haga en este entorno sin invocar una skill puntual. No son técnica de diseño ni de código — son **cómo trabajamos acá**.

> Este archivo arranca simple a propósito. Se va completando a medida que aparezcan formas de trabajo que valga la pena fijar. Cuando una decisión se repite dos veces, se anota acá.

## Cliente primero
- Cada web es de un **cliente**. Antes de diseñar o escribir código, revisar si existe una ficha en `.claude/skills/disenador-web/clientes/<cliente>.md`. Ahí vive la marca (colores, tipografías, logos), el brief y las decisiones ya tomadas. Si no existe, se crea antes de arrancar.
- **VUP es el primer cliente**, no un caso especial: su ficha vive en `clientes/vup.md` igual que la de cualquier otro.
- Nunca inventar colores, tipografías ni tono. Si un dato de marca falta en la ficha, preguntar — no improvisar.

## Cómo trabajamos
- **Paso a paso.** Primero se acuerda la estructura, después el diseño, después el código. No adelantar etapas ni entregar cosas que no se pidieron.
- Ante una duda que cambia el resultado (estructura, alcance, una decisión de marca), **preguntar**; no asumir.
- **Verificar mirando, no en teoría.** Antes de pushear un cambio visual, levantar la web local y sacar capturas a varios anchos reales (celu 360/390, tablet ~768, desktop ~1440) con el Chromium ya instalado en el entorno (Playwright: `executablePath` del chromium de `/opt/pw-browsers`). Más de una vez el CSS "parecía correcto" y recién en la captura se vio el problema (o se confirmó que ya estaba bien y lo que fallaba era la caché del cliente).
- **Caché al revisar en vivo.** Cuando se le pasa al cliente un link ya desplegado para que revise, avisarle siempre de entrada que haga *refresh fuerte* (Ctrl+Shift+R) o abra en incógnito. Pasó varias veces que veía la versión vieja y parecía que el cambio no se había aplicado, cuando en realidad ya estaba online.

## Deploy (GitHub Pages)
- La web se publica sola desde la rama `main`; cada merge a `main` actualiza el sitio en ~1 min. Los cambios van por Pull Request a `main`, no push directo.
- **Ojo al reusar la rama de trabajo después de un squash-merge:** el squash deja la rama con historial divergente del de `main` y el siguiente PR da "conflictos fantasma" aunque el contenido no choque. Solución: `git checkout -B <rama> origin/main` y `git cherry-pick <commit nuevo>`, después `push --force-with-lease`. Así el PR abre limpio.

## Mantenimiento del repo
- Cada vez que se avance (crear/modificar skills, sumar un cliente, cambiar estructura), dejar la ficha del cliente y este manual al día con lo que se decidió, así no se repite el trabajo la próxima vez.

---

Estas reglas complementan, no reemplazan, las de cada `SKILL.md`. Si un pedido puntual y explícito choca con algo de acá, gana el pedido puntual — pero por defecto se aplica esto.
