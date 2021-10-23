<template>
  <div id="shopbody">
    <div class="container py-5">
      <Filters/>
      <div class="row">
        <ShopCard
            v-for="item in shoes" :key="item.id" :cardsSection="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
const shoesService = require("@/shared/services/shoes.service");
import Filters from '../components/Filters.vue'
import ShopCard from '../components/ShopCard.vue'

export default {
  components: {
    ShopCard,
    Filters
  },
  data() {
    return {
      shoes: []
    }
  },
  methods: {
    getShoes() {
      shoesService.getShoesList().then(querySnapshot => {
        querySnapshot.forEach(doc => this.shoes.push(doc.data()))
      })
    }
  },
  beforeMount() {
    this.getShoes()
  }
}
</script>

<style lang="scss" scoped>
#shopbody {
    background-color: black;
    padding: 20px;
}
</style>