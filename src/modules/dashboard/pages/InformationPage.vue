<script setup lang="ts">
import AboutUsSection from "@/modules/landing/components/sections/AboutUsSection.vue";
import InformationSection from "@/modules/landing/components/sections/InformationSection.vue";
</script>

<template>
  <div class="h-screen w-full snap-y snap-mandatory overflow-y-auto">
    <information-section class="snap-center snap-always" />
    <about-us-section class="snap-center snap-always" />
  </div>
</template>
