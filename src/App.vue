<script setup>
import Carousel from "./components/Carousel.vue"
import FormSection from "./components/Form.vue"
import PolicyAgreement from "./components/PolicyAgreement.vue"
import SendButton from "./components/SendButton.vue"
// import ContactInfo from "./info/contactInfo.vue"

const p06img1 = [
  { src: new URL("./assets/p06/Group 87.png", import.meta.url).href },
  { src: new URL("./assets/p06/1-2.png", import.meta.url).href },
  { src: new URL("./assets/p06/1-3.png", import.meta.url).href },
  { src: new URL("./assets/p06/1-4.png", import.meta.url).href },
]
const p06img2 = [
  { src: new URL("./assets/p06/2-1.png", import.meta.url).href },
  { src: new URL("./assets/p06/2-2.png", import.meta.url).href },
  { src: new URL("./assets/p06/2-3.png", import.meta.url).href },
]
const p06img3 = [{ src: new URL("./assets/p06/3-1.png", import.meta.url).href }]
const p06img4 = [
  { src: new URL("./assets/p06/4-1.png", import.meta.url).href },
  { src: new URL("./assets/p06/4-2.png", import.meta.url).href },
  { src: new URL("./assets/p06/4-3.png", import.meta.url).href },
]
const p07img = [
  { src: new URL("./assets/p07/slider.png", import.meta.url).href },
  { src: new URL("./assets/p07/Group 41.png", import.meta.url).href },
  { src: new URL("./assets/p07/Group 42.png", import.meta.url).href },
  { src: new URL("./assets/p07/Group 43.png", import.meta.url).href },
]
</script>
<template>
  <div class="container">
    <div class="p01">
      <div class="p01-content">
        <img class="logo" src="./assets/p01/logo.svg" alt="" />
        <img class="t1" src="./assets/p01/t1.svg" alt="" />
        <img class="wave" src="./assets/p01/wave2.svg" alt="" />
      </div>
    </div>
    <!-- <div class="p02"></div> -->
    <div class="p03"></div>
    <div class="p04">
      <img class="p04bg" src="./assets/p04/100.png" alt="" />
      <img class="p04txt" src="./assets/p04/txt.svg" alt="" />
    </div>
    <div class="p05"></div>
    <div class="p06">
      <div class="p06card">
        <div class="p06card-txt">
          <div class="p06card-circle">
            <img src="./assets/p06/Group 89.svg" alt="" />
            <div class="p06card-number"><img src="./assets/p06/1.svg" alt="" /></div>
          </div>
          <div class="p06card-word">
            <p>
              全聯、7-11、市場、農會、電信局、<br />
              郵局、行政中心、中興觀光美食街
            </p>
          </div>
        </div>
        <div class="p06card-car">
          <Carousel class="p06car" :carouselId="'p06-carousel-1'" :images="p06img1" :aspectRatio="'690 / 460'" />
        </div>
      </div>
      <div class="p06card reverse">
        <div class="p06card-txt">
          <div class="p06card-circle">
            <img src="./assets/p06/Group 89.svg" alt="" />
            <div class="p06card-number"><img src="./assets/p06/2.svg" alt="" /></div>
          </div>
          <div class="p06card-word">
            <p>
              全聯、7-11、市場、農會、電信局、<br />
              郵局、行政中心、中興觀光美食街
            </p>
          </div>
        </div>
        <div class="p06card-car">
          <Carousel class="p06car" :carouselId="'p06-carousel-2'" :images="p06img2" :aspectRatio="'690 / 460'" />
        </div>
      </div>
      <div class="p06card">
        <div class="p06card-txt">
          <div class="p06card-circle">
            <img src="./assets/p06/Group 89.svg" alt="" />
            <div class="p06card-number"><img src="./assets/p06/3.svg" alt="" /></div>
          </div>
          <div class="p06card-word">
            <p>
              全聯、7-11、市場、農會、電信局、<br />
              郵局、行政中心、中興觀光美食街
            </p>
          </div>
        </div>
        <div class="p06card-car">
          <Carousel class="p06car" :carouselId="'p06-carousel-3'" :images="p06img3" :aspectRatio="'690 / 460'" />
        </div>
      </div>
      <div class="p06card reverse">
        <div class="p06card-txt">
          <div class="p06card-circle">
            <img src="./assets/p06/Group 89.svg" alt="" />
            <div class="p06card-number"><img src="./assets/p06/4.svg" alt="" /></div>
          </div>
          <div class="p06card-word">
            <p>
              全聯、7-11、市場、農會、電信局、<br />
              郵局、行政中心、中興觀光美食街
            </p>
          </div>
        </div>
        <div class="p06card-car">
          <Carousel class="p06car" :carouselId="'p06-carousel-4'" :images="p06img4" :aspectRatio="'690 / 460'" />
        </div>
      </div>
    </div>
    <div class="p07">
      <img class="p07bg" src="./assets/p07/bg.svg" alt="" />
      <img class="p07en" src="./assets/p07/en.svg" alt="" />
      <img class="p07txt" src="./assets/p07/txt.svg" alt="" />
      <Carousel class="p07car" :carouselId="'p07'" :images="p07img" :aspectRatio="1920 / 1374" />
    </div>
    <div class="p08">
      <div class="p08-box">
        <div class="p08-content">
          <div class="p08-title"><img src="./assets/p08/title.svg" alt="" /></div>
          <div class="p08-subtitle"><img src="./assets/p08/subtitle.svg" alt="" /></div>
          <div class="p08-txt">
            <p class="p08-word">
              看不見的細節才是關鍵，東泥建設以媲美大樓的抗震基礎工程與<br />
              嚴密防水施作，成就出屹立不搖的百年傳家堡。
            </p>
          </div>
          <div class="p08-circle">
            <div><img src="./assets/p08/Group95.svg" alt="" /></div>
            <div><img src="./assets/p08/Group96.svg" alt="" /></div>
          </div>
        </div>
        <div class="p08-content"></div>
      </div>
    </div>
    <div class="pform">
      <div class="form-content">
        <img class="formwave" src="./assets/p01/wave2.svg" alt="" />
        <div><img class="formlogo" src="./assets/p01/logo.svg" alt="" /></div>
        <div><h2 class="formtxt">預約賞屋</h2></div>
        <div class="form"><FormSection /></div>
        <div><PolicyAgreement /></div>
        <div class="button"><img src="./assets/form/booking.svg" alt="" /></div>
        <div class="contact-button">
          <div class="button"><img src="./assets/form/Frame 31.svg" alt="" /></div>
          <div class="button"><img src="./assets/form/Frame 32.svg" alt="" /></div>
          <div class="button"><img src="./assets/form/Frame 33.svg" alt="" /></div>
        </div>
        <div class="contact-adress">
          <img src="./assets/form/Map.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="google-map-container">
      <iframe
        class="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28927.07363247049!2d121.5170471!3d25.0477649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a974bd96dc9b%3A0x7e8454fcd3a67d1c!2z5Y-w5YyX5biC5Lit5aSu!5e0!3m2!1szh-TW!2stw!4v1713320000000!5m2!1szh-TW!2stw"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}
