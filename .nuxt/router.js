import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e466f490 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0a51fa16 = () => interopDefault(import('../pages/profiles/_id.vue' /* webpackChunkName: "pages/profiles/_id" */))
const _77b63abe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e466f490,
    name: "login"
  }, {
    path: "/profiles/:id?",
    component: _0a51fa16,
    name: "profiles-id"
  }, {
    path: "/",
    component: _77b63abe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
