import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/Login"), // 로그인
  },
  {
    path: "/join",
    name: "Join",
    component: () => import("@/components/Join"), // 회원가입
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
