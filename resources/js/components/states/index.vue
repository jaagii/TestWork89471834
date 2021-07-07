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
                  :to="{ name: 'StatesCreate' }"
                  class="btn btn-primary"
                  >Create State</router-link
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
                    <th>State Name</th>
                    <th>Country Name</th>
                    <th>Manage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="state in states" :key="state.id">
                    <td>{{ state.id }}</td>
                    <td>{{ state.name }}</td>
                    <td>{{ state.country }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'StatesEdit',
                          params: { id: state.id },
                        }"
                        class="btn btn-success"
                        >Edit</router-link
                      >
                      <button
                        class="btn btn-danger"
                        @click="deleteState(state.id)"
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
      states: [],
      showMessage: false,
      message: "",
    };
  },
  created() {
    this.getStates();
  },
  methods: {
    getStates() {
      axios
        .get("/api/states")
        .then((res) => {
          this.states = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteState(id) {
      axios.delete("api/states/" + id).then((res) => {
        this.showMessage = true;
        this.message = res.data;
        this.getStates();
      });
    },
  },
};
</script>

<style>
</style>