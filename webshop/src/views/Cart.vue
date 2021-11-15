<template>
  <div id="cartbody" class="pt-5">
    <div class="container px-4 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-5">
          <h4 class="heading">Shopping Bag</h4>
        </div>
        <div class="col-7">
          <div class="row text-right">
            <div class="col-4">
              <h6 class="mt-2">Price</h6>
            </div>
            <div class="col-4">
              <h6 class="mt-2">Size</h6>
            </div>
            <div class="col-4">
              <h6 class="mt-2">Delete</h6>
            </div>
          </div>
        </div>
      </div>
      <ItemsComponent v-for="item in currentCart.shoesList" :key="item.id" :cartSection="item" :place="'cart'"/>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="card text-center" id="checkout">
              <div class="card-body">
                <p class="card-text text-white">Delivery: Free</p>
                <p class="card-text text-white">Subtotal: {{ $store.getters["cart/totalPrice"] }} DKK</p>
                <button class="btn btn-outline-light p-2 mt-5" @click="saveOrder()">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <modal name="successModal">
          <div id="checkoutmodal" class="bg-dark"><p>Your order has been successfully created!</p>
            <div slot="top-right">
              <button @click="closeModal()" class="btn btn-outline-light p-2 mt-5">
                X Close
              </button>
            </div>
          </div>
        </modal>
        <modal name="failureModal">
          <div id="checkoutmodal" class="bg-dark"><p>Oops! Something went wrong, please try again later!</p>
            <div slot="top-right">
              <button @click="$modal.hide('failureModal')" class="btn btn-outline-light p-2 mt-5">
                X Close
              </button>
            </div>
          </div>
        </modal>

      </div>
    </div>
  </div>
</template>

<script>
import ItemsComponent from '../components/ItemsComponent.vue'

const orderService = require("@/shared/services/order.service");

export default {
  components: {ItemsComponent},
  props: ["cartSection"],
  data: () => ({
    currentCart: {},
    currentCartItems: [],
    currentCartId: null
  }),
  methods: {
    getCurrentCart() {
      this.currentCart = this.$store.getters["cart/currentCart"]
      this.currentCartId = this.currentCart.id
    },
    saveOrder() {
      let order = {}
      order = this.currentCart
      order.total = this.$store.getters["cart/totalPrice"]
      order.id = null
      order.status = "Pending"
      orderService.saveOrder(order).then(() => {
        this.$store.dispatch("cart/deleteCurrentCartFromDb", this.currentCartId)
        this.$store.commit("cart/resetCurrentCart")
        this.$modal.show("successModal")
      }).catch(() => {
        this.$store.commit("cart/resetCurrentCart")
        this.$modal.show("failureModal")
      })
    },
    closeModal() {
      this.$modal.hide('successModal')
      this.$router.push({name: "Shop"})
    }
  },
  computed: {
    total: function () {
      return this.$store.getters["cart/totalPrice"]
    }
  },
  beforeMount() {
    this.getCurrentCart()
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

#checkoutmodal {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
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