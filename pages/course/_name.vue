<template>
  <div>
    <TopNav />
    <Course />
    <Footer />
  </div>
</template>

<script>
import TopNav from "~/components/parts/TopNav.vue";
import Course from "~/components/Course.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    TopNav,
    Course,
    Footer
  }
};
</script>

<style>
</style>



