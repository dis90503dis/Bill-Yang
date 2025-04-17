<script setup>
const props = defineProps({
  sending: { type: Boolean, default: false },
})
const emit = defineEmits(["click"])
</script>

<template>
  <button class="send-btn" type="button" :disabled="sending" @click="emit('click')">
    {{ sending ? "發送中.." : "即刻預約" }}
  </button>
</template>

<style scoped>
.send-btn {
  font-family: "Noto Sans JP", sans-serif;
  margin: 2rem auto 0; /* mt‑8 mx‑auto */
  width: 308px;
  height: 3.3em;
  line-height: 3.3em;
  background: #ffe3bb;
  color: #000;
  font-size: 20px;
  letter-spacing: 0.9em;
  text-indent: 0.9em;
  font-weight: 700;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  font-weight: 24px;
}
.send-btn:hover {
  transform: scale(0.9);
} /* hover:scale‑90 */
.send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
