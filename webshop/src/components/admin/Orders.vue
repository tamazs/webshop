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
    <div class="row d-flex justify-content-center border-top">
        <div class="col-5">
            <div class="row d-flex">
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">Thinking, Fast and Slow</h6>
                    <p class="mob-text">Daniel Kahneman</p>
                </div>
            </div>
        </div>
        <div class="my-auto col-7">
            <div class="row text-right">
                <div class="col-6">
                    <h6 class="mob-text">$9.99</h6>
                </div>
                <div class="col-6">
                    <button class="btn btn-outline-light" type="submit">Shipped</button>
                </div>
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
#cartbody {
    color: white;
    overflow-x: hidden;
    background-color: black;
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