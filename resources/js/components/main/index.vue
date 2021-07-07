<template>
  <div>
    <div class="col-xl-12 col-md-12 mb-12 align-items-center">
      <div
        class="card border-left-primary shadow h-100 py-2 align-items-center"
      >
        <div class="card-body align-items-center">
          <div class="row no-gutters align-items-center">
            <div v-if="showMessage">
              <div class="alert alert-success">{{ message }}</div>
            </div>
            <div class="col mr-10 align-items-center">
              <br />

              <div style="float: right">
                <router-link
                  :to="{ name: 'CountriesIndex' }"
                  class="btn btn-success"
                  >Countries</router-link
                >
                <router-link
                  :to="{ name: 'StatesIndex' }"
                  class="btn btn-primary"
                  >States</router-link
                >
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>