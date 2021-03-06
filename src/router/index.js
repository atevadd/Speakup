import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Speakup - a blog that allows you to speak your mind",
    },
  },
  {
    path: "/user/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      title: "Speakup - Login to begin",
    },
    props: true,
  },
  {
    path: "/user/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
    meta: {
      title: "Speakup - create an account to start writing",
    },
    props: true,
  },
  {
    path: "/user/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    meta: {
      title: "Speakup - Dashboard - welcome to your dashboard",
    },
  },
  {
    path: "/post/:id",
    name: "singlepost",
    component: () => import(/* webpackChunkName: "post" */ "../views/Post.vue"),
    props: true,
    meta: {
      title: "Speakup - Post",
    },
  },
  {
    path: "/user/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    meta: {
      title: "Speakup - Profile",
    },
  },
  {
    path: "/user/posts",
    name: "post",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Allpost.vue"),
    meta: {
      title: "Speakup - All posts",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// changing the page title dynamically
router.beforeEach((to, from, next) => {
  // changing the page title of a single blog page and adding the blog title to it
  if (to.name === "singlepost") {
    document.title = `${to.meta.title} - ${to.params.pagetitle}`;
  } else {
    document.title = `${to.meta.title}`;
  }

  next();
});

export default router;
