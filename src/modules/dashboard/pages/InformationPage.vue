<script setup lang="ts">
import SimpleCard from "@/modules/common/components/SimpleCard.vue";
</script>

<template>
  <div class="h-full w-full snap-y snap-mandatory overflow-y-auto">
    <div
      class="relative flex snap-center snap-always flex-col items-center gap-2 overflow-y-auto p-2 md:justify-center"
    >
      <div class="inline-block w-fit transition duration-500 ease-in-out hover:scale-105">
        <span class="block rounded-xl">
          <h1 class="glow glow-green text-5xl font-bold text-green-100 md:text-7xl">Aprende</h1>
        </span>
      </div>
      <div class="flex flex-col gap-2 px-4 md:flex-row md:px-8">
        <simple-card class="w-full hover:scale-102 md:w-1/2">
          <div>
            <h1 class="text-2xl font-bold text-green-700 dark:text-green-300">
              ¡Intercambia, disfruta y come lo que te gusta!
            </h1>

            <p class="text-md text-gray-700 dark:text-gray-200">
              Intercambiar un alimento por otro nunca había sido tan sencillo. En NutriSwap te damos
              las mejores opciones para que sigas disfrutando de tus comidas sin complicarte,
              eligiendo lo que más te guste sin perder nutrientes. Solo elige, intercambia y mantén
              el equilibrio en tu alimentación de forma sencilla y práctica.
            </p>
          </div>
        </simple-card>
        <simple-card class="w-full hover:scale-102 md:w-1/2">
          <div>
            <h1 class="text-2xl font-bold text-green-700 dark:text-green-300">
              Te brindamos la alternativa más similar al alimento que quieres sustituir
            </h1>

            <p class="text-md text-gray-700 dark:text-gray-200">
              Utilizamos datos del Sistema Mexicano de Alimentos Equivalentes (SMAE) para encontrar
              la mejor alternativa al alimento que elijas. Nuestro algoritmo analiza los
              macronutrientes de todos los alimentos dentro de la misma categoría y te proporciona
              varias opciones, permitiéndote intercambiar tu porción de la mejor manera.
            </p>
          </div>
        </simple-card>
      </div>
      <div class="flex flex-col gap-2 px-4 md:flex-row md:px-8">
        <simple-card class="w-full hover:scale-102 md:w-1/2">
          <div>
            <h1 class="text-2xl font-bold text-green-700 dark:text-green-300">
              La clave para una alimentación equilibrada
            </h1>

            <p class="text-md text-gray-700 dark:text-gray-200">
              Una porción es la cantidad específica de un alimento que se recomienda consumir. Su
              tamaño varía según el tipo de alimento y las necesidades nutricionales de cada
              persona.
            </p>
          </div>
        </simple-card>
        <simple-card class="w-full hover:scale-102 md:w-1/2">
          <div>
            <h1 class="text-2xl font-bold text-green-700 dark:text-green-300">
              Flexibilidad sin perder el equilibrio nutricional
            </h1>

            <p class="text-md text-gray-700 dark:text-gray-200">
              Conocer cómo intercambiar porciones te permite adaptar tu alimentación sin afectar tu
              ingesta de nutrientes. Esto facilita una dieta más variada, personalizada y
              experimental sin sacrificar el control nutricional.
            </p>
          </div>
        </simple-card>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-4 p-4 md:p-10">
      <div class="inline-block w-fit transition duration-500 ease-in-out hover:scale-105">
        <span class="block rounded-xl">
          <h1 class="glow glow-green text-5xl font-bold text-green-100 md:text-7xl">
            El equipo detrás de NutriSwap
          </h1>
        </span>
      </div>
      <div class="flex w-full flex-col gap-4 md:flex-row">
        <simple-card class="w-full hover:scale-105">
          <h1 class="text-xl font-bold text-green-700 dark:text-green-300">Asesor</h1>
          <h1>Michel Emanuel Lopez Franco</h1>
          <p><a class="link" href="">michel.lopez@academicos.udg.mx</a></p>
        </simple-card>
        <simple-card class="w-full hover:scale-105">
          <h1 class="text-xl font-bold text-green-700 dark:text-green-300">Integrante</h1>
          <h1>Luis Ignacio Gómez Aldrete</h1>
          <p><a class="link" href="">luis.gomez5882@alumnos.udg.mx</a></p>
        </simple-card>
        <simple-card class="w-full hover:scale-105">
          <h1 class="text-xl font-bold text-green-700 dark:text-green-300">Integrante</h1>

          <h1>Dayal Gutiérrez Villalobos</h1>
          <p><a class="link" href="">dayal.gutierrez5863@alumnos.udg.mx</a></p>
        </simple-card>
      </div>
      <simple-card class="w-full hover:scale-105">
        <h1 class="text-xl font-bold text-green-700 dark:text-green-300">
          Colaboradores y agradecimientos
        </h1>
        <ul class="flex flex-col">
          <li class="flex items-center gap-2 px-3 py-1">
            <span class="ml-2 block h-1.5 w-1.5 rounded-full bg-gray-700 dark:bg-white"></span>
            <span>
              Agradecemos el apoyo de los licenciados en Nutrición
              <b class="text-green-600 dark:text-green-400">Duilio Yael Bernal Quintana </b>
              <b class="text-green-600 dark:text-green-400">Verónica Valeria Gutiérrez Coronado </b>
              <span class="text-red-500">&hearts;</span>
            </span>
          </li>
          <li class="flex items-center gap-2 px-3 py-1">
            <span class="ml-2 block h-1.5 w-1.5 rounded-full bg-gray-700 dark:bg-white"></span>
            <span>
              Agradecemos el apoyo y permiso del
              <a class="link" href="https://midietasmae.com.mx/Comentarios/">SMAE</a>
              para usar sus bases de datos con la información de los alimentos.
            </span>
          </li>
        </ul>
      </simple-card>
    </div>
  </div>
</template>
