<template>
    <div class="col">
        <router-link to="/product">
            <div class="card mb-5" style="width: 14rem;">
                <img :src="cardsSection.img" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{ cardsSection.name }}</h5>
                    <p class="card-text">{{ cardsSection.price }} DKK</p>
            </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ["cardsSection"],

    
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