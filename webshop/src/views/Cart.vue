<template>
    <div id="cartbody" class="pt-5">
    <div class="container px-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-5">
            <h4 class="heading">Shopping Bag</h4>
        </div>
        <div class="col-7">
            <div class="row text-right">
                <div class="col-6">
                    <h6 class="mt-2">Quantity</h6>
                </div>
                <div class="col-6">
                    <h6 class="mt-2">Price</h6>
                </div>
            </div>
        </div>
    </div>
    <CartItems v-for="item in cart" :key="item.id" :cartSection="item" />
    <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <div class="card text-center" id="checkout">
                <div class="card-body">
                    <p class="card-text text-white">Delivery: Free</p>
                    <p class="card-text text-white">Subtotal: 3000 DKK</p>
                    <button class="btn btn-outline-light p-2 mt-5" type="submit">Checkout</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
    </div>
</template>

<script>
import CartItems from '../components/CartItems.vue'
export default {
  components: { CartItems },
    props: ["cartSection"],
    data() {
        return {
            cart: [],

        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

#cartbody {
    color: white;
    overflow-x: hidden;
    background-color: black;
    font-family: 'Raleway', sans-serif;
}

#checkout {
    background-color: black;
    border: 3px solid white;
}

.border-top {
    border-top: 1px solid #EEEEEE !important;
    margin-top: 20px;
    padding-top: 15px
}

.card {
    margin: 40px 0px;
    padding: 40px 50px;
    border: none;
}

#checkout {
    float: left
}

#check-amt {
    float: right
}

@media screen and (max-width: 768px) {

    .card {
        padding-left: 15px;
        padding-right: 15px
    }

    .mob-text {
        font-size: 13px
    }

    .pad-left {
        padding-left: 20px
    }
}
</style>