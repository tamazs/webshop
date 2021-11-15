<template>
  <div id="loginbody">
    <form class="p-5" @submit.prevent="checkAndSave">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-dark" id="card">
              <div class="card-body">
                <h3 class="font-weight-light mb-3 text-white text-uppercase">Log in</h3>
                <section class="form-group">
                  <div
                      v-if="errors.length"
                      class="col-12 alert alert-danger px-3"
                  >
                    <div v-for="error in errors" :key="error">
                      {{ error }}
                    </div>
                  </div>
                  <input
                      required
                      class="form-control"
                      type="email"
                      id="email"
                      placeholder="Email"
                      v-model="email"
                  />
                </section>
                <section class="form-group mt-3">
                  <input
                      required
                      class="form-control"
                      type="password"
                      placeholder="Password"
                      v-model="password"
                  />
                </section>
                <div class="form-group text-right mb-0">
                  <button
                      class="btn btn-outline-light p-2 mt-5"
                      type="submit"
                  >Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2 text-white">
      or
      <router-link to="/signup" class="text-white text-uppercase">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: null,
      password: null,
      errors: []
    };
  },
  methods: {
    checkAndSave() {
      this.errors = [];

      if (!this.password) {
        this.errors.push("Password required");
      }

      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      const credentials = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch("authentication/login", credentials).then(() => {
        this.$router.push({name: "Shop"})
      })
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

#loginbody {
  height: 100vh;
  width: 100vw;
  background-color: black;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
}

form {
  top: 30%;
}

#card {
  padding: 60px;
}
</style>
