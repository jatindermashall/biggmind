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
                  src="https://via.placeholder.com/300x200?text=Profile+Image"
                  alt="Shravan "
                  style="width: 100%;"
                />
                <h4 class="mt-1 p-1">Shravan Bhat</h4>
                <p class="profiletitle">CEO & Founder, Example</p>
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
  name: "Profiles",
  methods: {
    ...mapActions(["fetchProfiles"])
  },
  computed: mapGetters(["allProfiles"]),
  created() {
    this.fetchProfiles();
  }
};
</script>

<style>
</style>