<script setup lang="ts">
import ThemeToggler from "@/modules/common/components/ThemeToggler.vue";
import { useRegister } from "../composables/useRegister";

const {
  firstName,
  lastName,
  email,
  password,
  agreeToTerms,
  showPassword,
  togglePasswordVisibility,
  onRegister,
  downloadPrivacy,
  downloadTerms,
} = useRegister();
</script>

<template>
  <div
    class="flex w-full flex-1 flex-col bg-gray-50/10 p-6 backdrop-blur-3xl lg:w-1/2 dark:bg-gray-900/10"
  >
    <div class="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
      <div class="inline-block w-fit transition duration-500 ease-in-out hover:scale-105 md:hidden">
        <router-link class="block rounded-xl" to="/">
          <h1 class="glow glow-green text-6xl font-bold text-green-100 md:text-8xl">NutriSwap</h1>
        </router-link>
      </div>
      <div class="mb-5 flex items-center justify-between">
        <h1 class="mb-2 text-2xl font-bold text-green-700 dark:text-green-200">Regístrate</h1>
        <ThemeToggler />
      </div>
      <div>
        <form @submit.prevent="onRegister">
          <div class="space-y-5">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <!-- First Name -->
              <div class="sm:col-span-1">
                <label for="fname" class="label">
                  Nombre(s)<span class="text-error-500">*</span>
                </label>
                <input
                  v-model="firstName"
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Nombre(s)"
                  class="input"
                />
              </div>
              <!-- Last Name -->
              <div class="sm:col-span-1">
                <label for="lname" class="label">
                  Apellidos<span class="text-error-500">*</span>
                </label>
                <input
                  v-model="lastName"
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Apellidos"
                  class="input"
                />
              </div>
            </div>
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
            <!-- Checkbox -->
            <div>
              <div>
                <label
                  for="checkboxLabelOne"
                  class="flex cursor-pointer items-start text-sm font-normal text-gray-700 select-none dark:text-gray-400"
                >
                  <div class="relative">
                    <input
                      v-model="agreeToTerms"
                      type="checkbox"
                      id="checkboxLabelOne"
                      class="sr-only"
                    />
                    <div
                      :class="
                        agreeToTerms
                          ? 'border-sky-500 bg-sky-500/20'
                          : 'border-gray-400 bg-transparent dark:border-gray-300/50'
                      "
                      class="mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]"
                    >
                      <span
                        class="flex items-center justify-center"
                        :class="agreeToTerms ? '' : 'opacity-0'"
                      >
                        <i class="bx bx-check text-sky-600 dark:text-sky-300"></i>
                      </span>
                    </div>
                  </div>
                  <p class="inline-block font-normal text-gray-800 dark:text-white/90">
                    Al registrate, aceptas los
                    <span class="link" @click.stop="downloadTerms">
                      Términos y condiciones de servicio,
                    </span>
                    y nuestra
                    <span class="link" @click.stop="downloadPrivacy"> Política de privacidad </span>
                  </p>
                </label>
              </div>
            </div>
            <!-- Button -->
            <div>
              <button class="button w-full hover:scale-105">Crea tu cuenta</button>
            </div>
          </div>
        </form>
        <div class="mt-5">
          <p class="text-base text-gray-800 dark:text-white/90">
            ¿Ya tienes una cuenta?
            <router-link to="/login" class="link">Inicia sesión aquí</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
