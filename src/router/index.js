import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Twitter from "../views/Twitter.vue";
// import Show from "../views/Show.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/twitter",
    name: "twitter",
    component: Twitter,
  },
  // {
  //   path: "/show",
  //   name: "student-show",
  //   component: Show,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
