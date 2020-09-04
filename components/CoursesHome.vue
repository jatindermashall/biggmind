<template>
  <section class="courses">
    <div class="container">
      <div class="row">
        <div class="boxedcontainer">
          <h4 class="mt-4 ml-4 mb-0 bg-white">Browse Courses</h4>
          <skeleton-loader  v-if="loading"></skeleton-loader>
          <div class="card-group" v-else v-for="course in allCourses" :key="course.id">
            <div class="col-md-4 bg-white">
              <div class="card coursediv card-custom bg-white border-white border-0">
                <div class="card-body bg-white" style="overflow-y: auto; margin-bottom: 0px;">
                  <v-row>
                    <v-col cols="6" md="3">
                      <v-avatar>
                        <img :src="endPoint + course.profile.profile_image[0].url" alt="John" />
                      </v-avatar>
                    </v-col>
                    <v-col cols="12" md="6">
                      <b>{{ course.title }}</b>
                    </v-col>
                  </v-row>
                  <p class="card-text bg-white">{{ course.description.substring(0, 300) }}...</p>
                </div>
                <div
                  class="card-footer bg-white"
                  style="background: bg-white; border-color: inherit;"
                >
                  <nuxt-link
                    :to="`course/${course.id}.${course.title}`"
                    class="btn searchbtn"
                  >Check out</nuxt-link>
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
import SkeletonLoader from "./SkeletonLoader";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      endPoint: process.env.imageUrl,
      loading: false
    };
  },
  name: "Courses",
  methods: { ...mapActions("courses", ["fetchCourses"]) },
  computed: mapGetters("courses", ["allCourses"]),
  async created() {
    this.loading = true;
    let res = await this.fetchCourses();
    if (res === true) {
      this.loading = false;
    }
  },
  // updated() {
  //   this.loading = false;
  // }
};
</script>

<style></style>
