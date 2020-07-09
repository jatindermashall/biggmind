<template>
  <div>
    <TopNav />
    <Profile />
    <Footer />
  </div>
</template>

<script>
import TopNav from "~/components/parts/TopNav.vue";
import Profile from "~/components/Profile_test.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    TopNav,
    Profile,
    Footer
  }
};
</script>

<style>
</style>



