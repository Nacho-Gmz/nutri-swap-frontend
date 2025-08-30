import { authRoutes } from "@/modules/auth/routes";
import { useAuthStore } from "@/modules/auth/stores/auth.store";
import NotFound from "@/modules/common/pages/NotFound.vue";
import DashboardLayout from "@/modules/dashboard/layouts/DashboardLayout.vue";
import LandingLayout from "@/modules/landing/layouts/LandingLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    authRoutes,
    {
      path: "/",
      redirect: "/landing",
      component: LandingLayout,
      children: [
        {
          path: "/landing",
          name: "homepage",
          component: () => import("@/modules/landing/pages/HomePage.vue"),
          meta: { requiresAuth: false },
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/modules/landing/pages/AboutPage.vue"),
          meta: { requiresAuth: false },
        },
        {
          path: "/swapper",
          name: "swapper",
          component: () => import("@/modules/landing/pages/SwapperPage.vue"),
          meta: { requiresAuth: false },
        },
      ],
    },
    {
      path: "/home",
      redirect: { name: "dashboard" },
      component: DashboardLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/modules/dashboard/pages/HomePage.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "/user-swapper",
          name: "user swapper",
          component: () => import("@/modules/dashboard/pages/UserSwapPage.vue"),
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

router.beforeEach((to, from) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: "login" };
  } else if (!to.meta.requiresAuth && auth.isAuthenticated) {
    return { name: "dashboard" };
  } else {
    return true;
  }
});
export default router;
