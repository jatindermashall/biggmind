<template>
  <!--Search bar-->
  <div class="container-fluid searchsection">
    <div class="row">
      <div class="col justify-content-center d-flex">
        <form class="form-holder row justify-content-center d-flex align-items-stretch">
          <input
            class="form-control searchbar"
            type="search"
            v-model="search"
            name
            id
            placeholder="Search stories, profiles, news etc.."
          />
          <div class="btn-group searchdropdown align-items-center">
            <button
              id="dropdownToSelect"
              type="button"
              class="btn btn-light dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="showDropdown = !showDropdown"
            >{{selected ? selected : 'Select'}}</button>
            <div class="dropdown-menu" :class="{'show': showDropdown}" aria-labelledby="dropdownToSelect">
              <button class="dropdown-item" value="profiles" @click="selected = 'Profiles', showDropdown = false">Profiles</button>
              <button class="dropdown-item" value="stories" @click="selected = 'Stories', showDropdown = false">Stories</button>
              <button class="dropdown-item" value="news" @click="selected = 'News', showDropdown = false">News</button>
            </div>
            <button type="submit" class="btn ml-1 searchbtn" @click="searchFilter">Search</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--Search bar ends here-->
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return{
      selected: null,
      search: '',
      showDropdown: false
    }
  },
  methods: {
    ...mapActions('profiles', ['setSearch']),
    async searchFilter() {
      if (this.selected) {
        await this.setSearch({text: this.search, type: this.selected})
      }
    }
  }
};
</script>

<style>
</style>
