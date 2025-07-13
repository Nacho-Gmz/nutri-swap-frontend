<script setup lang="ts">
import SimpleCard from "@/modules/common/components/SimpleCard.vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <SimpleCard>
      <div>
        <h1 class="text-2xl font-bold text-sky-700 dark:text-sky-300">
          ¡Intercambia, disfruta y come lo que te gusta!
        </h1>

        <p class="text-md text-gray-700 dark:text-gray-200">
          Intercambiar un alimento por otro nunca había sido tan sencillo. En NutriSwap te damos las
          mejores opciones para que sigas disfrutando de tus comidas sin complicarte, eligiendo lo
          que más te guste sin perder nutrientes. Solo elige, intercambia y mantén el equilibrio en
          tu alimentación de forma sencilla y práctica.
        </p>
      </div>
    </SimpleCard>
    <SimpleCard>
      <div>
        <h1 class="text-2xl font-bold text-sky-700 dark:text-sky-300">
          Te brindamos la alternativa más similar al alimento que quieres sustituir
        </h1>

        <p class="text-md text-gray-700 dark:text-gray-200">
          Utilizamos datos del Sistema Mexicano de Alimentos Equivalentes (SMAE) para encontrar la
          mejor alternativa al alimento que elijas. Nuestro algoritmo analiza los macronutrientes de
          todos los alimentos dentro de la misma categoría y te proporciona varias opciones,
          permitiéndote intercambiar tu porción de la mejor manera.
        </p>
      </div>
    </SimpleCard>
    <SimpleCard>
      <div>
        <h1 class="text-2xl font-bold text-sky-700 dark:text-sky-300">
          La clave para una alimentación equilibrada
        </h1>

        <p class="text-md text-gray-700 dark:text-gray-200">
          Una porción es la cantidad específica de un alimento que se recomienda consumir. Su tamaño
          varía según el tipo de alimento y las necesidades nutricionales de cada persona.
        </p>
      </div>
    </SimpleCard>
    <SimpleCard>
      <div>
        <h1 class="text-2xl font-bold text-sky-700 dark:text-sky-300">
          Flexibilidad sin perder el equilibrio nutricional
        </h1>

        <p class="text-md text-gray-700 dark:text-gray-200">
          Conocer cómo intercambiar porciones te permite adaptar tu alimentación sin afectar tu
          ingesta de nutrientes. Esto facilita una dieta más variada, personalizada y experimental
          sin sacrificar el control nutricional.
        </p>
      </div>
    </SimpleCard>
  </div>
</template>
