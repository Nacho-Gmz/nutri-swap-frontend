<script lang="ts" setup>
//
const showForm = ref(true);
const toggleForm = () => {
  showForm.value = !showForm.value;
};
</script>

<template>
  <v-sheet
    class="d-flex flex-column align-center justify-center bg-surface fill-height"
  >
    <LoginCard v-if="showForm" @switch="toggleForm"></LoginCard>
    <RegisterCard v-else @switch="toggleForm"></RegisterCard>
  </v-sheet>
</template>
