<template>
  <section class="signup-section">
    <SignUpHeader />
    <SignUpForm />
    <SignUpFooter />
  </section>
</template>

<script setup>
import SignUpHeader from "../form/SignUpHeader.vue";
import SignUpForm from "../form/SignUpForm.vue";
import SignUpFooter from "../form/SignUpFooter.vue";

import { reactive, computed } from "vue";
// import axios from "axios";
// axios는 기본(default)으로 export되는 객체이기 때문에 중괄호 {} 없이 사용.

const user = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
});
</script>

<style scoped>
.signup-section {
  display: flex;
  flex-direction: column;
  max-width: 480px;
  gap: 48px;
  padding: 40px 0 80px;
}
</style>
