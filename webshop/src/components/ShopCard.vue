<template>
    <div class="col">
        <router-link to="/product">
            <div class="card mb-5" style="width: 14rem;">
                <img :src="cardsSection.img" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{ cardsSection.name }}</h5>
                    <p class="card-text">{{ cardsSection.price }} DKK</p>
                <button class="btn btn-outline-light p-2" type="submit">Add to cart</button>
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
.card {
    color: white;
    background-color: black;
    text-decoration: none;
}

router-link{
    text-decoration: none;
}
</style>