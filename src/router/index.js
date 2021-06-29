import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Show from "../views/Show.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/students/:id",
    name: "student-show",
    component: Show,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
