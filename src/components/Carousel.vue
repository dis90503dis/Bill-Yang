<template>
  <div :id="carouselId" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
    <!-- 左右箭頭（手機板專用） -->
    <button  v-if="images.length > 1" class="carousel-control-prev mobile-only" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="prev">
      <img src="../assets/iCON.svg" alt="prev" class="arrow-icon flip-horizontal" />
    </button>

    <button  v-if="images.length > 1" class="carousel-control-next mobile-only" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="next">
      <img src="../assets/iCON.svg" alt="next" class="arrow-icon" />
    </button>

    <!-- indicators（圓點） -->
    <div v-if="showIndicators && images.length > 1" class="carousel-indicators dot-indicators">
      <button
        v-for="(img, index) in images"
        :key="index"
        type="button"
        :data-bs-target="`#${carouselId}`"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-label="`Slide ${index + 1}`"
      ></button>
    </div>

    <!-- slides -->
    <div class="carousel-inner" :style="{ aspectRatio: aspectRatio }">
      <div v-for="(img, index) in images" :key="index" class="carousel-item" :class="{ active: index === 0 }">
        <img :src="img.src" class="d-block w-100 carousel-img" :alt="img.alt || ''" />
        <div class="carousel-caption-box" v-if="img.caption">
          <p class="carousel-caption-text">{{ img.caption }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  carouselId: {
    type: String,
    required: true,
  },
  aspectRatio: {
    type: [String, Number],
    default: "16 / 9",
  },
  showIndicators: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
.carousel-inner {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.carousel-item {
  height: 100%;
  position: relative;
}
.carousel-img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
  image-rendering: auto;
}

/* indicators */
.dot-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 6px;
  background-color: #fff;
  border: none;
  transition: background-color 0.3s;
  opacity: 0.6;
}
.dot-indicators button.active {
  background-color: #fff;
  opacity: 1;
}

/* 圖說樣式 */
.carousel-caption-box {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: "Noto Sans TC", sans-serif;
}
.carousel-caption-text {
  margin: 0;
}

/* 手機箭頭按鈕樣式 */
.mobile-only {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
}

.carousel-control-prev.mobile-only,
.carousel-control-next.mobile-only {
  opacity: 1;
}
.carousel-control-prev.mobile-only {
  left: 0px;
}
.carousel-control-next.mobile-only {
  right: 0px;
}
.p06m-car .carousel-control-prev.mobile-only {
    left: -2.3rem;
  }
.p06m-car .carousel-control-next.mobile-only {
    right: -2.3rem;
  }

.arrow-icon {
  width: 32px;
  height: 32px;
  opacity: 1;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.6));
}
.flip-horizontal {
  transform: scaleX(-1);
}

@media (max-width: 769px) {
  .mobile-only {
    display: flex;
  }
  .dot-indicators {
    display: none;
  }
}
</style>
