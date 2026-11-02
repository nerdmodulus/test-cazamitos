/* ═══════════════════════════════════════════════════════════════════
   CAZAMITOS · Banco de preguntas
   NutriLab · Universidad Autónoma de Chile + Liceo 7 de Providencia

   Cada pregunta lleva un campo "origen":
     "estudiantes" → redactada y validada por el Grupo 2
     "borrador"    → redactada como apoyo. PENDIENTE de validación
                     por Nutrición y Dietética antes de publicar.

   Para agregar una pregunta nueva, copia un bloque y cámbialo.
   "correcta" es el número de la alternativa correcta: 1, 2 o 3.
   ═══════════════════════════════════════════════════════════════════ */

const PREGUNTAS = [

/* ──────── Preguntas del Grupo 2 ──────── */
{
  origen: "estudiantes",
  tema: "Mitos y creencias",
  pregunta: "¿Comer antes de nadar te da calambre?",
  alternativas: [
    "No da calambres, pero si comes mucho, puede generar torsión estomacal.",
    "Sí da calambres, porque tu cuerpo envía todas sus fuerzas para digerir la comida.",
    "No da calambres, ya que el sistema digestivo funciona aparte, mientras el muscular puede seguir trabajando."
  ],
  correcta: 3,
  explicacion: "La digestión desvía algo de sangre al estómago, pero no tanta como para quitarle al músculo lo que necesita. Comer mucho puede dar malestar, no calambres."
},
{
  origen: "estudiantes",
  tema: "Mitos y creencias",
  pregunta: "¿Comer chocolate en la noche hace que no tengas un buen sueño?",
  alternativas: [
    "El chocolate genera melatonina, haciendo que el ciclo de sueño se vea disminuido.",
    "El chocolate relaja los músculos, facilitando la conciliación del sueño.",
    "El chocolate puede dificultar la conciliación del sueño y dar ganas de orinar."
  ],
  correcta: 3,
  explicacion: "El chocolate tiene cafeína y teobromina, estimulantes que pueden retrasar el sueño y tienen un leve efecto diurético. El amargo tiene más."
},
{
  origen: "estudiantes",
  tema: "Mitos y creencias",
  pregunta: "¿Comer arroz engorda?",
  alternativas: [
    "El arroz, al ser un carbohidrato, genera hinchazón, generando ilusión de gordura.",
    "No se puede definir como un alimento que engorda o no.",
    "El arroz no engorda si es consumido en la porción recomendada."
  ],
  correcta: 2,
  explicacion: "Ningún alimento engorda por sí solo: lo que pesa es el total de lo que comes en el día y cuánto te mueves."
},
{
  origen: "estudiantes",
  tema: "Mitos y creencias",
  pregunta: "¿Si no tomo desayuno, tendré diabetes?",
  alternativas: [
    "No tomar desayuno causa una baja de azúcar, por lo que causa una hipoglicemia reactiva.",
    "No causa diabetes por sí sola, pero el hábito constante puede ayudar a desarrollarla.",
    "No, saltarse el desayuno no afecta al organismo si lo compensas con un almuerzo adecuado."
  ],
  correcta: 2,
  explicacion: "Saltarse el desayuno no causa diabetes. Algunos estudios lo asocian a mayor riesgo cuando es un hábito, junto con dieta y sedentarismo."
},

/* ──────── Preguntas del Grupo 2, alternativas en borrador ──────── */
{
  origen: "borrador",
  tema: "Mitos y creencias",
  pregunta: "¿El zapallo hace crecer las piernas?",
  alternativas: [
    "Sí, su alto contenido de vitamina A estimula el crecimiento óseo.",
    "No: la estatura y la forma del cuerpo dependen de la genética y del crecimiento general.",
    "Solo si se come crudo, porque conserva las enzimas del crecimiento."
  ],
  correcta: 2,
  explicacion: "Ningún alimento hace crecer una parte del cuerpo en particular. El zapallo es nutritivo, pero no decide cómo crecen tus piernas."
},
{
  origen: "borrador",
  tema: "Alimentación escolar",
  pregunta: "¿Comer alimentos sin lavar hace que obtenga parásitos?",
  alternativas: [
    "Puede pasar: frutas y verduras mal lavadas pueden traer huevos de parásitos o bacterias.",
    "No, el ácido del estómago destruye cualquier parásito antes de que llegue al intestino.",
    "Solo si el alimento estuvo en contacto con animales."
  ],
  correcta: 1,
  explicacion: "El riesgo es real, aunque no ocurre siempre. Lavar bien frutas y verduras es una de las medidas más simples y efectivas que existen."
},
{
  origen: "borrador",
  tema: "Mitos y creencias",
  pregunta: "¿Comer zanahoria mejora la vista?",
  alternativas: [
    "Sí, comer zanahoria todos los días corrige la miopía.",
    "No tiene ninguna relación con la vista.",
    "Aporta vitamina A, necesaria para la visión, pero no mejora una vista que ya funciona bien."
  ],
  correcta: 3,
  explicacion: "La vitamina A es clave para la visión y su déficit sí causa problemas. Pero si no te falta, comer más zanahoria no te va a dar mejor vista."
},
{
  origen: "borrador",
  tema: "Mitos y creencias",
  pregunta: "¿Reemplazar las harinas por una manzana verde ayuda a bajar de peso?",
  alternativas: [
    "Sí, la manzana verde quema la grasa acumulada.",
    "Reemplazar un grupo de alimentos por uno solo no es una estrategia sostenible ni saludable.",
    "Sí, porque la manzana verde tiene calorías negativas."
  ],
  correcta: 2,
  explicacion: "No existen alimentos que quemen grasa ni calorías negativas. Eliminar grupos completos suele terminar en más hambre y en abandonar el intento."
},
{
  origen: "borrador",
  tema: "Mitos y creencias",
  pregunta: "¿Si tomo leche, engordo?",
  alternativas: [
    "Sí, la leche engorda porque tiene grasa animal.",
    "No, la leche es el único alimento que no suma calorías.",
    "La leche aporta calorías como cualquier alimento: lo que importa es el conjunto de lo que comes."
  ],
  correcta: 3,
  explicacion: "La leche aporta calcio y proteínas. Como todo alimento, suma calorías, y eso solo pesa dentro del total del día."
},
{
  origen: "borrador",
  tema: "Mitos y creencias",
  pregunta: "¿Si se toma leche después de una ducha, crecerán los pechos?",
  alternativas: [
    "Sí, el calor de la ducha abre los poros y la leche actúa más rápido.",
    "No: el desarrollo del cuerpo depende de las hormonas y de la genética, no de lo que tomes después de ducharte.",
    "Solo funciona en la adolescencia temprana."
  ],
  correcta: 2,
  explicacion: "El desarrollo corporal lo determinan las hormonas y la genética de cada persona. Ningún alimento, ni a ninguna hora, cambia eso."
},

/* ──────── Preguntas de apoyo, en borrador ──────── */
{
  origen: "borrador",
  tema: "Mitos y creencias",
  pregunta: "¿Qué pasa cuando exprimes una fruta para hacer jugo?",
  alternativas: [
    "Mantiene exactamente lo mismo que la fruta entera.",
    "Pierde la fibra y el azúcar se absorbe más rápido.",
    "Se le duplican las vitaminas."
  ],
  correcta: 2,
  explicacion: "La fibra queda en el bagazo. Por eso el jugo sacia menos que la fruta entera, aunque venga de la misma naranja."
},
{
  origen: "borrador",
  tema: "Etiquetas y sellos",
  pregunta: "Un producto trae el sello ALTO EN AZÚCARES. ¿Qué significa exactamente?",
  alternativas: [
    "Que el producto está prohibido para menores de edad.",
    "Que supera el límite de azúcar que fija la ley chilena, sin decir por cuánto.",
    "Que tiene más azúcar que cualquier otro producto del supermercado."
  ],
  correcta: 2,
  explicacion: "El sello avisa que se pasó del límite legal, pero no dice si lo superó por poco o por mucho. Es una alerta, no un ranking."
},
{
  origen: "borrador",
  tema: "Etiquetas y sellos",
  pregunta: "Un yogur dice LIGHT en el envase. ¿Qué te asegura esa palabra?",
  alternativas: [
    "Que es un producto saludable.",
    "Que no tiene azúcar.",
    "Que tiene al menos 25% menos de algún nutriente que la versión original."
  ],
  correcta: 3,
  explicacion: "Light es una comparación contra el producto original, no un certificado de salud. Puede ser light en grasa y seguir siendo alto en azúcar."
},
{
  origen: "borrador",
  tema: "Etiquetas y sellos",
  pregunta: "Un jugo dice SIN AZÚCAR AÑADIDA. ¿Puede ser dulce igual?",
  alternativas: [
    "Sí: no le agregaron azúcar, pero la fruta trae la suya propia.",
    "No, si lo dice el envase es porque no tiene nada de azúcar.",
    "Solo si además trae endulzante artificial."
  ],
  correcta: 1,
  explicacion: "La frase habla de lo que se agregó en la fábrica, no de lo que el alimento ya tenía. Un jugo de uva sin azúcar añadida sigue siendo dulce."
},
{
  origen: "borrador",
  tema: "Redes sociales",
  pregunta: "Un video de nutrición tiene millones de likes. ¿Qué te dice eso sobre su contenido?",
  alternativas: [
    "Que la información fue revisada por especialistas antes de publicarse.",
    "Nada sobre si es verdadero: los likes miden alcance, no exactitud.",
    "Que al menos la mitad de lo que dice es correcto."
  ],
  correcta: 2,
  explicacion: "Nadie revisa un video antes de que se publique. La viralidad mide cuánto gustó, no cuánta evidencia hay detrás."
},
{
  origen: "borrador",
  tema: "Redes sociales",
  pregunta: "¿Por qué un consejo falso de nutrición puede sonar tan convincente?",
  alternativas: [
    "Porque siempre cita estudios científicos reales.",
    "Porque usa tono seguro, palabras técnicas y testimonios personales.",
    "Porque lo publican solo cuentas con muchos seguidores."
  ],
  correcta: 2,
  explicacion: "La desinformación se apoya en la seguridad con que se dice y en el caso personal que emociona, no en la evidencia."
},
{
  origen: "borrador",
  tema: "Mitos y creencias",
  pregunta: "¿Tomar agua con limón en ayunas quema grasa?",
  alternativas: [
    "Sí, el ácido cítrico disuelve la grasa del cuerpo.",
    "No: hidrata y aporta algo de vitamina C, pero no quema grasa.",
    "Sí, pero solo si el agua está tibia."
  ],
  correcta: 2,
  explicacion: "Ninguna bebida quema grasa. Tomar agua es bueno por otras razones, y eso ya es suficiente motivo."
},
{
  origen: "borrador",
  tema: "Mitos y creencias",
  pregunta: "Los jugos DETOX, ¿limpian el cuerpo de toxinas?",
  alternativas: [
    "Sí, eliminan las toxinas acumuladas durante años.",
    "El hígado y los riñones ya hacen ese trabajo todos los días.",
    "Sí, pero solo si se toman tres días seguidos sin comer nada más."
  ],
  correcta: 2,
  explicacion: "El cuerpo tiene su propio sistema de filtrado funcionando siempre. Ningún jugo lo reemplaza ni lo acelera."
},
{
  origen: "borrador",
  tema: "Deporte y energía",
  pregunta: "¿Un adolescente necesita proteína en polvo para desarrollar músculo?",
  alternativas: [
    "Sí, sin suplemento no se gana masa muscular.",
    "No: con una alimentación variada se cubren las necesidades de proteína.",
    "Sí, pero solo las marcas certificadas."
  ],
  correcta: 2,
  explicacion: "La proteína de la comida alcanza de sobra en la mayoría de los casos. Si hay dudas, lo que corresponde es consultar, no comprar."
},
{
  origen: "borrador",
  tema: "Imagen corporal",
  pregunta: "¿Se puede saber si alguien se alimenta bien mirando su cuerpo?",
  alternativas: [
    "Sí, el cuerpo refleja directamente lo que la persona come.",
    "No: los cuerpos son distintos entre sí y la alimentación no se ve por fuera.",
    "Solo en personas que hacen deporte."
  ],
  correcta: 2,
  explicacion: "Dos personas que comen parecido pueden verse muy distintas. Juzgar la alimentación por la apariencia no informa nada y sí hace daño."
}

];
