<template>
<div id="signupbody">
    <form
        class="p-5"
      @submit.prevent="register"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card bg-dark" id="card">
              <div class="card-body">
                <h3 class="font-weight-light mb-3 text-white text-uppercase">Sign up</h3>
                <div class="form-row">
                  <div
                    v-if="error"
                    class="col-12 alert alert-danger px-3"
                  >
                    {{ error }}
                  </div>
                  <section class="col-sm-8 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="displayName"
                    >Display Name</label>
                    <input
                      class="form-control"
                      type="text"
                      id="displayName"
                      placeholder="Display Name"
                      name="displayName"
                      required
                      v-model="displayName"
                    />
                  </section>
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
                      v-model="passOne"
                    />
                  </section>
                  <section class="col-sm-8 form-group mt-3">
                    <input
                      class="form-control"
                      type="password"
                      required
                      placeholder="Repeat Password"
                      v-model="passTwo"
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
export default {
   
}
</script>

<style lang="scss" scoped>
#signupbody {
    height: 100vh;
    width: 100vw;
    background-color: black;
}

form {
    top: 30%;
}

#card {
  padding: 60px;
}
</style>