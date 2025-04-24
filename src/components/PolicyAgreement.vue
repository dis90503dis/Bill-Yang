<script setup>
import { ref } from "vue"
import Policy from "../section/form/policy.vue"
const props = defineProps({
  /** v‑model */
  modelValue: { type: Boolean, default: false },
})
const emit = defineEmits(["update:modelValue"])

/* 勾選切換 */
const toggle = (e) => emit("update:modelValue", e.target.checked)
</script>

<template>
  <!-- 這顆隱藏的 checkbox 控制 modal -->
  <input id="policy-modal" type="checkbox" class="hidden peer" />

  <!-- 同意條款區塊 -->
  <div class="flex items-center gap-2">
    <input type="checkbox" class="w-4 h-4 rounded border border-gray-300" :checked="modelValue" @change="toggle" />
    <p class="text-white leading-10 mb-0">
      本人知悉並同意
      <!-- 這個 label = 開啟 modal -->
      <label for="policy-modal" class="text-yellow-300 cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>
      內容
    </p>
  </div>

  <!-- 把真正的 Modal 元件放這裡 -->
  <Policy />
</template>

<style scoped>
.policy-agreement {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: relative;
}

.policy-checkbox {
  width: 1rem;
  height: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
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
