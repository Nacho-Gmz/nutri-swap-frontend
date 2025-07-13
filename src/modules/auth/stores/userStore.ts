import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const isLoggedIn = ref<boolean>(false);
  const username = ref<string>();
  const email = ref<string>();

  const user = computed(() => [username, email]);

  function logIn(newUsername: string, newEmail: string) {
    isLoggedIn.value = true;
    username.value = newUsername;
    email.value = newEmail;
  }
  function logOut() {
    isLoggedIn.value = false;
    username.value = undefined;
    email.value = undefined;
  }

  return {
    isLoggedIn,
    username,
    email,
    user,
    logIn,
    logOut,
  };
});
