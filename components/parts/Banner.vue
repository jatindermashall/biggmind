<template>
  <!--Search bar-->
  <div class="container-fluid searchsection">
    <div class="row">
      <div class="col justify-content-center d-flex">
        <form class="form-holder row justify-content-center d-flex align-items-stretch">
          <input
            class="form-control searchbar"
            type="search"
            name
            id
            placeholder="Search stories, profiles, news etc.."
          />
          <div class="btn-group searchdropdown align-items-center">
            <button
              type="button"
              class="btn btn-light dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Select</button>
            <div class="dropdown-menu">
              <button class="dropdown-item" type="button">Profiles</button>
              <button class="dropdown-item" type="button">Stories</button>
              <button class="dropdown-item" type="button">News</button>
            </div>
            <button type="submit" class="btn ml-1 searchbtn">Search</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--Search bar ends here-->
</template>
<script>
export default {};
</script>

<style>
</style>
