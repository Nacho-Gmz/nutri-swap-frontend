<script setup lang="ts">
import IntroductionSection from "../components/sections/IntroductionSection.vue";
import SwapSection from "../components/sections/SwapSection.vue";
import AboutUsSection from "../components/sections/AboutUsSection.vue";
import InformationSection from "../components/sections/InformationSection.vue";
</script>

<template>
  <div class="h-screen w-full snap-y snap-mandatory overflow-y-auto">
    <introduction-section class="snap-center snap-always" />
    <information-section class="snap-center snap-always" />
    <swap-section class="snap-center snap-always" />
    <about-us-section class="snap-center snap-always" />
  </div>
</template>
