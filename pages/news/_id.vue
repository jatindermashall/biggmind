<template>
  <div>
    <TopNav />
    <NewsDetails />
    <Footer />
  </div>
</template>

<script>
import TopNav from "~/components/parts/TopNav.vue";
import Footer from "~/components/Footer.vue";
import NewsDetails from "~/components/NewsDetails.vue";
export default {
  components: {
    TopNav,
    NewsDetails,
    Footer
  }
};
</script>
<style scoped>
</style>