<template>
    <div id="contactbody">
        <div id="container">
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72273.9520669812!2d8.393439843967867!3d55.52259694935333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b20a619e30ce9%3A0xdde847ab4e4ae9d1!2sEsbjerg!5e0!3m2!1sen!2sdk!4v1632935998807!5m2!1sen!2sdk" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div id="contactinfo">
                <div class="contactrows">
                    <img :src="require('/src/assets/phone.svg')" id="phone" alt="Card image cap">
                    <h5>Call us anytime at: +45 81 91 97 21</h5>
                </div>
                <div class="contactrows">
                    <img :src="require('/src/assets/mail.svg')" id="phone" alt="Card image cap">
                    <h5>Send us an email at: streetverse@gmail.com</h5>
                </div>
                <div class="contactrows">
                    <img :src="require('/src/assets/location.svg')" id="phone" alt="Card image cap">
                    <h5>Visit our store in Esbjerg.</h5>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
#contactbody {
    height: 100vh;
    width: 100vw;
    background-color: black;
    color: white;
    overflow: hidden;
}

#container {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
}

#contactinfo {
    margin-left: 0;
    padding: 50px;
}

#phone {
    margin-right: 20px;
}

.contactrows {
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;
}

iframe {
    height:100%;
    width:100%;
    border:0;
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 10+ */
    filter: gray; /* IE6-9 */
	-webkit-filter: grayscale(99%); /* Chrome 19+ & Safari 6+ */
  }

#map {
    height: 50vh;
    width: 100vw;
}

#phone {
    height: 25px;
    width: auto;
}

h5 {
    font-size: 16px;
}

@media only screen and (min-width: 890px) {
    #container {
    display: flex;
    align-items: center;
    flex-direction: row;
    }

    #contactinfo {
    margin-left: 300px;
}

    #map {
    height: 94vh;
    width: 50vw;
}

#phone {
    height: 30px;
    width: auto;
}

h5 {
    font-size: 20px;
}

}

</style>