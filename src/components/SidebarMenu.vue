<template>
  <div>
    <!-- 固定右上角按鈕 -->
    <button class="menu-toggle" @click="toggleMenu">
      <img v-if="!isOpen" src="../assets/menu.svg" alt="menu" />
      <img v-else src="../assets/close.svg" alt="close" />
    </button>

    <!-- 側邊選單 -->
    <transition name="slide">
      <div v-if="isOpen" class="sidebar">
        <ul class="menu">
          <li v-for="item in menuItems" :key="item.label" class="menu-item" @click="scrollToSection(item.target)">
            {{ item.label }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue"

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)

// Menu 名稱與目標對應區塊 ID
const menuItems = [
  { label: "年度鉅獻", target: "p02" },
  { label: "東山市心", target: "p03" },
  { label: "美好生活", target: "p04" },
  { label: "榮耀血統", target: "p07" },
  { label: "北歐寧靜", target: "p09" },
  { label: "全齡格局", target: "p10" },
  { label: "上選建材", target: "p11" },
]

// 滾動到對應區塊
const scrollToSection = (id) => {
  const target = document.querySelector(`.${id}`)
  if (target) {
    target.scrollIntoView({ behavior: "smooth" })
    isOpen.value = false
  }
}
</script>

<style scoped>
.menu-item {
  position: relative; /* 給 ::after 定位用 */
  border-bottom: none; /* 移除原本整條底線 */
}

/* 底線本體——預設寬度 0，所以看不到 */
.menu-item::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0; /* 貼齊文字底部；要再往下可調正負值 */
  transform: translateX(-50%);
  width: 0; /* hover 前不顯示 */
  height: 3px; /* 線粗細 */
  background-color: #3399ff;
  transition: width 0.25s ease;
}

/* 滑過時把寬度撐開（80% ⇢ 只蓋住文字區域；要全寬就設 100%）*/
.menu-item:hover::after {
  width: 80%;
}
.menu-toggle {
  position: fixed;
  top: 0;
  right: 0;
  width: 80px;
  height:80px;
  background: transparent;
  border: none;
  z-index: 1001;
  cursor: pointer;
}

.menu-toggle img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 20vw;
  height: 100vh;
  background-color: #fce0b5cc;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;backdrop-filter: blur(2px);
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.menu-item {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #555;
  text-align: center;
  padding: 1.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}

.menu-item:hover {
  color: #004a99;
  background-color: rgba(0, 0, 0, 0.05);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
@media (max-width: 768px) {
  .sidebar {
    width: 100vw; /* 滿版寬度 */
    background-color: rgba(252, 224, 181, 0.7); /* 原 #fce0b5 → 70% 透明 */
  }
  .menu-toggle {
    width: 70px;
    height: auto;
  }
}
</style>
