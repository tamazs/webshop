<template>
    <div class="inforowbody">
        
            <div class="card-deck">
                <div class="row">
                <div class="card col-lg-4 col-sm-12">
                    <img class="card-img-top" :src="require('/src/assets/truck.svg')" id="truck" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">Free Shipping</h5>
                    <p class="card-text">Free shipping to EU member countries.</p>
                    </div>
                </div>
                <div class="card col-lg-4 col-sm-12">
                    <img class="card-img-top" :src="require('/src/assets/money.svg')" id="money" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">Money-back Guarantee </h5>
                    <p class="card-text">If you don't like what you ordered, we will give your money back.</p>
                    </div>
                </div>
                <div class="card col-lg-4 col-sm-12">
                    <img class="card-img-top" :src="require('/src/assets/phone.svg')" id="phone" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">Customer Support</h5>
                    <p class="card-text">Call our customer support with any questions 24/7.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

*{
    overflow: hidden;
}

template{
    font-family: 'Raleway', sans-serif;
}

.inforowbody {
    background-color: black;
    padding-top: 100px;
}

.card-deck{
    background-color: black;
}

.card {
    color: white;
    background-color: black;
    text-align: center;
    font-weight: 100;
    font-size: 16px;
    margin-top: 100px;
}

#truck, #money, #phone {
    height: 40px;
    width: auto;
}

@media only screen and (min-width: 992px) {
    .card {
    margin-top: 0;
    }
}

</style>

<script>
export default {
    
}
</script>