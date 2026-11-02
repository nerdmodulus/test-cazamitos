# Cazamitos · NutriLab

Juego de preguntas sobre mitos alimentarios. Estático: solo HTML, CSS y JavaScript.

```
index.html
css/estilos.css
js/preguntas.js   ← el banco de 20 preguntas (esto es lo que se edita)
js/juego.js       ← la lógica del juego
assets/logo-ua.svg
```

## Publicar

Sube todo al repositorio respetando las carpetas y activa
**Settings → Pages → Branch: main / root**.

## Editar las preguntas

Todo está en `js/preguntas.js`. Copia un bloque y cámbialo:

```js
{
  origen: "estudiantes",
  tema: "Mitos y creencias",
  pregunta: "¿...?",
  alternativas: ["...", "...", "..."],
  correcta: 2,
  explicacion: "..."
}
```

- `correcta` es el número de la alternativa correcta: 1, 2 o 3.
- `origen` distingue lo redactado y validado por el Grupo 2 (`"estudiantes"`)
  de lo que se escribió como apoyo y **aún espera validación** (`"borrador"`).
- `tema` aparece como etiqueta sobre la pregunta. Si inventas uno nuevo, funciona igual.

No hay que tocar nada más: el juego cuenta las preguntas solo.

## Ajustes rápidos

Las tres primeras líneas de `js/juego.js`:

```js
const RONDA    = 10;  // preguntas por partida
const SEGUNDOS = 20;  // tiempo por pregunta
const BASE     = 100; // puntos por acierto
```

Con 20 preguntas en el banco y rondas de 10, dos partidas seguidas casi nunca
son iguales. Si agregan más preguntas, sube el banco y deja `RONDA` como está.

## Cómo puntúa

Acierto = 100 puntos + hasta 100 extra por rapidez, multiplicado por la racha
(×1,5 desde 2 aciertos seguidos; ×2 desde 4; ×3 desde 6). Un error corta la racha.
El récord queda guardado en el navegador de cada persona, no en un servidor.
