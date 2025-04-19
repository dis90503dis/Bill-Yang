<template>
  <div :id="carouselId" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
    <!-- indicators（圓點樣式） -->
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
    type: String,
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
}
.carousel-item {
  height: 100%;
}
.carousel-img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
  image-rendering: auto; /* 保持圖片清晰 */
}

/* ✅ 改成圓點樣式的 indicators */
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
</style>
