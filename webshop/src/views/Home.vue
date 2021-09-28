<template>
  <div class="home">
    <Landing/>
    <Landing-info-row/>
  </div>
</template>

<script>
import Landing from '../components/Landing.vue'
import LandingInfoRow from '../components/LandingInfoRow.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Landing,
    LandingInfoRow
  }
}
</script>

