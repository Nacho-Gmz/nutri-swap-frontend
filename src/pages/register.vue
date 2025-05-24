<script setup lang="ts">
import { ref } from "vue";

const form = ref<HTMLFormElement | null>(null);
const valid = ref<boolean>(false);
const name = ref<string>("");
const first_lastname = ref<string>("");
const second_lastname = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const c_password = ref<string>("");
const show = ref<boolean>(false);

const nameRules = [
  (v: string) => !!v || "El campo es requerido",
  (v: string) => v.length < 2 || "El nombre debe tener al menos 2 caracteres",
];

const emailRules = [
  (v: string) => !!v || "El correo es requerido",
  (v: string) => /.+@.+\..+/.test(v) || "El correo debe ser válido",
];

const passwordRules = [
  (v: string) => !!v || "La contraseña es requerida",
  (v: string) =>
    v.length < 8 || "La contraseña debe tener al menos 8 caracteres",
];

const submit = () => {
  if (form.value?.validate()) {
    alert(`Registering in with Email: ${email.value}`);
  }
};
</script>

<template>
  <v-row no-gutters class="fill-height align-center justify-center">
    <v-col lg="6" cols="12" class="d-flex justify-center">
      <v-responsive
        class="flex-1-1 pa-4"
        style="max-height: 100vh; overflow-y: auto"
      >
        <v-responsive>
          <div class="text-h2 text-center text-info font-weight-bold mb-2">
            NutriSwap
          </div>
          <v-card
            color="infoContainer"
            variant="elevated"
            class="pa-4 rounded-xl"
          >
            <v-card-item class="text-center">
              <v-card-title
                class="font-weight-bold text-on-infoContainer text-wrap"
              >
                Regístrate
              </v-card-title>
            </v-card-item>

            <v-form ref="form" v-model="valid" validate-on="submit lazy">
              <div class="d-flex ga-2">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  required
                  prepend-inner-icon="mdi-account"
                  label="Nombre"
                  class="mb-2 w-33"
                  rounded="xl"
                  variant="outlined"
                />

                <v-text-field
                  v-model="first_lastname"
                  :rules="nameRules"
                  required
                  label="Primer apellido"
                  class="mb-2 w-33"
                  rounded="xl"
                  variant="outlined"
                />

                <v-text-field
                  v-model="second_lastname"
                  :rules="nameRules"
                  required
                  label="Segundo apellido"
                  class="mb-2 w-33"
                  rounded="xl"
                  variant="outlined"
                />
              </div>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                required
                prepend-inner-icon="mdi-email"
                label="Email"
                class="mb-2"
                rounded="xl"
                variant="outlined"
              />

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
              />

              <v-text-field
                v-model="c_password"
                :rules="passwordRules"
                required
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                label="Confirma tu contraseña"
                :type="show ? 'text' : 'password'"
                class="mb-2"
                rounded="xl"
                variant="outlined"
                @click:append-inner="show = !show"
              />

              <v-btn
                color="info"
                size="large"
                type="submit"
                rounded="xl"
                variant="elevated"
                block
                @click="submit"
              >
                Registrate
              </v-btn>
            </v-form>
            <div class="text-center text-body-2">
              ¿Ya tienes una cuenta?
              <v-btn
                variant="plain"
                rounded="xl"
                class="text-decoration-none text-info text-body-2 font-weight-medium"
                to="/login"
              >
                Inicia sesión
              </v-btn>
            </div>
          </v-card>
        </v-responsive>
      </v-responsive>
    </v-col>
  </v-row>
</template>

<route lang="yaml">
meta:
  layout: fullScreenLayout
</route>
