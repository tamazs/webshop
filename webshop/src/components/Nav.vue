<template>
    <nav class="navbar navbar-expand-lg navbar-black bg-black">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="logo">Streetverse</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon-white" id="burger"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Men</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Woman</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link">Brands</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Contact</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
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

a{
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