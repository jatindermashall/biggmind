export { default as CoursesHome } from '../../components/CoursesHome.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NewsHome } from '../../components/NewsHome.vue'
export { default as Profile } from '../../components/Profile.vue'
export { default as ProfilesHome } from '../../components/ProfilesHome.vue'
export { default as Banner } from '../../components/parts/Banner.vue'
export { default as TopNav } from '../../components/parts/TopNav.vue'

export const LazyCoursesHome = import('../../components/CoursesHome.vue' /* webpackChunkName: "components/CoursesHome'}" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer'}" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyNewsHome = import('../../components/NewsHome.vue' /* webpackChunkName: "components/NewsHome'}" */).then(c => c.default || c)
export const LazyProfile = import('../../components/Profile.vue' /* webpackChunkName: "components/Profile'}" */).then(c => c.default || c)
export const LazyProfilesHome = import('../../components/ProfilesHome.vue' /* webpackChunkName: "components/ProfilesHome'}" */).then(c => c.default || c)
export const LazyBanner = import('../../components/parts/Banner.vue' /* webpackChunkName: "components/parts/Banner'}" */).then(c => c.default || c)
export const LazyTopNav = import('../../components/parts/TopNav.vue' /* webpackChunkName: "components/parts/TopNav'}" */).then(c => c.default || c)
