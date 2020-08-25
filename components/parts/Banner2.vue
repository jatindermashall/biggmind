<template>
  <!--Search bar-->
  <div class="container-fluid searchsection">
    <div class="row">
      <div class="col justify-content-center d-flex">
        <form
          class="form-holder row justify-content-center d-flex align-items-stretch"
          @submit.prevent
        >
          <v-col cols="10" sm="7" md="4">
            <v-autocomplete
              v-model="search"
              :items="profiles"
              name="searchname"
              id="searchname"
              height="30"
              chips
              clearable
              hide-details
              hide-selected
              item-text="name"
              item-value="symbol"
              label="Search for entrepreneur..."
              solo
            ></v-autocomplete>
          </v-col>
          <v-btn
            dark
            color="#333333"
            large
            depressed
            class="mt-3 pa-4"
            @click="searchFilter"
          >Primary</v-btn>
        </form>
      </div>
    </div>
  </div>
  <!--Search bar ends here-->
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      selected: null,
      showDropdown: false,
      profilelist: [],
      search: null,
      tab: null
    };
  },

  name: "Profiles",
  methods: {
    ...mapActions("profiles", ["fetchProfiles", "setSearch"]),

    async searchFilter() {
      if (this.search) {
        await this.setSearch({ text: this.search, type: "profiles" });
        if (this.search != "") this.$router.push({ name: "profileFilter" });
      }
    }
  },
  computed: {
    ...mapState("profiles", ["profiles", "filterProfile"]),
    ...mapGetters("profiles", ["allProfiles"]),
    profileArr() {
      if (this.$nuxt.$route.name === "index") return this.profiles;
      if (this.$nuxt.$route.name === "profileFilter") return this.filterProfile;
    }
  },
  created() {
    this.fetchProfiles();
  }
};
</script>

<style scoped>
.v-card {
  margin-bottom: 0;
}
</style>

