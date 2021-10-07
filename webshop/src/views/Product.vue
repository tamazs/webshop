<template>
    <div class="container-fluid pt-5 p-0">
        <div class="card">
            <div class="row">
                <div class="col-md-6">
                    <img :src="require('/src/assets/jordan1.jpeg')" id="productimg">
                </div>
                <div class="col-md-6 pt-5">
                    <h1 id="producttitle">Jordan 1 TS</h1>
                    <p id="productprice">2000 DKK</p>
                    <button class="btn btn-outline-light p-2 mt-5" type="submit" id="cartbtn">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.card {
    background-color: black;
    color: white;
    margin: 0;
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