<template>
    <div class="row d-flex justify-content-center border-top">
        <div class="col-5">
            <div class="row d-flex">
                <div class="item"> <img :src="cartSection.img" class="item-img"> </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">{{ cartSection.name }}</h6>
                </div>
            </div>
        </div>
        <div class="my-auto col-7">
            <div class="row text-right">
                <div class="col-6">
                    <div class="row d-flex justify-content-end px-3">
                        <p class="mb-0" id="cnt1">1</p>
                        <div class="d-flex flex-column plus-minus"> <span class="vsm-text plus">+</span> <span class="vsm-text minus">-</span> </div>
                    </div>
                </div>
                <div class="col-6">
                    <h6 class="mob-text">{{ cartSection.price }} DKK</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     props: ["cartSection"],
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

.plus-minus {
    position: relative
}

.plus {
    position: absolute;
    top: -4px;
    left: 12px;
    cursor: pointer;
    font-size: 25px;
}

.minus {
    position: absolute;
    top: 8px;
    left: 12px;
    cursor: pointer;
    font-size: 25px;
}

.item,
.item-img {
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

    .item,
    .item-img {
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