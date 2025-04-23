<template>
  <div class="fullview-container" ref="fullviewContainer">
    <div class="content-area" ref="contentArea">
      <slot></slot>
    </div>

    <div class="swipe-hint" v-if="showSwipeHint" ref="swipeHint">
      <img class="finger-icon" src="../assets/finger.png" alt="滑動提示" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from "vue"

const props = defineProps({
  enableSwipeHint: { type: Boolean, default: true },
  swipeHintDuration: { type: Number, default: 3000 },
  initialScrollRatio: { type: Number, default: 0 },
  additionalOffset: { type: Number, default: 0 },
})

const fullviewContainer = ref(null)
const contentArea = ref(null)
const swipeHint = ref(null)

const showSwipeHint = ref(false)
const hasScrolled = ref(false)

const isMobile = () => window.innerWidth <= 768

let scrollHandler

const checkScrollable = () => {
  if (!contentArea.value) return false
  return contentArea.value.scrollWidth > contentArea.value.clientWidth
}

const setInitialScroll = () => {
  if (!contentArea.value) return
  const { scrollWidth, clientWidth } = contentArea.value
  const target = (scrollWidth - clientWidth) * props.initialScrollRatio + props.additionalOffset
  contentArea.value.scrollLeft = target
}

const handleScroll = () => {
  if (!hasScrolled.value) {
    hasScrolled.value = true
    showSwipeHint.value = false
  }
}

const init = () => {
  nextTick(() => {
    setTimeout(() => {
      const scrollable = checkScrollable()
      if (isMobile() && props.enableSwipeHint && scrollable) {
        showSwipeHint.value = true
      }

      setInitialScroll()

      if (contentArea.value) {
        scrollHandler = handleScroll
        contentArea.value.addEventListener("scroll", scrollHandler, { passive: true })
      }
    }, 100) // 等 slot 的圖 render 出來
  })
}

const cleanup = () => {
  if (contentArea.value && scrollHandler) {
    contentArea.value.removeEventListener("scroll", scrollHandler)
  }
  window.removeEventListener("resize", init)
}

onMounted(() => {
  init()
  window.addEventListener("resize", init)
})

onUnmounted(() => {
  cleanup()
})

// reset 方法
const resetState = () => {
  hasScrolled.value = false
  cleanup()
  init()
}

const setScrollPosition = (position) => {
  if (contentArea.value) {
    contentArea.value.scrollLeft = position
  }
}

defineExpose({ resetState, setScrollPosition })
</script>

<style scoped>
.fullview-container {
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
}
.content-area {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.swipe-hint {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateY(-50%);
  background-color: rgba(0, 88, 144, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 100;
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
