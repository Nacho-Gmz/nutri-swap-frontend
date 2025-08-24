<script setup lang="ts">
import ThemeToggler from "@/modules/common/components/ThemeToggler.vue";
import { useLogin } from "../composables/useLogin";

const { email, password, showPassword, togglePasswordVisibility, onLogin } = useLogin();
</script>

<template>
  <div
    class="flex w-full flex-1 flex-col bg-gray-50/10 p-6 backdrop-blur-3xl lg:w-1/2 dark:bg-gray-900/10"
  >
    <div class="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
      <div>
        <div
          class="inline-block w-fit transition duration-500 ease-in-out hover:scale-105 md:hidden"
        >
          <router-link class="block rounded-xl" to="/">
            <h1 class="glow glow-green text-6xl font-bold text-green-100 md:text-8xl">NutriSwap</h1>
          </router-link>
        </div>
        <div class="mb-5 flex items-center justify-between">
          <h1 class="mb-2 text-2xl font-bold text-green-700 dark:text-green-200">Inicia sesión</h1>
          <ThemeToggler />
        </div>
        <div>
          <form @submit.prevent="onLogin">
            <div class="space-y-5">
              <!-- Email -->
              <div>
                <label for="email" class="label">
                  Correo electrónico<span class="text-error-500">*</span>
                </label>
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu correo"
                  class="input"
                />
              </div>
              <!-- Password -->
              <div>
                <label for="password" class="label">
                  Contraseña<span class="text-error-500">*</span>
                </label>
                <div class="relative">
                  <input
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    class="input"
                  />
                  <span
                    @click="togglePasswordVisibility"
                    class="absolute top-1/2 right-4 z-30 flex -translate-y-1/2 cursor-pointer items-center justify-center text-gray-800 dark:text-white/90"
                  >
                    <i v-if="!showPassword" class="bx bx-eye text-lg"></i>
                    <i v-else class="bx bx-eye-slash text-lg"></i>
                  </span>
                </div>
              </div>

              <!-- Button -->
              <div>
                <button class="button w-full hover:scale-105">Ingresa</button>
              </div>
            </div>
          </form>
          <div class="mt-5">
            <p class="text-base text-gray-800 dark:text-white/90">
              ¿No tienes una cuenta?
              <router-link to="/register" class="link">Regístrate</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
