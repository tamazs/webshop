<template>
    <div id="shopwomanbody">
        <div class="row row-cols-1 row-cols-md-3 g-4" v-for="item in shoes" :key="item.name">
            <div class="col">
                <div class="card">
                <img :src="item.img" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">{{ item.price }} DKK</p>
                    <button class="btn btn-outline-light p-2" type="submit">Add to cart</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shoes: [
                {
                    img: require('../assets/jordan1.jpeg'),
                    name: 'Air Jordan 1 TS',
                    price: 5200
                },
                {
                    img: require('../assets/jordan6s.jpeg'),
                    name: 'Air Jordan 6 TS',
                    price: 1499
                },
                {
                    img: require('../assets/dunk.jpeg'),
                    name: 'Dunk',
                    price: 999
                },
                {
                    img: require('../assets/court.jpeg'),
                    name: 'Air Jordan 1 Court',
                    price: 3000
                },
                {
                    img: require('../assets/jordan5.jpeg'),
                    name: 'Air Jordan 5 OW',
                    price: 4300
                },
                {
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
#shopwomanbody {
    background-color: black;
    padding: 20px;
}

.card {
    color: white;
    background-color: black;
}
</style>