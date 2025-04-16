<script setup>
import Carousel from "./components/Carousel.vue"
const p06img1 = [
  { src: new URL("./assets/p06/Group 87.png", import.meta.url).href },
  { src: new URL("./assets/p06/Group 34.png", import.meta.url).href },
  { src: new URL("./assets/p06/Group 35.png", import.meta.url).href },
  { src: new URL("./assets/p06/Group 36.png", import.meta.url).href },
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
          <div class="p06circle">
            <img class="p06circle-bg" src="./assets/p06/Frame 182.svg" alt="光圈" />
            <div class="p06circle-text"><img src="./assets/p06/txt1.svg" alt="" /></div>
          </div>
        </div>
        <div class="p06card-car">
          <Carousel :carouselId="'p06-carousel-1'" :images="p06img1" :aspectRatio="'690 / 460'" />
        </div>
      </div>
      <div class="p06card"></div>
      <div class="p06card"></div>
      <div class="p06card"></div>
    </div>
    <div class="p07">
      <img class="p07bg" src="./assets/p07/bg.svg" alt="" />
      <img class="p07en" src="./assets/p07/en.svg" alt="" />
      <img class="p07txt" src="./assets/p07/txt.svg" alt="" />
      <Carousel class="p07car" :carouselId="'p07'" :images="p07img" :aspectRatio="1920 / 1374" />
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

.wave {
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
}
.p06card {
  display: flex;
  box-sizing: border-box;
  height: 25%;
}
.p06card-txt {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
}
.p06card-car {
  height: 100%;
  width: 45%;
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

.p06circle {
  position: relative;
  width: 320px; /* 跟你的 SVG 寬高一致 */
  height: 320px;
}

.p06circle-bg {
  width: 100%;
  height: 100%;
  display: block;
}

.p06circle-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -40%);
  color: white;
  font-size: 3.375rem;
  text-align: center;
  line-height: 1.4;
  pointer-events: none; /* 點擊不會干擾 SVG 背後動畫 */
}
</style>
