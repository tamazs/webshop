<template>
    <div id="shopbody">
        <div class="container py-5">
            <div class="row">
                <ShopCard 
                v-for="item in shoes" :key="item.id" :cardsSection="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ShopCard from '../components/ShopCard.vue'

export default {
  components: { 
      ShopCard
      },
    data() {
        return {
            shoes: [
                {
                    id: 1,
                    img: require('../assets/jordan1.jpeg'),
                    name: 'Air Jordan 1 TS',
                    price: 5200
                },
                {
                    id: 2,
                    img: require('../assets/jordan6s.jpeg'),
                    name: 'Air Jordan 6 TS',
                    price: 1499
                },
                {
                    id: 3,
                    img: require('../assets/dunk.jpeg'),
                    name: 'Dunk',
                    price: 999
                },
                {
                    id: 4,
                    img: require('../assets/court.jpeg'),
                    name: 'Air Jordan 1 Court',
                    price: 3000
                },
                {
                    id: 5,
                    img: require('../assets/jordan5.jpeg'),
                    name: 'Air Jordan 5 OW',
                    price: 4300
                },
                {
                    id: 6,
                    img: require('../assets/adidas.jpeg'),
                    name: 'Adidas Superearth',
                    price: 3100
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#shopbody {
    background-color: black;
    padding: 20px;
}


</style>