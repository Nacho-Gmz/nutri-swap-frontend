import AuthLayout from "@/modules/auth/layouts/AuthLayout.vue";
import { useUserStore } from "@/modules/auth/stores/userStore";
import NotFound from "@/modules/common/pages/NotFound.vue";
import DashboardLayout from "@/modules/dashboard/layouts/DashboardLayout.vue";
import LandingLayout from "@/modules/landing/layouts/LandingLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      redirect: "/login",
      component: AuthLayout,
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("@/modules/auth/pages/LoginPage.vue"),
          meta: { requiresAuth: false },
        },
        {
          path: "/register",
          name: "register",
          component: () => import("@/modules/auth/pages/RegisterPage.vue"),
          meta: { requiresAuth: false },
        },
      ],
    },
    {
      path: "/",
      component: LandingLayout,
      children: [
        {
          path: "/",
          name: "homepage",
          component: () => import("@/modules/landing/pages/LandingPage.vue"),
          meta: { requiresAuth: false },
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/modules/landing/pages/LandingPage.vue"),
          meta: { requiresAuth: false },
        },
        {
          path: "/swapper",
          name: "swapper",
          component: () => import("@/modules/landing/pages/LandingPage.vue"),
          meta: { requiresAuth: false },
        },
      ],
    },
    {
      path: "/dashboard",
      redirect: "/dashboard",
      name: "user home",
      component: DashboardLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/modules/dashboard/pages/HomePage.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("@/modules/dashboard/pages/HomePage.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "/account-settings",
          name: "account settings",
          component: () => import("@/modules/dashboard/pages/HomePage.vue"),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/:pathmatch(.*)*",
      name: "not found",
      component: NotFound,
    },
  ],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.beforeEach((to, from) => {
  const user = useUserStore();
  const userAuthenticated = user.isLoggedIn;

  if (to.meta.requiresAuth && !userAuthenticated) {
    return { name: "login" };
  }
  if (to.name === "login" && userAuthenticated) {
    return { name: "dashboard" };
  }

  return true;
});
export default router;
