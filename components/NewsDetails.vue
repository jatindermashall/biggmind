<template>
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <!-- Post Content Column -->
      <div class="col-lg-8">
        <!-- Title -->
        <h1 class="mt-4">{{news.title}}</h1>

        <!-- Author -->

        <hr />

        <!-- Date/Time -->
        <p>Posted on {{news.publish}}</p>

        <hr />

        <!-- Preview Image -->
        <img
          class="img-fluid rounded"
          v-if="news.news_image"
          :src="endPoint+news.news_image[0].url"
          alt
        />

        <hr />

        <!-- Post Content -->
        {{news.description}}
        <hr />

        <!-- Comments Form -->
        <div class="card my-4">
          <h5 class="card-header">Leave a Comment:</h5>
          <div class="card-body">
            <form>
              <div class="form-group">
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <!-- Single Comment -->
        <div class="media mb-4">
          <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt />
          <div class="media-body">
            <h5 class="mt-0">Commenter Name</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>

        <!-- Comment with nested comments -->
        <div class="media mb-4">
          <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt />
          <div class="media-body">
            <h5 class="mt-0">Commenter Name</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <div class="media mt-4">
              <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt />
              <div class="media-body">
                <h5 class="mt-0">Commenter Name</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>

            <div class="media mt-4">
              <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt />
              <div class="media-body">
                <h5 class="mt-0">Commenter Name</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar Widgets Column -->
      <div class="col-md-4">
        <!-- Search Widget -->

        <!-- Categories Widget -->

        <!-- Side Widget -->
        <div class="card my-4">
          <div
            class="card-body"
          >You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!</div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      endPoint: process.env.imageUrl
    };
  },
  mounted() {
    this.getNews(this.$route.params.id);
  },
  computed: {
    ...mapGetters("news", ["allNews", "news"])
  },
  methods: {
    ...mapActions("news", ["getNews"])
  }
};
</script>
<style scoped>
body {
  padding-top: 56px;
}
</style>