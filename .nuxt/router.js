import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c074f5b6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _5dd9043d = () => interopDefault(import('..\\pages\\profileFilter.vue' /* webpackChunkName: "pages/profileFilter" */))
const _0f3e9a68 = () => interopDefault(import('..\\pages\\profiles\\_id.vue' /* webpackChunkName: "pages/profiles/_id" */))
const _53c43be4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7959e0a6 = () => interopDefault(import('..\\pages\\_name.vue' /* webpackChunkName: "pages/_name" */))

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
    component: _c074f5b6,
    name: "login"
  }, {
    path: "/profileFilter",
    component: _5dd9043d,
    name: "profileFilter"
  }, {
    path: "/profiles/:id?",
    component: _0f3e9a68,
    name: "profiles-id"
  }, {
    path: "/",
    component: _53c43be4,
    name: "index"
  }, {
    path: "/:name",
    component: _7959e0a6,
    name: "name"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
