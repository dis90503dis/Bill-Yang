<template>
  <div class="mask" ref="maskRef" v-if="!swiped && isMobile">
    <img class="finger-icon" src="../assets/finger.png" alt="滑動提示" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const maskRef = ref(null)
const swiped = ref(false)
const isMobile = ref(window.innerWidth <= 768)

onMounted(() => {
  if (!isMobile.value) return // 桌機就直接不執行

  const maskEl = maskRef.value
  const container = maskEl?.parentElement

  // 設定遮罩寬度 = 可滑動區塊的 scrollWidth
  if (maskEl && container) {
    maskEl.style.width = `${container.scrollWidth}px`

    // 當使用者開始滑動，就隱藏手指提示
    const onScroll = () => {
      swiped.value = true
      container.removeEventListener("scroll", onScroll)
    }

    container.addEventListener("scroll", onScroll, { passive: true })
  }
})
</script>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 88, 144, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.finger-icon {
  height: 47px;
  animation: swipe-move 1.2s infinite;
  opacity: 0.9;
}

@keyframes swipe-move {
  0% {
    transform: translateX(0);
    opacity: 0.8;
  }
  50% {
    transform: translateX(30px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 0.8;
  }
}
</style>
