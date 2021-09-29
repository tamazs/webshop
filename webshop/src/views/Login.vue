<template>
    <div id="signupbody">
    <form class="p-5" @submit.prevent="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-dark">
              <div class="card-body">
                <h3 class="font-weight-light mb-3 text-white text-uppercase">Log in</h3>
                <section class="form-group">
                  <div
                    class="col-12 alert alert-danger px-3" v-if="error"
                  >
                    {{error}}
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
                  >Log in</button>
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
import Firebase from "../firebase"
export default {
    data: function() {
        return{
            email: '',
            password: '',
            error: ""
        };
    },
    methods: {
        login: function() {
            const info = {
                email: this.email,
                password: this.password
            }

            Firebase.auth()
                .signInWithEmailAndPassword(info.email, info.password)
                .then(
                    ()=> {
                        this.$router.push("home")
                    }, error => {
                        this.error = error.message
                    }
                )
        }
    }
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
</style>