<script setup lang="ts">
import { ref, watch } from "vue";

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

function toggleDrawer() {
  drawer.value = !drawer.value;
}
</script>
<template>
  <AppBar @toggle-drawer="toggleDrawer" />
  <Sidebar v-model="drawer" />
  <v-main>
    <v-container
      class="food-bg bg-background ma-0 pa-4 w-100 h-100 overflow-hidden"
      fluid
    >
      <router-view />
    </v-container>
  </v-main>
</template>

<style lang="css" scoped>
.food-bg {
  background: url("../assets/images/food-pattern-bg.png");
  background-size: cover;
  background-position: center;
}
</style>
