import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import Login from "../page/Login.vue";
import SignUp from "../page/SignUp.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
