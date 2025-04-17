<template>
  <div class="form-container">
    <div class="form">
      <div class="left">
        <label class="row">
          <span>姓名<span class="required">(必填)</span></span>
          <input type="text" placeholder="姓名" class="input" :value="formData.name" @input="(event) => (formData.name = event.target.value)" />
        </label>

        <label class="row">
          <span>手機<span class="required">(必填)</span></span>
          <input type="text" placeholder="手機" class="input" :value="formData.phone" @input="(event) => (formData.phone = event.target.value)" />
        </label>

        <label class="row">
          <span>需求房型</span>
          <select class="select" v-model="formData.room_type">
            <option value="" disabled>請選擇房型</option>
            <option v-for="room in roomTypeList" :value="room" :key="room">
              {{ room }}
            </option>
          </select>
        </label>

        <label class="row">
          <span>居住縣市</span>
          <select class="select" v-model="formData.city">
            <option value="" disabled>請選擇城市</option>
            <option v-for="city in cityList" :value="city.value" :key="city.value">
              {{ city.label }}
            </option>
          </select>
        </label>

        <label class="row">
          <span>居住地區</span>
          <select class="select" v-model="formData.area">
            <option value="" disabled>請選擇地區</option>
            <option v-for="area in areaList" :value="area.value" :key="area.value">
              {{ area.label }}
            </option>
          </select>
        </label>
      </div>

      <div class="right">
        <textarea class="textarea" placeholder="請輸入您的留言" :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue"
import { cityList, renderAreaList } from "../info/address.js"

const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  city: "",
  area: "",
  msg: "",
})

const roomTypeList = ref(["一房一廳", "兩房一廳", "三房兩廳", "四房以上"])
const areaList = ref([])

watch(
  () => formData.city,
  (newVal) => {
    areaList.value = renderAreaList(newVal)
    formData.area = areaList.value.length > 0 ? areaList.value[0].value : ""
  }
)
</script>

<style scoped>
.form-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.form {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1000px;
  width: 100%;
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
}

.left,
.right {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.row span {
  width: 100px;
}

.required {
  color: red;
  font-size: 12px;
}

.input,
.select,
.textarea {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.textarea {
  min-height: 120px;
  resize: vertical;
}
</style>
