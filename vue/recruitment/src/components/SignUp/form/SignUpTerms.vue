<template>
  <!-- 약관 동의 -->
  <div class="terms-container">
    <label class="select-all">
      <input
        class="select-all-checkbox"
        type="checkbox"
        v-model="selectAll"
        @change="toggleAll"
      />
      <span>전체 동의</span>
    </label>

    <hr />

    <div class="sub-checkbox">
      <label class="checkbox-item" v-for="(term, index) in terms" :key="index">
        <input
          class="terms"
          type="checkbox"
          v-model="term.checked"
          @change="CheckIfAllSelected"
        />
        <span>{{ term.label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const selectAll = ref(false);

const terms = ref([
  { label: "[필수] 만 14세 이상 확인", checked: false },
  { label: "[필수] 그리팅 이용약관 동의", checked: false },
  { label: " [필수] 그리팅 개인정보처리방침 동의", checked: false },
]);

const toggleAll = () => {
  terms.value.forEach((term) => {
    term.checked = selectAll.value;
  });
};
const CheckIfAllSelected = () => {
  selectAll.value = terms.value.every((term) => term.checked);
};
</script>

<style scoped>
.terms-container .select-all {
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
}
.terms-container .select-all-checkbox {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.terms-container hr {
  margin-top: 16px;
}
.terms-container .sub-checkbox {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 0;
}
.sub-checkbox .checkbox-item {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
}
.sub-checkbox .terms {
  width: 16px;
  height: 16px;
}
/* 체크박스에 마우스 커서 손가락 모양 */
.terms-container input[type="checkbox"] {
  cursor: pointer;
}
</style>
