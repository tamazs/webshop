<template>
    <div class="container-fluid" id="landingcontainer">
        <div class="row">
            <div class="col-12">
                <div id="landing">
                    <video :src="video" id="video" loop muted autoplay playsinline></video>
                    <div id="landingtext">Streetverse</div>
                    <div id="landingtext2">Your go to<br>sneaker shop</div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        video: '../files/video.mp4'
    }),
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');

*{
    overflow: hidden;
}

#landingcontainer {
    background-color: black;
}

#landing{
    position: relative;
}

#video{
    height: 100vh;
    width: 100vw;
}

#landingtext {
    position: absolute;
    color: black;
    background-color: white;
    top: 20%;
    left: 3%;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 45px;
    padding: 10px;
    font-family: 'Raleway', sans-serif;
    }

#landingtext2 {
    position: absolute;
    color: black;
    background-color: white;
    top: 40%;
    left: 3%;
    text-transform: uppercase;
    font-weight: 100;
    margin-top: 30px;
    font-size: 30px;
    padding: 10px;
    font-family: 'Raleway', sans-serif;
    }

@media only screen and (min-width: 890px) {

    #landingtext {
    position: absolute;
    color: black;
    background-color: white;
    top: 20%;
    left: 3%;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 90px;
    padding: 10px;
    font-family: 'Raleway', sans-serif;
    }

    #landingtext2 {
    position: absolute;
    color: black;
    background-color: white;
    top: 40%;
    left: 3%;
    text-transform: uppercase;
    font-weight: 100;
    margin-top: 30px;
    font-size: 70px;
    padding: 10px;
    font-family: 'Raleway', sans-serif;
    }
}
</style>