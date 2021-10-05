<template>
    <div id="shopmanbody">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                <img :src="require('/src/assets/jordan1.jpeg')" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">5200 DKK</p>
                    <button class="btn btn-outline-light p-2" type="submit">Add to cart</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img :src="require('/src/assets/jordan6s.jpeg')" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">1499 DKK</p>
                    <button class="btn btn-outline-light p-2" type="submit">Add to cart</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img :src="require('/src/assets/dunk.jpeg')" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">999 DKK</p>
                    <button class="btn btn-outline-light p-2" type="submit">Add to cart</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img :src="require('/src/assets/court.jpeg')" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">3000 DKK</p>
                    <button class="btn btn-outline-light p-2" type="submit">Add to cart</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img :src="require('/src/assets/jordan5.jpeg')" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">4300 DKK</p>
                    <button class="btn btn-outline-light p-2" type="submit">Add to cart</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img :src="require('/src/assets/adidas.jpeg')" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">3100 DKK</p>
                    <button class="btn btn-outline-light p-2" type="submit">Add to cart</button>
                </div>
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
#shopmanbody {
    background-color: black;
    padding: 20px;
}

.card {
    color: white;
    background-color: black;
}
</style>