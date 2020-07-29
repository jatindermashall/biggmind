import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _de09ca32 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7a85b7ff = () => interopDefault(import('..\\pages\\profileFilter.vue' /* webpackChunkName: "pages/profileFilter" */))
const _150d668e = () => interopDefault(import('..\\pages\\profiles\\_id.vue' /* webpackChunkName: "pages/profiles/_id" */))
const _71591060 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6a8f7668 = () => interopDefault(import('..\\pages\\_name.vue' /* webpackChunkName: "pages/_name" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _de09ca32,
    name: "login"
  }, {
    path: "/profileFilter",
    component: _7a85b7ff,
    name: "profileFilter"
  }, {
    path: "/profiles/:id?",
    component: _150d668e,
    name: "profiles-id"
  }, {
    path: "/",
    component: _71591060,
    name: "index"
  }, {
    path: "/:name",
    component: _6a8f7668,
    name: "name"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
