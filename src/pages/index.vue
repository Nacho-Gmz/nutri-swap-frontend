<template>
  <v-sheet
    class="d-flex flex-column align-center justify-center bg-surface fill-height"
  >
    <Card
      title-text="¡Intercambia, disfruta y come lo que te gusta!"
      description-text="Intercambiar un alimento por otro nunca había sido tan sencillo. En NutriSwap te damos las mejores opciones para que sigas disfrutando de tus comidas sin complicarte, eligiendo lo que más te guste sin perder nutrientes. Solo elige, intercambia y mantén el equilibrio en tu alimentación de forma sencilla y práctica."
      :actions="true"
      :buttons="[
        {
          text: 'Empieza a intercambiar',
          action: () => console.log('Aceptado'),
        },
        { text: 'Registrate', action: () => console.log('Registro') },
      ]"
      color="primaryContainer"
    ></Card>
    <Card
      color="primaryContainer"
      title-text="Te brindamos la alternativa más similar al alimento que quieres sustituir"
      description-text="Utilizamos datos del Sistema Mexicano de Alimentos
    Equivalentes (SMAE) para encontrar la mejor alternativa al alimento que
    elijas. Nuestro algoritmo analiza los macronutrientes de todos los
    alimentos dentro de la misma categoría y te proporciona varias opciones,
    permitiéndote intercambiar tu porción de la mejor manera."
    >
    </Card>
    <Card
      color="primaryContainer"
      title-text="La clave para una alimentación equilibrada"
      description-text="Una porción es la cantidad específica de un alimento que se recomienda consumir. Su tamaño varía según el tipo de alimento y las necesidades nutricionales de cada persona."
    ></Card>
    <Card
      color="primaryContainer"
      title-text="Flexibilidad sin perder el equilibrio nutricional"
      description-text="Conocer cómo intercambiar porciones te permite adaptar tu
  alimentación sin afectar tu ingesta de nutrientes. Esto facilita una dieta
  más variada, personalizada y experimental sin sacrificar el control
  nutricional."
    ></Card>
  </v-sheet>
</template>

<script lang="ts" setup>
import Card from "@/components/Card.vue";
//
</script>
