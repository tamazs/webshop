<template>
    <div class="adminbuttons">
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <router-link to="/orders">
                    <div class="card">
                    <img class="card-img-top" :src="require('/src/assets/file.svg')" id="file" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Orders</h5>
                    </div>
                    </div>
                </router-link>
            </div>
            <div class="col">
                <router-link to="/newitems">
                    <div class="card">
                    <img class="card-img-top" :src="require('/src/assets/plus.svg')" id="plus" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Add new item</h5>
                    </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

template{
    font-family: 'Raleway', sans-serif;
}

.adminbuttons {
    background-color: black;
    padding-top: 100px;
}

.col {
    padding: 150px;
}

.card {
    color: white;
    background-color: black;
    text-align: center;
    font-weight: 100;
    font-size: 16px;
    margin-top: 100px;
    padding: 60px;
    border: 1px white solid;
}

#plus, #file {
    height: 40px;
    width: auto;
    margin-bottom: 30px;
}

@media only screen and (min-width: 992px) {
    .card {
    margin-top: 0;
    }
}
</style>