<template>
  <div v-if="isVisible" class="error-text">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  isVisible: Boolean,
});
</script>

<style scoped>
.error-text {
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin: 0;
  margin-left: 5px;
  color: rgb(255, 77, 79);
  font-weight: 400;
  font-size: 13px;
}
</style>
