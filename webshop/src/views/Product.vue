<template>
  <div class="container-fluid pt-5 p-0">
    <div class="card">
      <div class="row">
        <div class="col-md-6">
          <img :src="currentShoes.url" id="productimg">
        </div>
        <div class="col-md-6 pt-5" id="productinfo">
          <h1 id="producttitle">{{ currentShoes.name }}</h1>
          <p id="productprice">{{ currentShoes.price }} DKK</p>
          <div class="form-group mb-3">
            <label class="filter-col mb-1" style="margin-right:0;" for="pref-perpage">Size:</label>
            <select id="pref-perpage" class="form-control" v-model="selectedSize">
              <option v-for="size in currentShoes.sizes" :key="size" :value="size">{{ size }}
              </option>
            </select>
          </div> <!-- form group [rows] -->
          <button class="btn btn-outline-light p-2 mt-5" type="submit" id="cartbtn" @click="addShoesItemToCart">Add to
            cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const shoesService = require("@/shared/services/shoes.service");
export default {
  data: () => ({
    currentShoes: {},
    productId: null,
    currentCart: null,
    selectedSize: null,

  }),
  methods: {
    loadCurrentShoes() {
      shoesService.getShoesById(this.productId).then(querySnapshot => {
        this.currentShoes = querySnapshot.data();
      })
    },
    addShoesItemToCart() {
      if (this.currentCart?.id == null && this.currentCart?.uemail == null && this.currentCart?.uid == null) {
        this.currentCart.uemail = this.$store.getters["authentication/currentUser"].email
        this.currentCart.uid = this.$store.getters["authentication/currentUser"].uid
        this.currentCart.shoesList = []
        this.currentCart.shoesList.selectedSizes = []
      }
      const itemToAdd = this.shoesItemBuilder()

      this.currentCart.shoesList.push(itemToAdd)
      this.$store.dispatch("cart/pushItemToCart", this.currentCart).then(() => this.getCurrentCart())
    },
    shoesItemBuilder() {
      const itemToAdd = {}
      itemToAdd.selectedSize = this.selectedSize
      itemToAdd.price = this.currentShoes.price
      itemToAdd.url = this.currentShoes.url
      itemToAdd.brand = this.currentShoes.brand
      itemToAdd.name = this.currentShoes.name
      itemToAdd.gender = this.currentShoes.gender
      itemToAdd.productId = this.productId
      itemToAdd.quantity = 1
      return itemToAdd
    },
    getCurrentCart(){
      this.currentCart = this.$store.getters["cart/currentCart"]
    }
  },
  created() {
    this.productId = this.$route.params.id
    this.getCurrentCart()
  },
  beforeMount() {
    this.loadCurrentShoes()
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

.card {
  background-color: black;
  color: white;
  margin: 0;
  font-family: 'Raleway', sans-serif;
}

#productimg {
  height: 500px;
  width: auto;
}

#producttitle {
  margin-top: 50px;
}

#productprice {
  margin-top: 60px;
}

#cartbtn {
  margin-top: 30px;
}

#pref-perpage {
  width: 20vw;
}

@media screen and (max-width: 768px) {
 #productimg {
  height: auto;
  width: 100vw;
  }

  #productinfo {
    padding: 50px;
  }

}
</style>
