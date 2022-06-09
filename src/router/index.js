import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JournalView from "../views/JournalView.vue";
import AboutView from "../views/AboutView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/journal",
    name: "Journal",
    component: JournalView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
