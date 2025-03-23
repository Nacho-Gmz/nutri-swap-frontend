<script setup lang="ts">
import { ref } from "vue";

const form = ref<HTMLFormElement | null>(null);
const valid = ref<boolean>(false);
const email = ref<string>("");
const password = ref<string>("");
const show = ref<boolean>(false);
const showModal = ref<boolean>(false);
const c_email = ref<string>("");

const emailRules = [
  (v: string) => !!v || "El campo es requerido",
  (v: string) => /.+@.+\..+/.test(v) || "El correo debe ser válido",
];

const passwordRules = [(v: string) => !!v || "El campo es requerido"];

const submit = () => {
  if (form.value?.validate()) {
    alert(`Logging in with Email: ${email.value}`);
  }
};

const sendResetLink = () => {
  console.log("Sending reset link to:", email.value);
  showModal.value = false;
};
</script>

<template>
  <v-card
    color="primaryContainer"
    variant="elevated"
    class="pa-4 rounded-xl"
    min-width="600"
  >
    <v-card-item class="text-center">
      <v-card-title class="font-weight-bold text-on-primaryContainer text-wrap">
        Iniciar sesión
      </v-card-title>
    </v-card-item>

    <v-form ref="form" v-model="valid" validate-on="submit lazy">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        required
        prepend-inner-icon="mdi-email"
        label="Email"
        class="mb-2"
        rounded="xl"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        required
        prepend-inner-icon="mdi-lock"
        :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        label="Contraseña"
        :type="show ? 'text' : 'password'"
        class="mb-2"
        rounded="xl"
        variant="outlined"
        @click:append-inner="show = !show"
      ></v-text-field>

      <v-btn
        color="primary"
        size="large"
        type="submit"
        rounded="xl"
        variant="elevated"
        block
        @click="submit"
        >Entra</v-btn
      >
    </v-form>
  </v-card>
  <v-sheet class="py-2">
    <div class="text-center text-body-2">
      <v-btn
        rounded="xl"
        variant="plain"
        class="text-decoration-none text-primary text-body-2 font-weight-medium"
        @click="showModal = true"
      >
        ¿Olvidaste tu contraseña?
      </v-btn>
    </div>
    <div class="text-center text-body-2">
      ¿No tienes una cuenta?
      <v-btn
        variant="plain"
        class="text-decoration-none text-primary text-body-2 font-weight-medium"
        @click="$emit('switch')"
      >
        Regístrate
      </v-btn>
    </div>
  </v-sheet>

  <v-dialog v-model="showModal" max-width="400px">
    <v-card
      rounded="xl"
      color="secondaryContainer"
      variant="elevated"
      class="pa-4 rounded-xl"
      min-width="600"
    >
      <v-card-title>Recuperación de contraseña</v-card-title>
      <v-card-text>
        Ingresa tu correo para recibir un enlace de reestablecimiento de
        contraseña.
        <v-text-field
          validate-on="submit lazy"
          v-model="c_email"
          :rules="emailRules"
          required
          prepend-inner-icon="mdi-email"
          label="Email"
          class="mb-2"
          rounded="xl"
          variant="outlined"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="showModal = false">Cancelar</v-btn>
        <v-btn color="primary" @click="sendResetLink">Enviar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
