<template>
  <section class="profiles">
    <div class="container">
      <div class="row">
        <div class="boxedcontainer col-md-8">
          <div class="col-md-12 bg-white">
            <h4 class="mt-4 ml-2 mb-2 bg-white">Profiles</h4>
          </div>
          <div class="bg-white mt-4 card-group">
            <div
              v-for="profile in allProfiles"
              :key="profile.id"
              class="col-sm-4 bg-white mb-0 mt-2"
            >
              <div class="profilecard">
                <img
                  :src="endPoint+profile.profile_image[0].url"
                  alt="Shravan "
                  style="width: 100%;"
                />
                <h4 class="mt-1 p-1">{{profile.name}}</h4>
                <p class="profiletitle">{{profile.title}}</p>
                <hr />
                <div>
                  <ul class="d-flex flex-row profileicons justify-content-around">
                    <li>
                      <a target="_blank" href="https://www.facebook.com/creativedonut">
                        <i class="fa fa-thumbs-o-up"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/dropyourbass">
                        <i class="fa fa-book"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://github.com/vipulsaxena">
                        <i class="fa fa-newspaper-o"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.behance.net/vipulsaxena">
                        <i class="fa fa-video-camera"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 ml-0">
          <div class="d-flex justify-content-center">
            <img
              src="https://via.placeholder.com/220x540?text=Vertical+Banner"
              alt
              class="responsive img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      endPoint: process.env.apiUrl
    }
  },
  name: "Profiles",
  methods: {
    ...mapActions("profiles", ["fetchProfiles"])
  },
  computed: mapGetters("profiles", ["allProfiles"]),
  created() {
    this.fetchProfiles();
  }
};
</script>

<style>
</style>