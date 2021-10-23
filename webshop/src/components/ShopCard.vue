<template>
    <div class="col">
        <div @click="redirectToProductPage">
            <div class="card mb-5" style="width: 14rem;">
                <img :src="cardsSection.url" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{ cardsSection.name }}</h5>
                    <p class="card-text">{{ cardsSection.price }} DKK</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["cardsSection"],
    methods: {
        redirectToProductPage(){
        this.$router.push({name:'Product', params: {id: this.cardsSection.id}})
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

.card {
    color: white;
    background-color: black;
    text-decoration: none;
}

.col {
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
}

router-link{
    text-decoration: none;
}
</style>