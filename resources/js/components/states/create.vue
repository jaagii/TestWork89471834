<template>
  <div>
    <div class="col-xl-12 col-md-12 mb-12 align-items-center">
      <div
        class="card border-left-primary shadow h-100 py-2 align-items-center"
      >
        <div class="card-body align-items-center">
          <div class="row no-gutters align-items-center">
            <div class="col mr-10 align-items-center">
              <router-link :to="{ name: 'StatesIndex' }" class="loat:right"
                >Back</router-link
              >
              <form @submit.prevent="storeState">
                <div class="form-group row">
                  <label for="name" class="col-md-8 col-form-label text-md-left"
                    >State Name</label
                  >

                  <div class="col-md-10">
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      name="name"
                      required
                      autocomplete="name"
                      autofocus
                      v-model="form.name"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="country_id"
                    class="col-md-8 col-form-label text-md-left"
                    >Country</label
                  >

                  <div class="col-md-10">
                    <select
                      v-model="form.country_id"
                      name="country_id"
                      class="form-control"
                      aria-label="Default select example"
                    >
                      <option
                        v-for="country in countries"
                        :key="country.id"
                        :value="country.id"
                      >
                        {{ country.name }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="form-group row mb-0">
                  <div class="col-md-10 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                      Create
                    </button>
                  </div>
                </div>
              </form>
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
      form: {
        name: "",
        country_id: "",
      },
    };
  },
  created() {
    this.getCountries();
  },
  methods: {
    getCountries() {
      axios
        .get("/api/states/countries")
        .then((res) => {
          this.countries = res.data;
        })
        .catch((error) => {
          console.log(console.error);
        });
    },

    storeState() {
      axios
        .post("/api/states", {
          name: this.form.name,
          country_id: this.form.country_id,
        })
        .then((res) => {
          this.$router.push({ name: "StatesIndex" });
        });
    },
  },
};
</script>

<style>
</style>