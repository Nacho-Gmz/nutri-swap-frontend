<script setup lang="ts">
import AuthSideInfo from "@/modules/auth/components/AuthSideInfo.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen">
    <div class="relative z-1 p-0">
      <div class="relative flex h-screen w-full flex-col justify-center lg:flex-row">
        <RouterView />
        <AuthSideInfo />
      </div>
    </div>
  </div>
</template>
