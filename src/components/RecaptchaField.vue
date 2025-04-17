<script setup>
// ❯❯ 把 VueRecaptcha → RecaptchaV2
import { RecaptchaV2 } from "vue3-recaptcha-v2"

const props = defineProps({ sitekey: { type: String, required: true } })
const emit = defineEmits(["verify", "expired"])

// 這個套件在驗證成功時會觸發 load‑callback，
// 回傳 g‑recaptcha‑response；我們把它當作 verify
const onLoad = () => emit("verify")
const onExp = () => emit("expired")
</script>

<template>
  <div class="recaptcha-wrapper">
    <!-- 事件名稱也要改成官方文件的寫法 -->
    <RecaptchaV2 :sitekey="sitekey" @load-callback="onLoad" @expired-callback="onExp" />
  </div>
</template>

<style scoped>
.recaptcha-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 2rem; /* mt-8 */
  z-index: 10;
}
</style>
