<template>
  <div>
    <TopNav />
    <Banner2 />
    <ProfilesHome />
    <NewsHome />
    <CoursesHome />
    <Footer />
  </div>
</template>

<script>
import TopNav from "~/components/parts/TopNav.vue";
import Banner from "~/components/parts/Banner.vue";
import ProfilesHome from "~/components/ProfilesHome.vue";
import NewsHome from "~/components/NewsHome.vue";
import CoursesHome from "~/components/CoursesHome.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    TopNav,
    Banner,
    ProfilesHome,
    CoursesHome,
    Footer
  }
};
</script>

<style>
</style>



