import type {
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from "vue-router";
import { useAuthStore } from "../stores/auth.store";

const isNotAuthenticatedGuard = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
) => {
  const authStore = useAuthStore();

  if (authStore.isLoggedIn) {
    return { name: "home" };
  }
  return true;
};

export default isNotAuthenticatedGuard;
