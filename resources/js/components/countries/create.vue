<template>
  <div>
    <div class="col-xl-12 col-md-12 mb-12 align-items-center">
      <div
        class="card border-left-primary shadow h-100 py-2 align-items-center"
      >
        <div class="card-body align-items-center">
          <div class="row no-gutters align-items-center">
            <div class="col mr-10 align-items-center">
              <router-link :to="{ name: 'CountriesIndex' }" class="loat:right"
                >Back</router-link
              >
              <form @submit.prevent="storeCountry">
                <div class="form-group row">
                  <label for="name" class="col-md-8 col-form-label text-md-left"
                    >Country Name</label
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
      form: {
        name: "",
      },
    };
  },

  methods: {
    storeCountry() {
      axios
        .post("/api/countries", {
          name: this.form.name,
        })
        .then((res) => {
          this.$router.push({ name: "CountriesIndex" });
        });
    },
  },
};
</script>

<style>
</style>