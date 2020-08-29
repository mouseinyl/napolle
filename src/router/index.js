import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";



Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            name: "Home",
            need_auth: false
        }
    },
    {
        path: "/Productos",
        name: "Productos",
        component: () =>
            import ( /* webpackChunkName: "Productos" */ "../views/Productos.vue"),
        meta: {
            name: "Productos",
            need_auth: false
        }
    },
    {
        path: "/Cart",
        name: "Cart",
        component: () =>
            import ( /* webpackChunkName: "Cart" */ "../views/Cart.vue"),
        meta: {
            name: "Cart",
            need_auth: true
        }

    },
    {
        path: "/Login",
        name: "Login",
        component: () =>
            import ( /* webpackChunkName: "Login" */ "../views/Login.vue"),
        meta: {
            name: "Login",
            need_auth: false
        }
    },
    {
        path: "/Registro",
        name: "Registro",
        component: () =>
            import ( /* webpackChunkName: "Login" */ "../views/Registro.vue"),
        meta: {
            name: "Registro",
            need_auth: false
        }
    },
    {
        path: "/Perfil",
        name: "Perfil",
        component: () =>
            import ( /* webpackChunkName: "Login" */ "../views/Perfil.vue"),
        meta: {
            name: "perfil",
            need_auth: true
        }
    },
    {
        path: "/Information",
        name: "Information",
        component: () =>
            import ( /* webpackChunkName: "Login" */ "../views/Information.vue"),
        meta: {
            name: "About",
            need_auth: false
        }
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    console.log()
    if (to.meta.need_auth == true && store.state.authM.Is_logged == false) { next({ name: "Login" }) } else { next() }
    window.document.title = to.name
})

export default router;