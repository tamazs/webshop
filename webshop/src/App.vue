<template>
  <div id="app">
    <div class="super_container">
      <Nav/>
      <router-view/>
      <Footer/>
      <cursor-fx color="white" />
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
}
</style>

<script>
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
export default {
  components: {
    Nav,
    Footer
  }
}
</script>

