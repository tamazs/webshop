<template>
  <nav class="navbar navbar-expand-lg navbar-black fixed-top bg-black">
    <div class="container-fluid">
      <router-link class="navbar-brand" id="logo" to="/">Streetverse</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" id="burger"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/shop">Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item" v-if="$store.getters['authentication/isAdmin'] === true">
            <router-link class="nav-link text-white" to="/admin">Admin</router-link>
          </li>
        </ul>
        <router-link to="/cart" class="nav-item" id="cartlink">
          <img :src="require('/src/assets/cart.svg')" id="cart">
          <p  class="text-white" id="cartcount">{{$store.getters["cart/currentCartSize"]}}</p>
        </router-link>
        <div class="form-group text-right mb-0">
          <button
              v-if="!$store.getters['authentication/token']"
              @click="$router.push('/login')"
              class="btn btn-outline-light p-2"
              type="submit">Log in
          </button>
        </div>
        <div class="form-group text-right mb-0">
          <button
              v-if="$store.getters['authentication/token']"
              class="btn btn-outline-light p-2"
              @click="$store.dispatch('authentication/logout')">Log out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () =>({
  }),
  beforeMount() {
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap");

template {
  font-family: "Raleway", sans-serif;
}

nav {
  z-index: 4;
}

#logo {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  color: white;
}

#login {
  height: 25px;
  width: auto;
  margin-right: 10px;
}

#cart {
  height: 25px;
  width: auto;
  margin-right: 5px;
}

router-link {
  color: white;
}

#cartcount {
  margin-right: 40px;
  font-size: 25px;
  margin-bottom: 0;
}

ul {
  background-color: black;
}

#search {
  background-color: black;
}

#cartlink {
  display: flex;
  align-items: center;
}

@media only screen and (min-width: 890px) {
  #logo {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 40px;
    color: white;
  }
}
</style>