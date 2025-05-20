<script lang="ts" setup>
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
  <v-row no-gutters class="fill-height align-center justify-center">
    <v-col lg="6" cols="12" class="d-flex justify-center">
      <v-responsive
        class="flex-1-1 pa-4"
        style="max-height: 100vh; overflow-y: auto"
      >
        <v-responsive>
          <div class="text-h4 text-center font-weight-bold mb-2">NutriSwap</div>
          <v-card
            color="primaryContainer"
            variant="elevated"
            class="pa-4 rounded-xl"
          >
            <div class="text-h6 font-weight-regular text-center mb-4">
              Inicia sesión
            </div>

            <v-form ref="form" v-model="valid" validate-on="submit lazy">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                required
                prepend-inner-icon="mdi-email"
                label="Correo"
                class="mb-2"
                rounded="xl"
                variant="outlined"
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                required
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
                label="Contraseña"
                :type="show ? 'text' : 'password'"
                class="mb-2"
                rounded="xl"
                variant="outlined"
                @click:append-inner="show = !show"
              />
              <v-btn
                color="primary"
                size="large"
                type="submit"
                rounded="xl"
                variant="elevated"
                block
                @click="submit"
              >
                Entra
              </v-btn>
            </v-form>
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
                rounded="xl"
                variant="plain"
                class="text-decoration-none text-primary text-body-2 font-weight-medium"
                to="/register"
              >
                Regístrate
              </v-btn>
            </div>
          </v-card>
        </v-responsive>
      </v-responsive>
    </v-col>
  </v-row>
  <v-dialog v-model="showModal" width="auto">
    <v-card
      rounded="xl"
      color="secondaryContainer"
      variant="elevated"
      class="pa-4 rounded-xl"
      max-width="600"
    >
      <v-card-title>Recuperación de contraseña</v-card-title>
      <v-card-text>
        Ingresa tu correo para enviarte un enlace de reestablecimiento de
        contraseña.
        <v-text-field
          v-model="c_email"
          validate-on="submit lazy"
          :rules="emailRules"
          required
          prepend-inner-icon="mdi-email"
          label="Email"
          class="mb-2"
          rounded="xl"
          variant="outlined"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="showModal = false"> Cancelar </v-btn>
        <v-btn color="primary" @click="sendResetLink"> Enviar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<route lang="yaml">
meta:
  layout: fullScreenLayout
</route>
