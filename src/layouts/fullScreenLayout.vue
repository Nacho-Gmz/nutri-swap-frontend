<script setup lang="ts"></script>
<template>
  <v-container
    class="food-bg bg-background ma-0 pa-4 w-100 h-100 overflow-hidden"
    fluid
  >
    <ThemeToggler class="position-absolute" />
    <router-view />
  </v-container>
</template>

<style lang="css" scoped>
.food-bg {
  background: url("../assets/images/food-pattern-bg.png");
  background-size: cover;
  background-position: center;
}
</style>
