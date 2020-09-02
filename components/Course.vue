<template >
  <div>
    <!--Main Container-->
    <div class="container-fluid bg-transparent mainsection">
      <div class="row">
        <!-- tabs -->
        <div class="tabbable d-flex bg-transparent container">
          <div class="text-center boxedcontainer tabhandler col-md-3 col-sm-12 flex-column d-flex">
            <ul class="nav tabpillscustomul">
              <li class="active tabpillscustom">
                <a href="#home" data-toggle="tab" class="active" @click="selectedTab = 'home'">
                  <i aria-hidden="true" class="fa fa-heart"></i> Overview
                </a>
              </li>

              <li class="tabpillscustom">
                <a href="#Quotes" data-toggle="tab" @click="selectedTab = 'quotes'">
                  <i aria-hidden="true" class="fa fa-quote-left"></i> Details
                </a>
              </li>

              <li class="tabpillscustom">
                <a href="#Books" data-toggle="tab" @click="selectedTab = 'books'">Reviews</a>
              </li>

              <li class="tabpillscustom">
                <a href="#Stories" data-toggle="tab" @click="selectedTab = 'stories'">Stories</a>
              </li>

              <li class="tabpillscustom">
                <a href="#News" data-toggle="tab" @click="selectedTab = 'news'">Buy</a>
              </li>
            </ul>
          </div>

          <div class="tab-content col-sm-12 bg-transparent ml-3 col-md-9">
            <div class="tab-pane" id="home" :class="{'active': selectedTab === 'home'}">
              <div class="card bg-white boxedcontainer mainsectioncard">
                <h1 class="bg-transparent">An Overview</h1>
                <hr />
                <h1 class="bg-transparent">{{course.title}}</h1>
                <p class="bg-transparent">{{course.description}}</p>
              </div>
            </div>
            <div class="tab-pane" id="Quotes" :class="{'active': selectedTab === 'quotes'}">
              <div class="card bg-white boxedcontainer mainsectioncard">
                <h1 class="bg-transparent">Details</h1>
                <hr />
                <p class="bg-transparent"></p>
              </div>
            </div>

            <div class="tab-pane" id="Books" :class="{'active': selectedTab === 'books'}">
              <div class="card bg-white boxedcontainer mainsectioncard bookContainer">
                <h1 class="bg-transparent">Reviews</h1>
                <hr />

                <p class="bg-transparent">
                  <!--  <div class="parent">
   <div class="child" v-for="(book, index) in profile.books" :key="index">
    <img :src="endPoint + book.image[0].url" width="100px"/><br/>
    
    {{index + 1}}. {{book.title}}</div> 
  
                  </div>-->
                </p>
              </div>
            </div>

            <div class="tab-pane" id="Stories" :class="{'active': selectedTab === 'stories'}">
              <div class="card bg-white boxedcontainer mainsectioncard">
                <h1 class="bg-transparent">Stories by Entreprenuers</h1>
                <hr />
                <p class="bg-transparent">
                  Dummy content goes here. These lists are meant to identify
                  articles which deserve editor attention because they are the
                  most important for an encyclopedia to have, as determined by
                  the community of participating editors. They may also be of
                  interest to readers as an alternative to lists of overview
                  articles.
                </p>
              </div>
            </div>

            <div class="tab-pane" id="News" :class="{'active': selectedTab === 'news'}">
              <div class="card bg-white boxedcontainer mainsectioncard">
                <h1 class="bg-transparent">Buy</h1>
                <hr />
                <p class="bg-transparent">
                  Dummy content goes here. These lists are meant to identify
                  articles which deserve editor attention because they are the
                  most important for an encyclopedia to have, as determined by
                  the community of participating editors. They may also be of
                  interest to readers as an alternative to lists of overview
                  articles.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- /tabs -->
      </div>
    </div>
  </div>
  <!-- Main Containe rends here-->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      endPoint: process.env.imageUrl,
      selectedTab: "home"
    };
  },
  mounted() {
    this.getCourse(this.$route.params.name);
  },
  computed: {
    ...mapGetters("courses", ["course"])
  },
  methods: {
    ...mapActions("courses", ["getCourse"])
  }
};
</script>

<style>
</style>