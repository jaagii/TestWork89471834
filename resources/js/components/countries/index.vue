<template>
  <div>
    <div class="col-xl-12 col-md-12 mb-12 align-items-center">
      <div
        class="card border-left-primary shadow h-100 py-2 align-items-center"
      >
        <div v-if="showMessage">
          <div class="alert alert-success">{{ message }}</div>
        </div>
        <div class="card-body align-items-center">
          <div class="row no-gutters align-items-center">
            <div class="col mr-10 align-items-center">
              <br />

              <div style="float: right">
                <router-link :to="{ name: 'MainIndex' }" class="btn btn-success"
                  >Home</router-link
                >
                <router-link
                  :to="{ name: 'CountriesCreate' }"
                  class="btn btn-primary"
                  >Create Country</router-link
                >

                <div></div>
              </div>
              <br />
              <br />
              <br />
              <table class="table">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Country Name</th>

                    <th>Manage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="country in countries" :key="country.id">
                    <td>{{ country.id }}</td>
                    <td>{{ country.name }}</td>

                    <td>
                      <router-link
                        :to="{
                          name: 'CountriesEdit',
                          params: { id: country.id, name: country.name },
                        }"
                        class="btn btn-success"
                        >Edit</router-link
                      >
                      <button
                        class="btn btn-danger"
                        @click="deleteCountry(country.id)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [],
      showMessage: false,
      message: "",
    };
  },
  created() {
    this.getCountries();
  },
  methods: {
    getCountries() {
      axios
        .get("/api/countries")
        .then((res) => {
          this.countries = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteCountry(id) {
      axios.delete("api/countries/" + id).then((res) => {
        this.showMessage = true;
        this.message = res.data;
        this.getCountries();
      });
    },
  },
};
</script>

<style>
</style>