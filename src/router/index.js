import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/page",
    name: "page",
    component: () => import(/* webpackChunkName: "about" */ "../views/page.vue")
  },
  {
    path: "/note",
    name: "note",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/note/index.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue")
  },
  {
    path: "/artical",
    name: "artical",
    component: () =>
      import(/* webpackChunkName: "artical" */ "../views/artical/index.vue")
  },
  {
    path: "/artical-detail",
    name: "artical-detail",
    component: () =>
      import(
        /* webpackChunkName: "artical" */ "../views/artical/ArticalDetail.vue"
      )
  },
  {
    path: "*",
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "artical" */ "../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
