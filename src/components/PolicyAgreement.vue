<script setup>
import { ref } from "vue"
import Policy from "../section/form/policy.vue"

const props = defineProps({
  modelValue: { type: Boolean, default: false },
})
const emit = defineEmits(["update:modelValue"])

const showModal = ref(false)

/* 同意 checkbox 切換 */
const toggle = (e) => emit("update:modelValue", e.target.checked)
</script>

<template>
  <div class="cccccc flex items-center gap-2 justify-center">
    <input
      type="checkbox"
      class="w-4 h-4 rounded border border-gray-300"
      :checked="modelValue"
      @change="toggle"
    />
    <p class="text-white leading-10 mb-0">
      本人知悉並同意
      <span
        class="cursor-pointer hover:opacity-70"
        @click="showModal = true"
      >「個資告知事項聲明」</span>
      內容
    </p>
  </div>

  <!-- 傳入 v-model 給 modal -->
  <Policy v-model:show="showModal" />
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

#policy-modal {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
}
.cccccc{display: flex;margin: auto;
  justify-content: center;}
  .cccccc span{ color: #ff0;}
</style>
