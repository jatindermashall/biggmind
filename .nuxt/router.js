import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8dbe946e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _86495e3e = () => interopDefault(import('..\\pages\\profileFilter.vue' /* webpackChunkName: "pages/profileFilter" */))
const _5762ff70 = () => interopDefault(import('..\\pages\\profiles\\_id.vue' /* webpackChunkName: "pages/profiles/_id" */))
const _210dda9c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _da95dd6c = () => interopDefault(import('..\\pages\\_name.vue' /* webpackChunkName: "pages/_name" */))

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
    component: _8dbe946e,
    name: "login"
  }, {
    path: "/profileFilter",
    component: _86495e3e,
    name: "profileFilter"
  }, {
    path: "/profiles/:id?",
    component: _5762ff70,
    name: "profiles-id"
  }, {
    path: "/",
    component: _210dda9c,
    name: "index"
  }, {
    path: "/:name",
    component: _da95dd6c,
    name: "name"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
