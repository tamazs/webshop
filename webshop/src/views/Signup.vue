<template>
  <div id="signupbody">
    <form
        class="p-5"
        @submit.prevent="checkAndSave"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card bg-dark" id="card">
              <div class="card-body">
                <h3 class="font-weight-light mb-3 text-white text-uppercase">Sign up</h3>
                <div class="form-row">
                  <div
                      v-if="errors.length"
                      class="col-12 alert alert-danger px-3"
                  >
                    <div v-for="error in errors" :key="error">
                      {{ error }}
                    </div>
                  </div>
                </div>
                <section class="col-sm-8 form-group mt-3">
                  <input
                      class="form-control"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      required
                      name="email"
                      v-model="email"
                  />
                </section>
                <div class="form-row">
                  <section class="col-sm-8 form-group mt-3">
                    <input
                        class="form-control"
                        type="password"
                        placeholder="Password"
                        v-model="password"
                    />
                  </section>
                  <section class="col-sm-8 form-group mt-3">
                    <input
                        class="form-control"
                        type="password"
                        required
                        placeholder="Repeat Password"
                        v-model="passwordRepeat"
                    />
                  </section>
                </div>
                <div class="form-group text-right mb-0">
                  <button
                      class="btn btn-outline-light p-2 mt-5"
                      type="submit"
                  >
                    Sign up
                  </button>
                </div>
                <div class="position-fixed top-0 end-2" style="z-index: 11">
                  <div
                      class="toast align-items-center"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                      id="successToast"
                  >
                    <div class="d-flex">
                      <div class="toast-body">
                        Your profile has been created successfully and you are logged in!
                      </div>
                      <button
                          type="button"
                          class="btn-close me-2 m-auto"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2 text-white">
      or
      <router-link to="/login" class="text-white text-uppercase">login</router-link>
    </p>
  </div>
</template>

<script>

const authService = require("@/shared/services/auth.service");

export default {
  data: () => ({
    password: null,
    passwordRepeat: null,
    email: null,
    errors: [],
    role: 'admin'
  }),
  methods: {
    checkAndSave() {
      this.errors = [];

      if (!this.password || !this.passwordRepeat) {
        this.errors.push("Password required");
      } else if (this.password !== this.passwordRepeat) {
        this.errors.push("Password is not matching")
      }

      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        authService.signUp(this.email, this.password).then(() => {
          this.$router.push({name:"Shop"})
        })
      }

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

#signupbody {
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
