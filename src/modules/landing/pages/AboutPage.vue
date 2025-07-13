<script setup lang="ts">
import SimpleCard from "@/modules/common/components/SimpleCard.vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <simple-card class="w-fit">
      <h1 class="text-3xl font-bold text-sky-700 dark:text-sky-300">
        El equipo detrás de NutriSwap
      </h1>
    </simple-card>
    <div class="flex flex-col gap-2 md:flex-row">
      <simple-card class="w-full">
        <h1 class="text-xl font-bold text-sky-700 dark:text-sky-300">Asesor</h1>
        <h1>Michel Emanuel Lopez Franco</h1>
        <p><a class="link" href="">michel.lopez@academicos.udg.mx</a></p>
      </simple-card>
      <simple-card class="w-full">
        <h1 class="text-xl font-bold text-sky-700 dark:text-sky-300">Integrante</h1>
        <h1>Luis Ignacio Gómez Aldrete</h1>
        <p><a class="link" href="">luis.gomez5882@alumnos.udg.mx</a></p>
      </simple-card>
      <simple-card class="w-full">
        <h1 class="text-xl font-bold text-sky-700 dark:text-sky-300">Integrante</h1>

        <h1>Dayal Gutiérrez Villalobos</h1>
        <p><a class="link" href="">dayal.gutierrez5863@alumnos.udg.mx</a></p>
      </simple-card>
    </div>
    <simple-card>
      <h1 class="text-xl font-bold text-sky-700 dark:text-sky-300">
        Colaboradores y agradecimientos
      </h1>
      <ul class="flex flex-col">
        <li class="flex items-center gap-2 px-3 py-1">
          <span class="ml-2 block h-1.5 w-1.5 rounded-full bg-gray-700 dark:bg-white"></span>
          <span>
            Agradecemos el apoyo del licenciado en Nutrición
            <b class="text-green-600 dark:text-green-400">Duilio Yael Bernal Quintana </b>
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
</template>
