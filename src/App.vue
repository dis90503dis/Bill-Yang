<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue"
import Carousel from "./components/Carousel.vue"
import FormSection from "./components/Form.vue"
import PolicyAgreement from "./components/PolicyAgreement.vue"
// import SendButton from "./components/SendButton.vue"
// import ContactInfo from "./info/contactInfo.vue"
import BsCarousel from "bootstrap/js/dist/carousel" // 只匯入 JS
import fullview from "./components/fullview.vue"
import SidebarMenu from "./components/SidebarMenu.vue"
import AOS from 'aos'

const cur = ref(0)
const p03Ref = ref(null)
// -------------------------------
const bgImage = ref(null)
const handleScroll = () => {
  const scrollY = window.scrollY
  const scale = Math.min(1 + scrollY / 1600, 2)
  if (bgImage.value) {
    bgImage.value.style.transform = `scale(${scale})`
  }
}
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
const isMobile = computed(() => {
  return window.innerWidth <= 769
})
// -------------------------------
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  const el = document.getElementById("p10-carousel-1")
  const c = BsCarousel.getInstance(el) || new BsCarousel(el)

  el.addEventListener("slide.bs.carousel", (e) => {
    cur.value = e.to // 0‑based index
  })
  const ac = p03Ref.value
  if (ac && window.innerWidth <= 768) {
    ac.scrollLeft = (ac.scrollWidth - ac.clientWidth) / 2
  }
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 1500
    });
  }

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
const showSidebar = ref(false)
const selectedItem = ref("東山市心")
const menuItems = ["年度鉅獻", "東山市心", "美好生活", "榮耀血統", "北歐寧靜", "全齡格局", "上選建材"]
function handleSelect(item) {
  selectedItem.value = item
  showSidebar.value = false // 點選後自動關閉
}
</script>
<template>
  <SidebarMenu v-model="showSidebar" :items="menuItems" :selected="selectedItem" @select="handleSelect" />
  <div class="container">
    <div class="p01">
      <div class="p01-content">
        <img class="logo" src="./assets/p01/logo.svg" alt=""  data-aos="fade-up" data-aos-delay="0" />
        <img class="t1" src="./assets/p01/t1.svg" alt="" data-aos="fade-up" data-aos-delay="200" />
        <img class="wave" src="./assets/p01/wave2.svg" alt=""  data-aos="fade-up" data-aos-delay="400"/>
      </div>
    </div>
    <!-- <div class="p02"></div> -->
    <div class="p03" ref="p03Ref"><img class="p03-img" src="./assets/p03/03.png" alt="" /><fullview /></div>
    <div class="p04">
      <img ref="bgImage" class="p04bg" src="./assets/p04/100.png" alt="" />
      <img class="p04txt" src="./assets/p04/txt.svg" alt="" />
    </div>

    <div v-if="isMobile" class="phone-p05" ref="">
      <strong class="phone-p05-text" data-aos="fade-up" data-aos-delay="0"
        >東山區最熱鬧的美食大道， 擁有完善的生活機能。無論是日常採買、流行時尚，還是休閒娛樂，一應俱全，輕鬆享受便利與精彩的生活！</strong
      >
      <img class="phone-p05-leaf-img" src="./assets/p05/leaf.png" alt="" />
    </div>

    <div class="p05" ref="p03Ref">
      <img class="p03-img" src="./assets/p05/05.png" alt="" /><fullview />

      <strong v-if="!isMobile" class="p05-text" data-aos="fade-up" data-aos-delay="0"
        >東山區最熱鬧的美食大道， 擁有完善的生活機能。無論是日常採買、流行時尚，還是休閒娛樂，一應俱全，輕鬆享受便利與精彩的生活！</strong
      >
      <img v-if="!isMobile" class="p05-leaf-img" src="./assets/p05/leaf.png" alt="" />
    </div>
    <div class="p06">
      <!-- <img src="./assets/p06/06m.jpg" class="t00"> -->
      <div class="p06card">
        <div class="p06card-txt">
          <div class="p06card-circle">
            <div class="circle-txt">市心<br>商圈</div>
            <div class="p06card-number"><img src="./assets/p06/1.svg" alt="" /></div>
          </div>
          <div class="p06card-word" data-aos="fade-up" data-aos-delay="200">
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
            <div class="circle-txt">樂活<br>休閒</div>
            <div class="p06card-number"><img src="./assets/p06/2.svg" alt="" /></div>
          </div>
          <div class="p06card-word">
            <p>運動公園、圖書館、175咖啡公路</p>
          </div>
        </div>
        <div class="p06card-car">
          <Carousel class="p06car" :carouselId="'p06-carousel-2'" :images="p06img2" :aspectRatio="'690 / 460'" />
        </div>
      </div>
      <div class="p06card">
        <div class="p06card-txt">
          <div class="p06card-circle">
            <div class="circle-txt">三大<br>交通</div>
            <div class="p06card-number"><img src="./assets/p06/3.svg" alt="" /></div>
          </div>
          <div class="p06card-word">
            <p>國3柳營交流道、國1新營交流道、<br>台1線</p>
          </div>
        </div>
        <div class="p06card-car">
          <Carousel class="p06car" :carouselId="'p06-carousel-3'" :images="p06img3" :aspectRatio="'690 / 460'" />
        </div>
      </div>
      <div class="p06card reverse">
        <div class="p06card-txt">
          <div class="p06card-circle">
            <div class="circle-txt">12年<br>學區</div>
            <div class="p06card-number"><img src="./assets/p06/4.svg" alt="" /></div>
          </div>
          <div class="p06card-word">
            <p>東山國小附設幼稚園、東山國中</p>
          </div>
        </div>
        <div class="p06card-car">
          <Carousel class="p06car" :carouselId="'p06-carousel-4'" :images="p06img4" :aspectRatio="'690 / 460'" />
        </div>
      </div>

      <div class="p06m">
        <div class="p06m-box">
          <div class="p06m-number"><img src="./assets/p06/1.svg" alt="" /></div>
          <div class="p06m-circle-txt">市心<br>商圈</div>
        </div>
        <div class="p06m-txt"><p>全聯、7-11、市場、農會、電信局、郵局、行政中心、中興觀光美食街</p></div>
        <div class="p06m-car"><Carousel class="p06car" :carouselId="'p06-carousel-1'" :images="p06img1" :aspectRatio="'375 / 250'" /></div>
        <div class="p06m-box reverse">
          <div class="p06m-number"><img src="./assets/p06/2.svg" alt="" /></div>
          <div class="p06m-circle-txt">樂活<br>休閒</div>
        </div>
        <div class="p06m-txt"><p>運動公園、圖書館、175咖啡公路</p></div>
        <div class="p06m-car"><Carousel class="p06car" :carouselId="'p06-carousel-2'" :images="p06img2" :aspectRatio="'375 / 250'" /></div>
        <div class="p06m-box">
          <div class="p06m-number"><img src="./assets/p06/3.svg" alt="" /></div>
          <div class="p06m-circle-txt">三大<br>交通</div>
        </div>
        <div class="p06m-txt"><p>國3柳營交流道、國1新營交流道、台1線</p></div>
        <div class="p06m-car"><Carousel class="p06car" :carouselId="'p06-carousel-3'" :images="p06img3" :aspectRatio="'375 / 250'" /></div>
        <div class="p06m-box reverse">
          <div class="p06m-number"><img src="./assets/p06/4.svg" alt="" /></div>
          <div class="p06m-circle-txt">12年<br>學區</div>
        </div>
        <div class="p06m-txt"><p>東山國小附設幼稚園、東山國中</p></div>
        <div class="p06m-car"><Carousel class="p06car" :carouselId="'p06-carousel-4'" :images="p06img4" :aspectRatio="'375 / 250'" /></div>
      </div>
    </div>
    <div class="p07">
      <img class="p07bg" src="./assets/p07/bg.svg" alt="" />
      <img class="p07en" src="./assets/p07/en.svg" alt="" />
      <div class="p07-content">
          <div class="p07-title">傳承69年載卓越匠心，<br>
            榮耀傳承，口碑見證非凡業績！</div>
          <div class="p07-subtitle">「東南水泥集團」創立於1956年，是政府推動高鐵、捷運、南二高及各重大公共工程所採用水泥品牌之一。為追求永續企業使命，成立「東泥建設」，以品牌傳承、創新未來為信念，為城市開創美好生活願景。</div>
      </div>
      <Carousel class="p07car" :carouselId="'p07'" :images="p07img" :aspectRatio="'1920 / 1374'" />
      <Carousel class="p07carm" :carouselId="'p07m'" :images="p07img" :aspectRatio="'375 / 449'" />
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
            <div class="p08-circle">
              <img class="p08-img" src="./assets/p08/Group95.svg" alt="" />
              <div class="p08-star-wrapper">
                <img class="p08-star" src="./assets/star.svg" alt="" />
              </div>
            </div>
            <div class="p08-circle">
              <img class="p08-img" src="./assets/p08/Group96.svg" alt="" />
              <div class="p08-star-wrapper">
                <img class="p08-star" src="./assets/star.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="p08-content p08-none"></div>
      </div>
    </div>
    <div class="p09">
      <div class="p09-nav">
        <div class="p09-circle">
          <img src="./assets/p09/Group 4.png" alt="" />
        </div>
        <div class="p09-content">
          <div class="p09-title">格柵光影、綠植風景<br>
            展現北歐人文之美</div>
          <div class="p09-subtitle">「以人為本、取法自然」，融入北歐設計理念，透過光影層次形塑外觀立面，運用玻璃透光陽台，創造室內綠意景致，呈現出自然、機能的人文綠建築。</div>
        </div>
        <div class="p09m-circle"><img src="./assets/p09/Groupm4.png" alt="" /></div>
      </div>
      <div class="p09-car">
        <Carousel class="p09car" :carouselId="'p09-carousel-1'" :images="p09img" :aspectRatio="1920 / 1194" />
      </div>
    </div>
    <div class="p10">
      <div class="p10-nav">
        <div class="p10-content pcno"></div>
        <div class="p10-content">
          <div class="p10-title">引光入室，簡約質感<br>
            打造溫暖且實用的機能美學宅</div>
          <div class="p10-icon"><img src="./assets/p10/icon.png" alt="" /></div>
        </div>
      </div>
      <div class="p10-subtitle">
        <div class="p10-subtitle-title">戶戶大器尺度，室內藏風納光，窗映露臺綠景</div>
        <div class="p10-subtitle-txt">1樓客餐廳、多功能配置，可彈性規劃孝親房、客房、親子讀書室等，滿足不同家庭成員的生活需求。<br>
          2樓以上規劃花園、雙主臥、雙次臥、雙大露臺，搭配衛浴乾濕分離設計，打造全齡友善的生活格局，<br>滿足三代家人舒適共居的理想空間。</div>
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
        <div class="p11-subtitle-title">嚴選名品建材<br>
          匠心打造非凡品味</div>
        <div class="p11-subtitle-txt">以美學為信仰，堅持每一寸空間的高質感，上選國內外知名的優質建材，用心雕琢別墅的超凡價值。</div>
        <div class="p11m-img mbno"><img src="./assets/p11/Group 100.png" alt="" /></div>
      </div>
      <div class="p11-content-box pcno">
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
        <div class="button" style="width: 80%"><img src="./assets/form/booking.svg" alt="" /></div>
        <div class="contact-button">
          <div class="button"><img src="./assets/form/Frame 31.svg" alt="" /></div>
          <div class="button"><img src="./assets/form/Frame 32.svg" alt="" /></div>
          <div class="button"><img src="./assets/form/Frame 33.svg" alt="" /></div>
        </div>
        <div class="contact-adress button">
          <img class="pcno" src="./assets/form/Map.svg" alt="" />
          <img class="mbno" src="./assets/form/Group 101.png" alt="" />
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
.phone-p05 {
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 10;
  margin-bottom: -70px;
}
.phone-p05-text {
  margin: 20px 0 0 10px;
  height: 50px;
  width: 70%;
}
.phone-p05-leaf-img {
  top: 0;
  right: 0;
  position: absolute;
  width: 30%;
}
.wave {
  animation: shimmer 2s ease-in-out infinite alternate;
}
@keyframes shimmer {
  0% {
    filter: brightness(1);
  }
  100% {
    filter: brightness(1.6);
  }
}
.p06card-circle {
  position: relative;
 /*  height: 16vw; 
  width: 16vw; */
}
.circle {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.star-wrapper {
  position: absolute;
  top: 13%;
  left: 13%;
  width: 74%;
  height: 74%;
  transform-origin: center;
  animation: rotateStar 5s linear infinite;
}
.star {
  position: absolute;
  top: 15%;
  left: 85%;
  width: 100px;
  animation: counterRotate 5s linear infinite;
}
@keyframes rotateStar {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes counterRotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

.p08-circlebox {
  display: flex;
  justify-content: center;
}
.p08-circle {
  position: relative;
  width: 45%;
}
.p08-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.p08-star-wrapper {
  position: absolute;
  top: 35%;
  left: 35%;
  width: 15%;
  height: 15%;
  transform-origin: center;
}
.p08-star {
  width: 60px;
  animation: rotateStarOrbit 5s linear infinite;
}
@keyframes rotateStarOrbit {
  0% {
    transform: rotate(0deg) translateX(135%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(135%) rotate(-360deg);
  }
}

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
  font-family:'Noto Sans TC',sans-serif;
  font-size: calc(100vw * 18 / 1920);
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
.menu-button {
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  z-index: 1000;
  cursor: pointer;
}
.menu-button img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
 /* animation: shimmer 2s ease-in-out infinite alternate;
 */
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
  position: relative;
  width: 100%;
  aspect-ratio: 1920 / 1185;
  background-image: url("./assets/p03/03.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: auto; /* 啟用橫向滾動 */
}
.p03-img {
  display: none; /* 預設不顯示（桌機版不顯示 img） */
}
.img03 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.p04 {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.p04bg {
  transition: transform 0.2s ease-out;
  will-change: transform;
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
  overflow-x: auto; /* 啟用橫向滾動 */
  position: relative;
}
.p05-text {
  font-family: "Noto Sans TC", sans-serif;
  font-size: clamp(16px, 2vw, 36px);
  line-height: 1.5;
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  top: 5%;
}
.p05-leaf-img {
  width: 20%;
  position: absolute;
  z-index: 10;
  top: 0px;
  right: 0px;
}
.p06 {
  width: 100%;
  aspect-ratio: 1920 / 2660;
  padding: 7vw 0;
  /* 
  background-image: url("./assets/p06/06.jpg");*/
  background-image: url("./assets/p06/bg.png"); 
  background-size: cover;
  background-position: 0 0 ;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
}
.t00{position: absolute;top:0px;left: 0;width: 100%;opacity: .3;pointer-events: none;}

.p06card {
  margin: auto;
  display: flex;
  box-sizing: border-box;
  align-items: center; /* 垂直置中 */
 /* height: 18%; */
}
.p06card.reverse {
  flex-direction: row-reverse;
}
.p06card-txt {
  /* height: 24vh; */
  width: 28vw;
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  pointer-events: none;
}
.p06card-circle .circle-txt{
  font-size: 3em;
  color: #FFF;
  font-family:'Noto Serif TC',serif ;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  white-space: nowrap;
  aspect-ratio: 1/1;
  background-image: url("./assets/p01/oo.svg");
  background-position: 50% 50%;
  background-size: cover;
  width: 6.5em;
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  margin: 0;
}
.p06card-number {
  position: absolute;
  bottom: -6%;
  left: -12%;
  /* transform: translate(-50%, 0);
  width: 36vw; */
 height: calc(150 * 100vw / 1920);
  z-index: 2;
  filter: drop-shadow(0px 0px .3em #fffc);
}
.p06card-number::before {
  content: "";
  position: absolute;display: block;
  left: -16.5em;bottom: -35%;height: 70%;
  background: url("./assets/p06/light.png") center;
  background-size: cover;
  aspect-ratio: 824/115;
}

.p06card-number img ,
.p06m-number img{
  width: auto;
  height: 100%;
}

.p06card-word {
  width: 100%;
  margin-top: 2%;
}

.p06card-word p {
  margin-top: 2rem;
  /* font-family: "Noto Sans TC", sans-serif; */
  font-size: clamp(16px, 2vw, 30px);
  color: #fff;
  opacity: 80%;
  line-height: 1.5;
  padding-bottom: 0;
  text-align: center;
  /* width: 26vw; */
}
.p06card-car {
  height: auto;
  width: 36vw;
  aspect-ratio: 690 / 460;
}
.p06car {
  object-fit: cover;
}
.p07 {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.p07bg,
.p07en {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 2;
}
.p07-content {
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  align-self: center;
  position: absolute;
  left: 0;right: 0;
  width: 75%;margin: auto;
  z-index: 3;top: 10%;
}
.p07-title {
  font-size: 2.4em;
  color: #0a5e84;
  font-family:'Noto Serif TC',serif ;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
}
.p07-title::before {content: "";display: block;float: right;width: 4em;height: 1px;
transform-origin:0 0;transform: rotate(37deg);
margin: .3em 0em 0 3em;
background: #0a5e84;}
.p07-subtitle{
  width: calc(100vw * 650 / 1920);
  line-height: 2;}

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
  min-height: 500px;
  background-image: url(./assets/p08/box.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  margin: 10vh auto;
  border: 1px solid #BF9261;
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

.p08-title img,
.p08-subtitle img {
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
  position: relative;
}
.p09-title {
  font-size: 2.3em;
  color: #0a5e84;
  font-family:'Noto Serif TC',serif ;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
}
.p09-title::before {content: "";display: block;float: right;width: 4em;height: 1px;
transform-origin:0 0;transform: rotate(37deg);margin: .3em -.3em 0 .3em;
background: #333;}
.p09-subtitle{width: calc(100vw * 500 / 1920);line-height: 2;}
.p09-content img {
  height: 100%;
  width: 1035px;opacity: .3;
  object-fit: cover;position: absolute;
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
.p10-title {
  font-size: 2.3em;
  color: #0a5e84;
  font-family:'Noto Serif TC',serif ;
  font-weight: 700;
  text-align: center;
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
/*
.p10-subtitle-title {
  width: 50%;
}
.p10-subtitle-txt {
  width: 45%;
}
  */
.p10-subtitle-title {
  font-size: 1.44em;
  color: #0a5e84;
  letter-spacing: .06em;
  /* font-family:'Noto Serif TC',serif ; */
  font-weight: 700;
  text-align: center;
  /* width: 15%; */
}
.p10-subtitle-title::before,
.p10-subtitle-title::after{
  content: "";
  width: 5.3em; margin: 0 .5em;
  height: 1px;display: inline-block;background: currentColor;vertical-align: middle;
}
.p10-subtitle-txt {
  /* width: 23%; */
  font-weight: 500;
  text-align: center;
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
  font-size: 2.3em;
  color: #0a5e84;
  font-family:'Noto Serif TC',serif ;
  font-weight: 700;
  text-align: center;
  /* width: 15%; */
}
.p11-subtitle-txt {
  width: 23%;
  font-weight: 500;
  text-align: center;
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
.reverse {
  flex-direction: row-reverse;
}
.p06m {
  display: none;
}
.p07carm {
  display: none;
}
.p09m-content,
.p09m-circle {
  display: none;
}
.mbno {
  display: none;
}
@media (max-width: 769px) {
  .container{
    font-size: calc(100vw * 13 / 375);
  }
  .p08-circle {
    width: 70%;
  }
  .p08-star-wrapper {
    top: 38%;
    left: 38%;
    width: 15%;
    height: 15%;
  }
  .p08-star {
    width: 36px;
  }
  @keyframes rotateStarOrbit {
    0% {
      transform: rotate(0deg) translateX(160%) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(160%) rotate(-360deg);
    }
  }

  .star-wrapper-r {
    position: absolute;
    transform-origin: center;
    animation: rotateStar 5s linear infinite;
    top: 25%;
    left: 52%;
    width: 47%;
    height: 47%;
  }
  .star-r {
    position: absolute;
    top: 15%;
    left: 85%;
    width: 60px;
    animation: counterRotate 5s linear infinite;
    z-index: 20;
  }
  .star-wrapper-l {
    position: absolute;
    transform-origin: center;
    animation: rotateStar 5s linear infinite;
    top: 25%;
    left: 2%;
    width: 47%;
    height: 47%;
  }
  .star-l {
    position: absolute;
    top: 15%;
    left: 85%;
    width: 60px;
    animation: counterRotate 5s linear infinite;
    z-index: 20;
  }
  @keyframes counterRotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  .mbno {
    display: block;
  }
  .p01 {
    aspect-ratio: 375 / 667;
  }
  .logo {
    top: 55%;
    width: 50%;
    aspect-ratio: 183 / 204;
  }
  .t1 {
    width: 80%;
    top: 80%;
  }
  .wave {
    top: auto;
    bottom: 0;
    transform: translateX(-50%); /* 只左右置中，不再往上偏移 */
  }
  .p03,
  .p05 {
    background: none;
    aspect-ratio: auto;
  }

  .p03-img {
    display: block;
    height: 667px;
    width: auto;
  }
  .p04 {
    overflow: hidden;
    position: relative;
  }

  .p04bg {
    width: auto;
    min-height: 325px;
    object-fit: cover;
    object-position: center;
    transform: translateX(0);
  }

  .p04txt {
    width: 60%;
    height: 60%;
  }
  .p06card {
    display: none;
  }
  .p06 {
    padding: 0 0;
  }
  .p06m {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平置中 */
    align-items: center; /* 垂直置中 */
  }
  .p06m-box {
    display: flex;
    position: relative;
    width: 90%;
    margin:auto;
    justify-content: center; /* 水平置中 */
    align-items: center; /* 垂直置中 */
    margin: 5em auto 0 auto;
  }
  .p06m-number {
    /*width: 50%;*/
    position: relative;
 height: calc(85 * 100vw / 375);
  }
.p06m-number::before{
  content: "";
  position: absolute;display: block;
  left: -13.5em;bottom: -35%;height: 70%;
  background: url("./assets/p06/light.png") center;
  background-size: cover;
  aspect-ratio: 824/115;
}
/*
  .p06m-number img {
    width: 200%;
    height: 200%;
    object-fit: contain;
    position: relative;
    left: -80%;
    top: -30%;
  }
    */
  .p06m-circle {
    width: 50%;
  }
  .p06m-circle-txt{
    font-size: 2em;
    color: #FFF;
    font-family:'Noto Serif TC',serif ;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    aspect-ratio: 1/1;
    background-image: url("./assets/p01/oo.svg");
    background-position: 50% 50%;
    background-size: cover;
    display: flex;
    justify-content: center; /* 水平置中 */
    align-items: center; /* 垂直置中 */
    line-height: 1.2;
    width: 6.5em;
    flex: 0 0 6.5em;
    margin: -1.3em -.5em 0  -.5em;
  }
  .p06m-circle img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .p06m-txt {
    width: 100%;
    margin: 0 auto 1em;
  }
  .p06m-txt p {
    font-family: "Noto Sans TC", sans-serif;
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    text-align: start;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .p06m-car {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
  aspect-ratio: 690 / 460;
  }
  .p06m-car .slide{height: 100%;}
  .p06m-car .carousel-indicators{height: auto;}
  .p07 {
    width: 100vw;
    height: auto;
  }
  .p07bg {
    width: 100%;
  }
  .p07car {
    aspect-ratio: 375 / 449;
    width: 100%;
    height: auto;
  }
  .p07car {
    display: none;
  }
  .p07carm {
    display: block;
    margin-top: 20%;
  }
  .p07-content {flex-direction:column;width: 85%;top: 5%;}
  .p07-title {font-size: 1.7em;width: 100%;margin: 0 0 .3em;} 
  .p07-subtitle {width: 100%;}
  .p07-title::before {display: none;}

  .p07txt {
    display: none;
  }
  .p07bg {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
  .p07mtxt {
    width: 80%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
  .p08 {
    aspect-ratio: 375 / 736;
  }
  .p08-box {
    background-image: url(./assets/p08/Group99.png);
    aspect-ratio: none;
    margin: 0;
    height: 80%;
  }
  .p08-txt {
    width: 100%;
  }
  .p08-word {
    font-size: 1rem;
  }
  .p08-content {
    height: 80%;
    width: auto;
    padding-top: 0;
  }
  .p08-none {
    display: none;
  }
  .p08-title {
    margin: 0;
  }
  .p09 {
    aspect-ratio: 375 / 773;
  }
  .p09-nav {
    height: 70%;
  }
  .p09-car {
    height: 30%;
  }
  .p09-circle {
    display: none;
  }
  .p09-nav {
    flex-direction: column;
    justify-content: center; /* 水平置中 */
    align-items: center; /* 垂直置中 */
  }
  .p09-content {flex-direction:column;}
  .p09-title {font-size: 1.7em;width: 90%;margin: 0 0 .3em;} 
  .p09-subtitle {width: 90%;}
.p09-title::before {display: none;}

  .p09m-content,
  .p09m-circle {
    display: block;
  }
  .p09m-content img,
  .p09m-circle img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .p10-nav {
    background-image: url(./assets/p10/Group81.png);
    aspect-ratio: 375 / 390;
    align-items: start;
  }
  .pcno {
    display: none;
  }
  .p10-content {
    justify-content: start;
    width: 100%;
    margin-top: 5%;
  }
  .p10-title {
    font-size: 1.53em;
    margin: 5% auto .1em;
    /* width: 40%; */
  }
  .p10-title img {
    height: auto;
    max-width: 80vw;
    object-fit: cover;
  }
  .p10-icon img {
    height: auto;
    max-width: 80vw;
    object-fit: cover;
  }
  .p10-subtitle {
    padding: 0;
    aspect-ratio: none;
    background-size: 340% auto; /* 放大背景圖三倍，可依需求調整 */
    background-position: center center; /* 僅顯示中間部分 */
    background-repeat: no-repeat;
  }
  .p10-subtitle-title {
    font-size: 1.15em; margin: 1.5em auto 0;
  }
.p10-subtitle-title::before,
.p10-subtitle-title::after{  
  display: none;
}
.p10-subtitle-txt {
  width: 80%; 
  line-height: 1.6;
  margin: 0 auto 4em;
}
/*
  .p10m-subtitle-title {
    width: 80%;
    aspect-ratio: 315 / 164;
    object-fit: cover;
  }
  .p10m-subtitle-title img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding: 2rem;
  }
    */
  .p10-btnbox {
    flex-wrap: wrap;
  }
  .p10-btn {
    box-sizing: border-box;
    width: 32%;
    margin: 0.5%;
  }
  .p10-btnbox h2 {
    padding: 5%;
  }
  .p11-subtitle {
    background-size: 500%;
    background-position: top center;
    background-repeat: no-repeat;
    aspect-ratio: 375 / 550;
    justify-content: center;
  }
  .p11-subtitle-title {
    font-size: 1.53em;
    margin-top: 10%;
    /* width: 40%; */
  }
  .p11-subtitle-txt {
    width: 80%;
  }
  .p11m-img {
    width: 100%;
  }
  .p11m-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .contact-button {
    flex-direction: column;
  }
  .formlogo {
    width: 50%;
    margin-top: 10%;
  }
  .formtxt {
    font-weight: 800;
  }
  .contact-button,
  .contact-adress {
    flex-direction: column;
    width: 80%;
  }
  .button img {
    width: 85%;
    object-fit: cover;
  }
  .contact-adress {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }
}
</style>
