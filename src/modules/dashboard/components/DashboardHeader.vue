<script setup lang="ts">
import { ref } from "vue";
import { useSidebar } from "@/modules/common/composables/useSidebar";
import ThemeToggler from "@/modules/common/components/ThemeToggler.vue";
import UserMenu from "./UserMenu.vue";
// import HeaderLogo from "./header/HeaderLogo.vue";
// import NotificationMenu from "./header/NotificationMenu.vue";

const { toggleSidebar, toggleMobileSidebar } = useSidebar();

const handleToggle = () => {
  if (window.innerWidth >= 1024) {
    toggleSidebar();
  } else {
    toggleMobileSidebar();
  }
};

const isApplicationMenuOpen = ref(false);

const toggleApplicationMenu = () => {
  isApplicationMenuOpen.value = !isApplicationMenuOpen.value;
};
</script>

<template>
  <header
    class="sticky top-0 z-99999 flex w-full border-b border-green-200 bg-white/50 backdrop-blur-3xl lg:border-b dark:border-green-600/50 dark:bg-gray-900/10"
  >
    <div class="flex grow flex-col items-center justify-between lg:flex-row lg:px-6">
      <div
        class="flex w-full items-center justify-between gap-2 px-3 py-3 sm:gap-4 lg:justify-normal lg:px-0 lg:py-4"
      >
        <button
          @click="handleToggle"
          class="relative flex h-11 w-11 items-center justify-center rounded-xl border-2 border-green-400/25 bg-green-50/30 text-green-400 shadow-md backdrop-blur-md transition-colors hover:bg-green-100/75 dark:border-green-500/50 dark:bg-green-800/30 dark:text-green-500 dark:hover:bg-green-800/50"
        >
          <i class="bx bx-menu text-2xl"></i>
        </button>
        <button
          @click="toggleApplicationMenu"
          class="z-99999 flex h-10 w-10 items-center justify-center rounded-lg text-green-500 hover:bg-green-100 lg:hidden dark:text-green-400 dark:hover:bg-gray-800"
        >
          <i class="bx bx-dots-horizontal-rounded text-2xl"></i>
        </button>
      </div>

      <div
        :class="[isApplicationMenuOpen ? 'flex' : 'hidden']"
        class="shadow-theme-md w-full items-center justify-between gap-4 px-5 py-4 lg:flex lg:justify-end lg:px-0 lg:shadow-none"
      >
        <UserMenu />
        <ThemeToggler />
      </div>
    </div>
  </header>
</template>
