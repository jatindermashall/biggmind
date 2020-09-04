<template >
  <div>
    <!--Hero section -->
    <div>
      <div class="container boxedcontainer bg-transparent">
        <div class="row headersection bg-transparent">
          <div
            class="col-md-3 col-sm-12 littleheaddetail text-center align-self-center column justify-content-lg-center align-items-lg-center"
          >
            
        <div class="d-inline-block"  v-if="profile.profile_image">
              <span class="round-profile"><img
                class="profileimage img-fluid" :src="endPoint + profile.profile_image[0].url"/></span>
              <h2 class="text-center profileheader">{{profile.name}}</h2>
              <tr><td  > <a href="#"><i class="fa fa-facebook-square"></i></a> <a href="#"><i class="fa fa-twitter-square"></i></a> <a href="#"><i class="fa fa-linkedin-square"></i></a> <a href="#"><i class="fa fa-google-plus-square"></i></a></td></tr>
            </div>
              
            
          </div>
          <div class="col-md-9 col-sm-12 bg-transparent">
            <div
              class="card herocard text-left shadow">
              <div class="card-body align-items-center d-flex">
                <div class="col-md-12 col-sm-12">
                <table cellpadding="0" cellspacing="0" class="userDes">
                 <tr><th><i class="fa fa-user" aria-hidden="true"></i> Born:</th> <td>{{profile.dob}}</td></tr>
                 
                 <tr><th><i class="fa fa-usd" aria-hidden="true"></i> Net worth:</th> <td> 18,040 crores USD (2020)</td></tr>
                 
                 <tr><th><i class="fa fa-graduation-cap" aria-hidden="true"></i> Education:</th> <td> Princeton University (1982–1986), River Oaks Elementary School, Miami Palmetto Senior High School</td></tr>
                 <tr><th><i class="fa fa-briefcase" aria-hidden="true"></i> Businesses:</th> <td> Amazon, Self Made</td></tr>
                 
                 <tr><th><i class="fa fa-globe" aria-hidden="true"></i> Citizenship:</th> <td> United States</td></tr>
                 
                  </table>
                  
                  
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
            class="text-center boxedcontainer tabhandler col-md-3 col-sm-12 flex-column d-flex"
          >
            <ul  class="nav tabpillscustomul">
              
                <li class="active tabpillscustom">
                  <a href="#home" data-toggle="tab"  @click="selectedTab = 'home'"  :class="{'active': selectedTab === 'home'}"><i aria-hidden="true" class="fa fa-heart"></i> Overview</a>
                  
                </li>
              
                <li class="tabpillscustom">
                  <a href="#Quotes" :class="{'active': selectedTab === 'quotes'}" data-toggle="tab" @click="selectedTab = 'quotes'"><i aria-hidden="true" class="fa fa-quote-left"></i> Quotes</a>
                  
                </li>
              
                <li class="tabpillscustom">
                  <a href="#Books" data-toggle="tab" @click="selectedTab = 'books'" :class="{'active': selectedTab === 'books'}">Books</a>
                </li>
              
                <li class="tabpillscustom">
                  <a href="#Stories" data-toggle="tab" @click="selectedTab = 'stories'" :class="{'active': selectedTab === 'stories'}">Stories</a>
                </li>
              
                <li class="tabpillscustom">
                  <a href="#News" data-toggle="tab" @click="selectedTab = 'news'" :class="{'active': selectedTab === 'news'}">News</a>
                </li>
              
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
                 <ul class="listing"> <li v-for="(quote, index) in profile.quotes" :key="index">{{index + 1}}. {{quote.content}}</li>
                 </ul>
                </p>
              </div>
            </div>

            <div class="tab-pane" id="Books" :class="{'active': selectedTab === 'books'}">
              <div class="card bg-white boxedcontainer mainsectioncard bookContainer">
                <h1 class="bg-transparent">Books recomendation</h1>
                <hr />

                <v-container class="grey lighten-5">
                  <v-row no-gutters v-for="(book, index) in profile.books" :key="index">
                    <v-col >
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
                    <v-col> {{profile.name}} says
"{{book.book_view}}"<br/>

  <a :href="book.amazon_link"><v-btn
            dark
            color="#333333"
            large
            depressed
            class="mt-3 pa-4"
            @click="searchFilter"
          >Buy Now</v-btn></a>



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