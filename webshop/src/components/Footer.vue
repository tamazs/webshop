<template>
    <div class="pt-5 pb-5 footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-xs-12 about-company">
                <h2><router-link id="logo" to="/">Streetverse</router-link></h2>
                <p class="pr-5 text-white-50">Buy unique sneakers for retail prices. Get delivery for free.</p>
                <p><a href="#"><img :src="require('/src/assets/facebook.svg')" id="fsocial"></a><a href="#"><img :src="require('/src/assets/instagram.svg')" id="fsocial"></a><a href="#"><img :src="require('/src/assets/youtube.svg')"></a></p>
                </div>
                <div class="col-lg-3 col-xs-12 links">
                <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                    <ul class="m-0 p-0">
                    <li><router-link class="text-white" aria-current="page" to="/">Home</router-link></li>
                    <li><router-link class="text-white" aria-current="page" to="/shop">Shop</router-link></li>
                    <li><router-link class="text-white" aria-current="page" to="/contact">Contact</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-xs-12 location">
                <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                <p>119, Spangsbjerg Kirkevej, Esbjerg 6700</p>
                <p class="mb-3"><img :src="require('/src/assets/phone.svg')" id="ficon">(81) 91 97 21</p>
                <p><img :src="require('/src/assets/mail.svg')" id="ficon">streetverse@gmail.com</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col copyright">
                <p class=""><small class="text-white-50">© 2021. All Rights Reserved.</small></p>
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

.footer{
  background: black;
  color:white;
  border-top: white 2px solid;
  font-family: 'Raleway', sans-serif;
  
  .links{
    ul {list-style-type: none;}
  }  
  .about-company{
    img{
        height: 25px;
        width: auto;
    }
    a{
      color:white;
      transition: color .2s;
      &:hover{color:#4180CB}
    }
  } 

  .copyright p{border-top:1px solid rgba(255,255,255,.1);} 

  #ficon {
      height: 25px;
      width: auto;
      margin-right: 10px;
  }
}



#fsocial {
    margin-right: 10px;
}

#logo{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    color: white;
}

@media only screen and (min-width: 890px) {
    #logo{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 40px;
    color: white;
}
}
</style>