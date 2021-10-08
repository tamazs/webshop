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
import Filters from '../components/Filters.vue'
import ShopCard from '../components/ShopCard.vue'

export default {
  components: { 
    ShopCard,
    Filters
      },
    data() {
        return {
            shoes: [
                {
                    id: 1,
                    img: require('../assets/jordan1.jpeg'),
                    name: 'Air Jordan 1 TS',
                    price: 5200,
                    gender: 'Man',
                    brand: 'Nike',
                    size: [40,42,44]
                },
                {
                    id: 2,
                    img: require('../assets/jordan6s.jpeg'),
                    name: 'Air Jordan 6 TS',
                    price: 1499,
                    gender: 'Man',
                    brand: 'Nike',
                    size: [42,44]
                },
                {
                    id: 3,
                    img: require('../assets/dunk.jpeg'),
                    name: 'Dunk',
                    price: 999,
                    gender: 'Woman',
                    brand: 'Nike',
                    size: [36,38,40]
                },
                {
                    id: 4,
                    img: require('../assets/court.jpeg'),
                    name: 'Air Jordan 1 Court',
                    price: 3000,
                    gender: 'Man',
                    brand: 'Nike',
                    size: [42]
                },
                {
                    id: 5,
                    img: require('../assets/jordan5.jpeg'),
                    name: 'Air Jordan 5 OW',
                    price: 4300,
                    gender: 'Man',
                    brand: 'Off-White',
                    size: [44]
                },
                {
                    id: 6,
                    img: require('../assets/offdunk.jpeg'),
                    name: 'Dunk OW',
                    price: 2600,
                    gender: 'Woman',
                    brand: 'Off-White',
                    size: [38]
                },
                {
                    id: 7,
                    img: require('../assets/yeezy.jpeg'),
                    name: 'Yeezy 350',
                    price: 4500,
                    gender: 'Woman',
                    brand: 'Adidas',
                    size: [36,40]
                },
                {
                    id: 8,
                    img: require('../assets/j1dye.jpeg'),
                    name: 'Air Jordan 1 Tie Dye',
                    price: 2399,
                    gender: 'Woman',
                    brand: 'Nike',
                    size: [40]
                },
                {
                    id: 9,
                    img: require('../assets/skeleton.jpeg'),
                    name: 'Air Force 1 Skeleton',
                    price: 2200,
                    gender: 'Man',
                    brand: 'Nike',
                    size: [40,42]
                },
                {
                    id: 10,
                    img: require('../assets/yeezy2.jpeg'),
                    name: 'Yeezy 700',
                    price: 3200,
                    gender: 'Woman',
                    brand: 'Adidas',
                    size: [36,38]
                }
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