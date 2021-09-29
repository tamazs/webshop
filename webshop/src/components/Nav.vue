<template>
    <nav class="navbar navbar-expand-lg navbar-black bg-black">
  <div class="container-fluid">
    <router-link class="navbar-brand" id="logo" to="/">Streetverse</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" id="burger"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link text-white" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item text-white" href="#">Men</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-white" href="#">Woman</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/contact">Contact</router-link>
        </li>
      </ul>
      <p class="text-white">Welcome back</p>
      <router-link to="/login"><img :src="require('/src/assets/person.svg')" class="right" id="login"></router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

template{
    font-family: 'Raleway', sans-serif;
}



#logo{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    color: white;
}

#login{
  height: 25px;
  width: auto;
  margin-right: 10px;
}

router-link{
    color: white;
}



ul{
    background-color: black;
}

#search {
    background-color: black;
}

@media only screen and (min-width: 890px) {
    #logo{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 40px;
    color: white;
}
}
</style>