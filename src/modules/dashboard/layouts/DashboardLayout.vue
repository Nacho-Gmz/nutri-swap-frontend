<script setup lang="ts">
import DashboardHeader from "../components/DashboardHeader.vue";
import DashboardSidebar from "../components/DashboardSidebar.vue";
import { useSidebar } from "@/modules/common/composables/useSidebar";
const { isExpanded, isHovered } = useSidebar();
</script>

<template>
  <div class="min-h-screen xl:flex">
    <DashboardSidebar />
    <div
      class="flex-1 transition-all duration-300 ease-in-out"
      :class="[isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]']"
    >
      <DashboardHeader />
      <div class="mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
