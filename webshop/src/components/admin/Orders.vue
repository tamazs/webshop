<template>
  <div id="cartbody" class="pt-5">
    <div class="container px-4 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-5">
          <h4 class="heading">Orders</h4>
        </div>
        <div class="col-7">
          <div class="row text-right">
            <div class="col-6">
              <h6 class="mt-2">Price</h6>
            </div>
            <div class="col-6">
              <h6 class="mt-2">Status</h6>
            </div>
          </div>
        </div>
      </div>
      <ItemsComponent v-for="order in orders" :key="order.id" :cartSection="order" :place="'orders'"/>
    </div>
  </div>
</template>

<script>
import ItemsComponent from '../ItemsComponent'


export default {
  components: {ItemsComponent},
  data: () => ({
    orders: [],
  }),
  methods: {
    getOrders() {
      this.orders = this.$store.getters["order/ordersList"]
    }
  },
  beforeMount() {
    this.getOrders()
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

.plus-minus {
  position: relative
}

.plus {
  position: absolute;
  top: -4px;
  left: 12px;
  cursor: pointer
}

.minus {
  position: absolute;
  top: 8px;
  left: 14px;
  cursor: pointer
}

.book,
.book-img {
  width: 120px;
  height: 180px;
  border-radius: 5px
}

.book {
  margin: 20px 15px 5px 15px
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

  .book,
  .book-img {
    width: 100px;
    height: 150px
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
}
</style>
