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
<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
