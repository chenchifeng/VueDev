import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "01" */ "@/views/home"),
    hidden: true,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/01/Counter",
    component: () => import(/* webpackChunkName: "01" */ "@/views/01/Counter"),
    meta: {
      title: "01 Counter"
    }
  }
];

const router = new Router({
  mode: "history",
  routes
});

export { router, routes };
