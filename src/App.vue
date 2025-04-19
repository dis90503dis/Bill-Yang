<script setup>
import { onMounted, ref } from "vue"
import Carousel from "./components/Carousel.vue"
import FormSection from "./components/Form.vue"
import PolicyAgreement from "./components/PolicyAgreement.vue"
// import SendButton from "./components/SendButton.vue"
// import ContactInfo from "./info/contactInfo.vue"
import BsCarousel from "bootstrap/js/dist/carousel" // 只匯入 JS

const cur = ref(0) // ① 目前張數
onMounted(() => {
  const el = document.getElementById("p10-carousel-1")
  const c = BsCarousel.getInstance(el) || new BsCarousel(el)

  el.addEventListener("slide.bs.carousel", (e) => {
    cur.value = e.to // 0‑based index
  })
})
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
const p09img = [
  {
    src: new URL("./assets/p09/p09-1.png", import.meta.url).href,
  },
  {
    src: new URL("./assets/p09/Group 44.png", import.meta.url).href,
  },
  {
    src: new URL("./assets/p09/Group 45.png", import.meta.url).href,
  },
  {
    src: new URL("./assets/p09/Group 46.png", import.meta.url).href,
  },
]
const p10img = [
  {
    src: new URL("./assets/p10/p10-1.png", import.meta.url).href,
  },
  {
    src: new URL("./assets/p10/Group 47.png", import.meta.url).href,
  },
  {
    src: new URL("./assets/p10/Group 48.png", import.meta.url).href,
  },
  {
    src: new URL("./assets/p10/Group 49.png", import.meta.url).href,
  },
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
            <p class="p08-word">看不見的細節才是關鍵，東泥建設以媲美大樓的抗震基礎工程與嚴密防水施作，成就出屹立不搖的百年傳家堡。</p>
          </div>
          <div class="p08-circlebox">
            <div class="p08-circle"><img src="./assets/p08/Group95.svg" alt="" /></div>
            <div class="p08-circle"><img src="./assets/p08/Group96.svg" alt="" /></div>
          </div>
        </div>
        <div class="p08-content"></div>
      </div>
    </div>
    <div class="p09">
      <div class="p09-nav">
        <div class="p09-circle">
          <img src="./assets/p09/Group 4.png" alt="" />
        </div>
        <div class="p09-content">
          <img src="./assets/p09/txt.png" alt="" />
        </div>
      </div>
      <div class="p09-car">
        <Carousel class="p09car" :carouselId="'p09-carousel-1'" :images="p09img" :aspectRatio="1920 / 1194" />
      </div>
    </div>
    <div class="p10">
      <div class="p10-nav">
        <div class="p10-content"></div>
        <div class="p10-content">
          <div class="p10-title"><img src="./assets/p10/p10title.png" alt="" /></div>
          <div class="p10-icon"><img src="./assets/p10/icon.png" alt="" /></div>
        </div>
      </div>
      <div class="p10-subtitle">
        <div class="p10-subtitle-title"><img src="./assets/p10/title.png" alt="" /></div>
        <div class="p10-subtitle-txt"><img src="./assets/p10/p10txt.png" alt="" /></div>
      </div>
      <div class="p10-car-box">
        <div class="p10-btnbox">
          <button
            v-for="(_, idx) in 6"
            :key="idx"
            :class="{ active: idx === cur }"
            class="p10-btn"
            type="button"
            :data-bs-target="'#p10-carousel-1'"
            :data-bs-slide-to="idx"
          >
            <h2>A13<span style="font-size: 1.5rem">戶</span></h2>
          </button>
        </div>
        <div class="p10-car"><Carousel class="p10car" :carouselId="'p10-carousel-1'" :images="p10img" :aspectRatio="'256 / 125'" /></div>
      </div>
    </div>
    <div class="p11">
      <div class="p11-subtitle">
        <div class="p11-subtitle-title"><img src="./assets/p11/p11title.png" alt="" /></div>
        <div class="p11-subtitle-txt"><img src="./assets/p11/p11text.png" alt="" /></div>
      </div>
      <div class="p11-content-box">
        <div class="p11-content"><img src="./assets/p11/Group 96.png" alt="" /></div>
        <div class="p11-content"></div>
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
:global(html) {
  font-size: clamp(14px, 0.8vw + 0.5rem, 18px);
}
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
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
}
.p08-box {
  width: 85%;
  aspect-ratio: 1666 / 680; /* 原圖寬高比 */
  min-height: 450px;
  background-image: url(./assets/p08/box.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  margin: 10vh auto;
}
.p08-content {
  width: 50%;
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
.p08-title {
  margin-top: 1.5rem;
  height: 3rem;
  margin-bottom: 1rem;
}
.p08-title img {
  width: 50%;
  height: auto;
  object-fit: cover;
}
.p08-txt {
  width: 70%;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
}
.p08-word {
  text-align: center;
  margin-bottom: 0;
}
.p08-circlebox {
  display: flex;
  justify-content: space-around;
}
.p08-circle {
  width: 45%;
}
.p08-title img,
.p08-subtitle img,
.p08-circle img {
  width: 100%;
  object-fit: cover;
}

.p09 {
  position: relative;
  width: 100vw;
  height: auto;
  aspect-ratio: 1920 / 1593;
}
.p09-nav {
  display: flex;
  height: 25%;
  background-image: url(./assets/p09/bg.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: row-reverse; /* 讓 DOM 最後一項跑到最右邊 */
  align-items: flex-start; /* 垂直頂對齊 */
}
.p09-content {
  display: flex;
  height: 30%;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  align-self: center;
}
.p09-content img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.p09-circle {
  position: relative; /* 脫離文件流、可自由疊放 */
  top: 0; /* 貼到 .p09 的右上角；可依需求微調 */
  right: 0;
  z-index: 10;
  width: 40vw;
  height: auto;
}
.p09-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.p10 {
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url(./assets/p10/p10bg2.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.p10-nav {
  display: flex;
  width: 100%;
  background-image: url(./assets/p10/p10bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  aspect-ratio: 1920 / 491;
}
.p10-content {
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  gap: 1rem;
}
.p10-title,
.p10-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.p10-title img {
  height: auto;
  max-width: 20vw;
  object-fit: cover;
}
.p10-icon img {
  height: auto;
  max-width: 35vw;
  object-fit: cover;
}
.p10-subtitle {
  width: 100vw;
  background-image: url(./assets/p10/Vector.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  gap: 1rem;
  padding-bottom: 5%;
  padding-top: 1rem;
  aspect-ratio: 1920 / 322; /* 容器會自動算高度 */
}
.p10-subtitle-title {
  width: 50%;
}
.p10-subtitle-txt {
  width: 45%;
}
.p10-subtitle-title img,
.p10-subtitle-txt img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.p10-car-box {
  width: 100vw;
}
.p10-btnbox {
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between; /* 水平置中 */
  align-items: center; /* 垂直置中 */
}
.p10-btn {
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  width: 16%;
  aspect-ratio: 232 / 62;
  border: #0a5e84 solid 1px;
  line-height: auto;
  background: transparent; /* 取消背景（支援漸層/圖片時用 background） */
}
.p10-btn:hover,
.p10-btn.active {
  background-color: #ffe3bb;
}
.p10-btn h2 {
  margin: 0 auto;
  text-align: center;
  font-family: "Noto Sans TC", sans-serif;
  color: #0a5e84;
  font-weight: 700;
}
.p10-car {
  width: 80%;
  height: auto;
  margin: 1rem auto;
}
.p11 {
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url(./assets/p10/p10bg2.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.p11-subtitle {
  width: 100vw;
  background-image: url(./assets/p11/Vector.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  gap: 1rem;
  padding-bottom: 2%;
  aspect-ratio: 1920 / 322; /* 容器會自動算高度 */
}
.p11-subtitle-title {
  width: 15%;
}
.p11-subtitle-txt {
  width: 20%;
}
.p11-subtitle-title img,
.p11-subtitle-txt img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.p11-content-box {
  width: 100%;
  aspect-ratio: 1920 / 820;
  background-image: url(./assets/p11/p11bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
}
.p11-content {
  width: 50%;
  margin-left: 2rem;
}
.p11-content img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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

@media (max-width: 768px) {
}
</style>
