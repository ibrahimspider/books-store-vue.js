import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import EditBook from "../views/EditBook.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Books",
    name: "home",
    component: HomeView,
  },
  {
    path: "/AddBook",
    name: "about",
    component: AboutView,
  },
  {
    path: "/Book/:id",
    name: "edit",
    component: EditBook,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
