<template>
  <div>
    <TopNav />
    <ProfilesHome />
    <Footer />
  </div>
</template>

<script>
import TopNav from "~/components/parts/TopNav.vue";
import ProfilesHome from "~/components/ProfilesHome.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    TopNav,
    ProfilesHome,
    Footer
  }
};
</script>

<style>
</style>