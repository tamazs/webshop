<template>
  <div>
    <div v-if="place === 'cart'" class="row d-flex justify-content-center border-top">
        <div class="col-5">
            <div class="row d-flex">
                <div class="item"> <img :src="cartSection.url" class="item-img"> </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">{{ cartSection.name }}</h6>
                </div>
            </div>
        </div>
        <div class="my-auto col-7">
            <div class="row text-right">
                <div class="col-4">
                    <h6 class="mob-text">{{ cartSection.price }} DKK</h6>
                </div>
              <div class="col-4">
                    <h6 class="mob-text">{{ cartSection.selectedSize }}</h6>
                </div>
              <div class="col-4">
                    <button @click="removeShoesFromCart" class="btn text-light">X</button>
                </div>
            </div>
        </div>
    </div>

    <div v-if="place === 'orders'" class="row d-flex justify-content-center border-top">
      <div class="col-5">
        <div class="row d-flex">
          <div class="my-auto flex-column d-flex pad-left"><p class="mb-0 text-uppercase" id="orderid">{{cartSection.id}}</p></div>
          <div class="my-auto flex-column d-flex pad-left">
            <h6 class="mob-text">{{ cartSection.name }}</h6>
          </div>
        </div>
      </div>
      <div class="my-auto col-7">
        <div class="row text-right">
          <div class="col-6">
            <div class="row d-flex justify-content-end px-3">
              <p class="mb-0" id="cnt1">{{cartSection.total}} DKK</p>
            </div>
          </div>
          <div class="col-6">
            <button class="btn btn-outline-light" @click="changeStatus()">{{cartSection.status}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartSection","place"],
  methods: {
    changeStatus(){
      this.cartSection.status = "Shipping"
      this.$store.dispatch("order/changeOrderStatus", this.cartSection)
    },
    removeShoesFromCart(){
      let removeObject = {}
      removeObject.productId = this.cartSection.productId
      removeObject.productSize = this.cartSection.selectedSize
      removeObject.currentCart = this.$store.getters["cart/currentCart"]

      this.$store.dispatch("cart/deleteShoesFromCart", removeObject)
    }
  },
  beforeMount() {
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

.item,
.item-img {
    width: 180px;
    height: 180px;
    border-radius: 5px
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

    .item,
    .item-img {
        width: 100px;
        height: 100px
    }

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

    #orderid {
      word-wrap: break-word;
    }
}
</style>