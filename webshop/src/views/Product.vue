<template>
  <div class="container-fluid pt-5 p-0">
    <div class="card">
      <div class="row">
        <div class="col-md-6">
          <img :src="currentShoes.url" id="productimg">
        </div>
        <div class="col-md-6 pt-5">
          <h1 id="producttitle">{{ currentShoes.name }}</h1>
          <p id="productprice">{{ currentShoes.price }} DKK</p>
          <div class="form-group mb-3">
            <label class="filter-col mb-1" style="margin-right:0;" for="pref-perpage">Size:</label>
            <select id="pref-perpage" class="form-control">
              <option v-for="size in currentShoes.sizes" :key="size" :value="size">{{ size }}</option>
            </select>
          </div> <!-- form group [rows] -->
          <button class="btn btn-outline-light p-2 mt-5" type="submit" id="cartbtn">Add to cart</button>
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
    productId: null
  }),
  methods: {
    getShoes() {
      shoesService.getShoesById(this.productId).then(querySnapshot => {
        this.currentShoes = querySnapshot.data();
      })
    }
  },
  created() {
    this.productId = this.$route.params.id
  },
  beforeMount() {
    this.getShoes()
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
</style>