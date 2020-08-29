<template>
  <section class="courses">
    <div class="container">
      <div class="row">
        <div class="boxedcontainer">
          <h4 class="mt-4 ml-4 mb-0 bg-white">Browse Courses</h4>
          <div class="card-group" v-for="course in allCourses" :key="course.id">
            <div class="col-md-4 bg-white">
              <div class="card coursediv card-custom bg-white border-white border-0">
                <div
                  class="card-custom-img"
                  style="
                      background-image: url(https://via.placeholder.com/300x200?text=biggmind.com);
                    "
                ></div>
                <div class="card-custom-avatar">
                  <img
                    class="img-fluid"
                    src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                    alt="Avatar"
                  />
                </div>
                <div class="card-body bg-white" style="overflow-y: auto; margin-bottom: 0px;">
                  <h4 class="card-title bg-white">{{course.title}}</h4>
                  <p class="card-text bg-white">
                    A small detail about the course
                    <a href="#" target="_blank">with a link element</a>
                    find the best course in the market
                  </p>
                </div>
                <div
                  class="card-footer bg-white"
                  style="background: bg-white; border-color: inherit;"
                >
                  <a href="#" class="btn searchbtn">Check out</a>
                  <a href="#" class="btn searchbtninverse">Other option</a>
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Courses",
  methods: { ...mapActions(["fetchCourses"]) },
  computed: mapGetters(["allCourses"]),
  created() {
    this.fetchCourses();
  }
};
</script>

<style>
</style>