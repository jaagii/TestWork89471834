<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              Update Countries
              <router-link :to="{ name: 'CountriesIndex' }" class="float-right"
                >Back</router-link
              >
            </div>

            <div class="card-body">
              <form @submit.prevent="updateCountry">
                <div class="form-group row">
                  <label
                    for="name"
                    class="col-md-4 col-form-label text-md-right"
                    >Country Name</label
                  >

                  <div class="col-md-6">
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>
                </div>

                <div class="form-group row mb-0 mt-4">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                      Update
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
  components: {},
  created() {
    this.getCountry();
  },
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    getCountry() {
      axios
        .get("/api/countries/" + this.$route.params.id)
        .then((res) => {
          this.form = res.data.data;
        })
        .catch((error) => {
          console.log(console.error);
        });
    },

    updateCountry() {
      axios
        .put("/api/countries/" + this.$route.params.id, {
          name: this.form.name,
        })
        .then((res) => {
          this.$router.push({ name: "CountriesIndex" });
        });
    },
  },
};
</script>

<style></style>
