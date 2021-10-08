<template>
    <div class="landingshopbody">
        <div class="row">
            <router-link to="/shop">
                <div class="card bg-black text-black col-lg-4 offset-lg-1 col-sm-12">
                    <img :src="require('/src/assets/manlanding.jpeg')" class="card-img">
                    <div class="card-img-overlay">
                        <h5 class="card-title">Man</h5>
                        <p class="card-text">Shop our huge variety of man's sneakers.</p>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="row">
            <router-link to="/shop">
                <div class="card bg-black text-black col-lg-4 offset-lg-7 col-sm-12">
                    <img :src="require('/src/assets/womanlanding.jpeg')" class="card-img">
                    <div class="card-img-overlay">
                        <h5 class="card-title">Woman</h5>
                        <p class="card-text">Be trendy and up-to-date with our woman's section.</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

.landingshopbody {
    height: auto;
    background-color: black;
    padding-top: 150px;
    overflow-x: hidden;
    font-family: 'Raleway', sans-serif;
}

.card-title {
        text-transform: uppercase;
        background-color: white;
        font-size: 30px;
        padding: 5px;
        width: max-content;
        margin-top: 150px;
        font-weight: bold;
    }

    .card-text {
        background-color: white;
        padding: 5px;
        width: max-content;
        margin-top: 30px;
        font-size: 16px;
        font-weight: lighter;
    }

    img {
        padding-left: 0;
    }

@media only screen and (min-width: 890px) {

    .card-title {
        text-transform: uppercase;
        background-color: white;
        font-size: 40px;
        padding: 10px;
        width: max-content;
        margin-top: 150px;
        font-weight: bold;
    }

    .card-text {
        background-color: white;
        padding: 10px;
        width: max-content;
        margin-top: 30px;
        font-size: 20px;
        font-weight: lighter;
    }

    img {
        padding-left: 30px;
    }
}
</style>