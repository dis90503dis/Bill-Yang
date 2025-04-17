<script setup>
const props = defineProps({
  /** v‑model */
  modelValue: { type: Boolean, default: false },
})
const emit = defineEmits(["update:modelValue"])

/* 勾選切換 */
const toggle = (e) => emit("update:modelValue", e.target.checked)
</script>

<template>
  <div class="policy-agreement">
    <input type="checkbox" class="policy-checkbox" :checked="modelValue" @change="toggle" />
    <p class="policy-text">
      本人知悉並同意
      <label for="policy-modal" class="policy-link"> 「個資告知事項聲明」 </label>內容
    </p>
    <!-- 彈窗（維持原有功能） -->
  </div>
</template>

<style scoped>
.policy-agreement {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; /* 原本的 gap‑2 */
  position: relative;
}

.policy-checkbox {
  width: 1rem;
  height: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem; /* rounded-md */
  background: #fff;
  cursor: pointer;
}

.policy-checkbox:checked {
  background: #000;
}

.policy-text {
  color: #fff;
  font-size: 1rem;
  line-height: 40px;
  align-self: center;
  margin-bottom: 0;
}
.policy-link {
  color: #ff0;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.policy-link:hover {
  opacity: 0.7;
}
</style>
