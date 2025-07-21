<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import { useAuthStore } from "@/modules/auth/stores/auth.store";
import router from "@/router";

const dropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const authStore = useAuthStore();

const menuItems = [
  { href: "/profile", icon: "bx-user", text: "Perfil" },
  { href: "/account-settings", icon: "bx-cog", text: "Ajustes de cuenta" },
];

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const closeDropdown = () => {
  dropdownOpen.value = false;
};

const signOut = () => {
  authStore.logout();
  router.push({ name: "landing" });
};

const handleClickOutside = (event: Event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <button
      class="flex items-center text-green-600 dark:text-green-400"
      @click.prevent="toggleDropdown"
    >
      <span class="text-md mr-1 block font-medium">{{ authStore.user?.email }}</span>

      <i class="bx bx-chevron-down text-2xl" :class="{ 'rotate-180': dropdownOpen }"></i>
    </button>

    <!-- Dropdown Start -->
    <div
      v-if="dropdownOpen"
      class="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border-2 border-green-200 bg-white/50 p-3 shadow-lg backdrop-blur-3xl dark:border-green-800 dark:bg-gray-900/10"
    >
      <div class="text-green-600 dark:text-green-400">
        {{ authStore.user?.email }}
      </div>

      <ul class="flex flex-col gap-1 border-b border-green-300 pt-4 pb-3 dark:border-green-800">
        <li v-for="item in menuItems" :key="item.href">
          <router-link
            :to="item.href"
            class="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-green-600 hover:bg-green-100/50 hover:text-green-500 dark:text-green-400 dark:hover:bg-green-50/5 dark:hover:text-green-300"
          >
            <i
              :class="item.icon"
              class="bx text-green-400 group-hover:text-green-500 dark:group-hover:text-green-300"
            ></i>
            {{ item.text }}
          </router-link>
        </li>
      </ul>
      <router-link
        to="/login"
        @click="signOut"
        class="group mt-3 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-green-600 hover:bg-green-100/50 hover:text-green-500 dark:text-green-400 dark:hover:bg-green-50/5 dark:hover:text-green-300"
      >
        <i class="bx bx-arrow-out-left-square-half text-red-500"></i>
        Cerrar sesión
      </router-link>
    </div>
    <!-- Dropdown End -->
  </div>
</template>
