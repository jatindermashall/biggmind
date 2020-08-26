<template>
  <section class="news">
    <div class="container">
      <div class="row">
        <div class="boxedcontainer">
          <div class="col-12 bg-white">
            <h4 class="bg-white mt-4 mb-0 ml-4">List of News Section</h4>
          </div>

          <div class="row newsbox mt-0 bg-transparent">
            <div class="col-12 ml-1 mt-0 bg-transparent">
              <div
                class="row mb-2 d-flex flex-row align-items-center justify-content-center bg-transparent"
              >
                <div class="col-md-8 col-sm-12">
                  <article v-for="(news, index) in newsArr" :key="index">
                    <div class="card bg-transparent">
                      <div class="card-body">
                        <div class="media">
                          <nuxt-link :to="`/${news.profile.id}.${news.profile.name}`">
                            <img
                              class="mr-3 newsicon img-fluid rounded-circle"
                              :src="endPoint+news.profile.profile_image[0].url"
                              alt="news icon"
                            />
                          </nuxt-link>
                          <div class="media-body">
                            <h5 class="mt-0">{{news.title}}</h5>
                            <nuxt-link :to="`news/${news.profile.name}.${news.id}.${news.title}`">
                              <h6 class>{{news.description.substring(0, 250)}}....</h6>
                            </nuxt-link>
                            <button type="button" class="btn searchbtn">Read more</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                <div class="col-md-4 mt-2 col-sm-12">
                  <div class="card" style="width: 100%;">
                    <div class="card-header bg-dark text-white">Today’s news and views</div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <a href="#">
                          <div class="text-truncate">Unemployment rate declines: CMIE</div>
                          <span class="badge badge-info">21h ago • 1,359 readers</span>
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a href="#">
                          <div class="text-truncate">What will happen to tiktok</div>
                          <span class="badge badge-info">2h ago • 11,359 readers</span>
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a href="#">
                          <div class="text-truncate">Latest news across the globe right here</div>
                          <span class="badge badge-info">12h ago • 1,31,239 readers</span>
                        </a>
                      </li>
                      <div class="badge badge-pill text-center list-group list-group-flush">
                        <a href="#">
                          Show more
                          <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-12">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span class="sr-only">Previous</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span class="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      endPoint: process.env.imageUrl
    };
  },
  name: "News",
  methods: {
    ...mapActions("news", ["fetchNews"])
  },
  computed: {
    ...mapState("news", ["news", "filterNews"]),
    ...mapGetters("news", ["allNews"]),
    newsArr() {
      if (this.$nuxt.$route.name === "index") return this.news;
      if (this.$nuxt.$route.name === "newsFilter") return this.filterNews;
    }
  },
  created() {
    this.fetchNews();
  },
  filters: {
    replacespaces: function(value) {
      if (!value) return "";
      value = value.replace(" ", "-");
      console.log(value);
      return value;
    }
  }
};
</script>

<style>
</style>