import { defineStore } from "pinia";

export const useSnackbarStore = defineStore("snackbar", {
  state: () => ({
    show: false,
    message: "",
    color: "error", // o "success", "info", etc.
  }),
  actions: {
    showSnackbar(message: string, color = "error") {
      this.message = message;
      this.color = color;
      this.show = true;
    },
    closeSnackbar() {
      this.show = false;
    },
  },
});