.p01 {
  width: 100%;
  aspect-ratio: 1920 / 1080;
  background-image: url(./assets/p01/bg.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.p01-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%;
  transform: translate(-50%, -100%);
}

.t1 {
  position: absolute;
  top: 80%;
  left: 50%;
  width: 30%;
  transform: translate(-50%, -100%);
}

.wave,
.formwave {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -100%);
}
.p02 {
  width: 100%;
  height: 1080px;
  background-color: #aaa;
}
.p03 {
  width: 100%;
  aspect-ratio: 1920 / 1185;
  background-image: url("./assets/p03/03.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.img03 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.p04 {
  width: 100%;
  height: 100%;
}
.p04 {
  position: relative;
  width: 100%;
}

.p04bg {
  max-width: 100%;
  height: auto;
  display: block;
  width: 100%;
  object-fit: cover;
}

.p04txt {
  width: 20%;
  height: auto;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.p05 {
  width: 100%;
  aspect-ratio: 1920 / 1185;
  background-image: url("./assets/p05/05.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.p06 {
  width: 100%;
  aspect-ratio: 1920 / 2660;
  background-image: url("./assets/p06/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.p06card {
  margin: auto;
  display: flex;
  box-sizing: border-box;
  height: 18%;
}
.p06card.reverse {
  flex-direction: row-reverse;
}
.p06card-txt {
  height: 24vh;
  width: 36vw;
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.p06card-circle {
  position: relative;

  height: 16vw;
  width: 16vw;
}
.p06card-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.p06card-number {
  position: absolute;
  bottom: -30%; /* 控制數字在圈外稍下 */
  left: 5%;
  transform: translate(-50%, 0);
  width: 36vw;
  z-index: 2;
}

.p06card-number img {
  width: 100%;
  height: auto;
}

.p06card-word {
  margin-top: 5%;
}

.p06card-word p {
  margin-top: 2rem;
  font-family: "Noto Sans TC", sans-serif;
  font-size: clamp(16px, 2vw, 30px);
  color: #fff;
  opacity: 80%;
  line-height: 1.5;
  padding-bottom: 0;
}
.p06card-car {
  height: 24vh;
  width: 36vw;
}
.p06car {
  object-fit: cover;
}
.p07 {
  position: relative;
  width: 100%;
  overflow: hidden; /* 確保內容不會溢出 */
}

.p07bg,
.p07en {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 2; /* 確保圖層順序 */
}

.p07txt {
  position: absolute;
  top: 15%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 75%;
  z-index: 3;
  pointer-events: none;
}

.p07car {
  z-index: 1;
  position: relative;
  width: 100%;
  margin-top: 20%;
}
.p08 {
  width: 100vw;
  background-image: url(./assets/p08/bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 1920 / 881;
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
}
.p08-box {
  width: 85%;
  aspect-ratio: 1666 / 680;
  background-image: url(./assets/p08/box.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
}
.p08-content {
  width: 50%;
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  flex-direction: column;
  gap: 1rem;
}
.p08-title {
  margin-bottom: 1rem;
}
.p08-txt {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
}
.p08-circle {
  display: flex;
}
.pform {
  width: 100vw;
  background-image: url(./assets/p01/bg.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.form-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  position: relative;
}

.form {
  width: 100%;
  position: relative;
}
.formlogo {
  margin-top: 3.5vw;
  width: 7vw;
}
.formtxt {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 2.5rem;
  color: #fff;
}
.formwave {
  pointer-events: none;
  z-index: 0;
}
.contact-button {
  margin-top: 3.5rem;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.button img {
  width: 15vw;
  background-color: #ffe3bb;
  border-radius: 1rem;
  cursor: pointer;
}
.contact-adress img {
  width: calc(45vw + 40px);
  margin-bottom: 4rem;
}
.contact-button,
.contact-adress {
  position: relative; /* 使 z-index 生效 */
  z-index: 2; /* 比 0 大即可 */
}
.google-map-container {
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  position: relative;
}

.google-map {
  border: 0;
  width: 100%;
  height: 100%;
}
</style>
