import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Productos",
    name: "Productos",
    component: () =>
      import( /* webpackChunkName: "Productos" */ "../views/Productos.vue"),
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () => import( /* webpackChunkName: "Cart" */ "../views/Cart.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import( /* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/Registro",
    name: "Registro",
    component: () =>
      import( /* webpackChunkName: "Login" */ "../views/Registro.vue"),
  },
  {
    path: "/Perfil",
    name: "Perfil",
    component: () =>
      import( /* webpackChunkName: "Login" */ "../views/Perfil.vue"),
  },
  {
    path: "/Information",
    name: "Information",
    component: () =>
      import( /* webpackChunkName: "Login" */ "../views/Information.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;