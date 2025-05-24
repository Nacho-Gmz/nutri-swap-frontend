<script lang="ts" setup>
import router from "@/router";
import { login } from "@/services/api/authService";
import { useSnackbarStore } from "@/stores/snackbar";
import { useUserStore } from "@/stores/user";

const snackbar = useSnackbarStore();

const valid = ref<boolean>(false);
const email = ref<string>("");
const password = ref<string>("");
const show = ref<boolean>(false);
const showModal = ref<boolean>(false);
const c_email = ref<string>("");
const user = useUserStore();

const emailRules = [
  (v: string) => !!v || "El campo es requerido",
  (v: string) => /.+@.+\..+/.test(v) || "El correo debe ser válido",
];

const passwordRules = [(v: string) => !!v || "El campo es requerido"];

const submit = async () => {
  if (valid.value) {
    const credentials = {
      correo: email.value,
      contraseña: password.value,
    };
    const [error, data] = await login(credentials);
    if (error) {
      snackbar.showSnackbar("Error al iniciar sesión", "error");
    } else {
      user.logIn();
      snackbar.showSnackbar("Inicio de sesión exitoso", "success");
      router.push("/dashboard");
    }
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
          <v-sheet
            class="text-h2 rounded-xl font-weight-bold text-center mb-2 text-primary"
            color="transparent"
            >NutriSwap</v-sheet
          >
          <v-card
            color="primaryContainer"
            variant="elevated"
            class="pa-4 rounded-xl"
          >
            <div class="text-h4 font-weight-bold text-center mb-4">
              Inicia sesión
            </div>

            <v-form v-model="valid" validate-on="submit lazy" @submit.prevent>
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
