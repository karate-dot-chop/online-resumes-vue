import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Show from "../views/Show.vue";
import Vue2Filters from "vue2-filters";

Vue.use(Vue2Filters);

Vue.use(VueRouter);

const routes = [
  {
    path: "/students",
    name: "students-index",
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
