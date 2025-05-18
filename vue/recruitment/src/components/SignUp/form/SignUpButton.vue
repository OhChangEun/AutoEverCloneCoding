<template>
  <div class="signup-submit-container">
    <!-- 제출 버튼 -->
    <button class="submit-btn" :type="btnType" :disabled="hasError">
      생성 완료
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  btnType: String,
  hasError: Boolean,
});
</script>

<style scoped>
.signup-submit-container {
  width: 100%;
}
.submit-btn {
  width: 100%;
  height: 40px;
  background-color: var(--main-logo-color);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  transition: all 0.2s ease;
  cursor: pointer;
}
.submit-btn:disabled {
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.25);
}
</style>
