<template>
    <div id="cartbody" class="pt-5">
    <div class="container px-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-5">
            <h4 class="heading">Shopping Bag</h4>
        </div>
        <div class="col-7">
            <div class="row text-right">
                <div class="col-6">
                    <h6 class="mt-2">Quantity</h6>
                </div>
                <div class="col-6">
                    <h6 class="mt-2">Price</h6>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex justify-content-center border-top">
        <div class="col-5">
            <div class="row d-flex">
                <div class="book"> <img src="https://i.imgur.com/2DsA49b.jpg" class="book-img"> </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">Thinking, Fast and Slow</h6>
                    <p class="mob-text">Daniel Kahneman</p>
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
                    <h6 class="mob-text">$9.99</h6>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex justify-content-center border-top">
        <div class="col-5">
            <div class="row d-flex">
                <div class="book"> <img src="https://i.imgur.com/Oj1iQUX.jpg" class="book-img"> </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">Homo Deus: A Brief<br>History of Tomorrow</h6>
                    <p class="mob-text">Yuval Noah Harari</p>
                </div>
            </div>
        </div>
        <div class="my-auto col-7">
            <div class="row text-right">
                <div class="col-6">
                    <div class="row d-flex justify-content-end px-3">
                        <p class="mb-0" id="cnt2">1</p>
                        <div class="d-flex flex-column plus-minus"> <span class="vsm-text plus">+</span> <span class="vsm-text minus">-</span> </div>
                    </div>
                </div>
                <div class="col-6">
                    <h6 class="mob-text">$13.50</h6>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <div class="card text-center" id="checkout">
                <div class="card-body">
                    <p class="card-text text-white">Subtotal: 3000 DKK</p>
                    <button class="btn btn-outline-light p-2 mt-5" type="submit">Checkout</button>
                </div>
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