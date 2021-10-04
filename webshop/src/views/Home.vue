<template>
  <div class="home">
    <Landing/>
    <Landing-info-row/>
    <Landing-shop-row/>
  </div>
</template>

<script>
import Landing from '../components/Landing.vue'
import LandingInfoRow from '../components/LandingInfoRow.vue'
import LandingShopRow from '../components/LandingShopRow.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Landing,
    LandingInfoRow,
    LandingShopRow
  }
}
</script>

