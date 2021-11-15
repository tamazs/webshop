<template>
    <div class="admininforowbody">
            <div class="card-deck">
                <div class="row">
                <div class="card col-lg-4 col-sm-12 text-center">
                    <div class="card-body">
                    <h5 class="card-title">{{$store.getters["order/orderCount"]}}</h5>
                    <p class="card-text">Number of orders</p>
                    </div>
                </div>
                <div class="card col-lg-4 col-sm-12 text-center">
                    <div class="card-body">
                    <h5 class="card-title">{{ $store.getters["order/totalIncome"] }} DKK</h5>
                    <p class="card-text">Total Income</p>
                    </div>
                </div>
                <div class="card col-lg-4 col-sm-12">
                    <div class="card-body">
                    <h5 class="card-title">{{$store.getters["order/totalNumberOfItems"]}}</h5>
                    <p class="card-text">Number of ordered items</p>
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

.admininforowbody {
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
    border-right: 1px white solid;
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
