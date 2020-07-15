<template >
  <div>
    <!--Hero section -->
    <div>
      <div class="container coverimage boxedcontainer bg-transparent">
        <div class="row headersection bg-transparent">
          <div
            class="col-md-3 col-sm-12 littleheaddetail text-center align-self-center column justify-content-lg-center align-items-lg-center"
          >
            <div class v-if="profile.profile_image">
              <img
                class="profileimage img-fluid"
                :src="endPoint + profile.profile_image[0].url"
                width="180rem"
                style="margin-left: 0px;"
              />
              <h2
                class="text-center profileheader"
                style="
                  font-weight: 600;
                  font-size: 23px;
                  color: rgb(15, 15, 15);
                "
              >{{profile.name}}</h2>
            </div>
          </div>
          <div class="col-md-9 col-sm-12 bg-transparent">
            <div class="card herocard text-left shadow" style="max-width: 800px;">
              <div class="card-body align-items-center d-flex">
                <div class="col-md-6 col-sm-12">
                  <h4 style="margin-bottom: 0px; color: #7c7c7c !important;">
                    Content for the header goes here&nbsp;
                    <span>like networth etc etc</span>
                  </h4>
                  <h6 style="margin-top: 10px; color: #7c7c7c !important;">
                    Content for the header goes here&nbsp;
                    <span>like networth etc etc</span>
                  </h6>
                </div>

                <div
                  class="col-md-6 col-sm-12 d-flex flex-row rightprofileheaderbox align-content-center justify-content-lg-center align-items-lg-center"
                  style="margin-top: 5px;"
                >
                  <div>
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-pinterest fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero section ends here-->

    <!--Main Container-->
    <div class="container-fluid bg-transparent mainsection">
      <div class="row">
        <!-- tabs -->
        <div class="tabbable d-flex bg-transparent container">
          <div
            class="text-center boxedcontainer tabhandler col-md-3 col-sm-12 flex-column d-flex sidebarHeight"
          >
            <ul class="nav tabpillscustomul bg-transparent">
              <span class="tabpillscustom">
                <li class="active">
                  <a href="#home" style="background-color: none;" @click="selectedTab = 'home'" data-toggle="tab">Overview</a>
                </li>
              </span>
              <span class="tabpillscustom">
                <li>
                  <a href="#Quotes" data-toggle="tab" @click="selectedTab = 'quotes'">Quotes</a>
                </li>
              </span>
              <span class="tabpillscustom">
                <li>
                  <a href="#Books" data-toggle="tab" @click="selectedTab = 'books'">Books</a>
                </li>
              </span>
              <span class="tabpillscustom">
                <li>
                  <a href="#Stories" data-toggle="tab" @click="selectedTab = 'stories'">Stories</a>
                </li>
              </span>
              <span class="tabpillscustom">
                <li>
                  <a href="#News" data-toggle="tab" @click="selectedTab = 'news'">News</a>
                </li>
              </span>
            </ul>
          </div>

          <div class="tab-content col-sm-12 bg-transparent ml-3 col-md-9">
            <div class="tab-pane" id="home" :class="{'active': selectedTab === 'home'}">
              <div class="card bg-white boxedcontainer mainsectioncard">
                <h1 class="bg-transparent">An Overview</h1>
                <hr />
                <p class="bg-transparent">{{profile.about_me}}</p>
              </div>
            </div>
            <div class="tab-pane" id="Quotes" :class="{'active': selectedTab === 'quotes'}">
              <div class="card bg-white boxedcontainer mainsectioncard">
                <h1 class="bg-transparent">Quotes</h1>
                <hr />
                <p class="bg-transparent">
                  <h5 v-for="(quote, index) in profile.quotes" :key="index">{{index + 1}}. {{quote.content}}</h5>
                </p>
              </div>
            </div>

            <div class="tab-pane" id="Books" :class="{'active': selectedTab === 'books'}">
              <div class="card bg-white boxedcontainer mainsectioncard bookContainer">
                <h1 class="bg-transparent">Books recomendation</h1>
                <hr />

                <v-container class="grey lighten-5">
                  <v-row no-gutters>
                    <v-col v-for="(book, index) in profile.books" :key="index">
                      <v-card class="mx-auto" max-width="250" >
                          <v-img
                            class="white--text align-end"
                            height="200px"
                            :src="endPoint + book.image[0].url"
                          >
                          </v-img>


                          <v-card-text class="text--primary">
                            <div class="font-weight-bold book-title">{{book.title}}</div>
                            <div>Autor: {{book.Author}}</div>
                          </v-card-text>
                        </v-card>

                    </v-col>
                  </v-row>
                </v-container>
  
                <p class="bg-transparent">

                <!--  <div class="parent">
   <div class="child" v-for="(book, index) in profile.books" :key="index">
    <img :src="endPoint + book.image[0].url" width="100px"/><br/>
    
    {{index + 1}}. {{book.title}}</div> 
  
</div> -->
                  
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
                <h1 class="bg-transparent">Latest News</h1>
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
      selectedTab: 'home'
    };
  },
  mounted() {
    this.getProfile(this.$route.params.name);
  },
  computed: {
    ...mapGetters("profiles", ["allProfiles", "profile"])
  },
  methods: {
    ...mapActions("profiles", ["getProfile"])
  }
};
</script>

<style>
</style>