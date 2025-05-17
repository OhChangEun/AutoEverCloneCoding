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

const isEmailValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(user.email);
});
const isPasswordValid = computed(() => {
  return user.password.length > 0;
});
const isConfirmPassword = computed(() => {
  return user.password === user.confirmPassword;
});
const isNameValid = computed(() => {
  return user.name.length > 0;
});

const isFormValid = computed(() => {
  return (
    isEmailValid.value &&
    isPasswordValid.value &&
    isConfirmPassword.value &&
    isNameValid.value
  );
});

// 회원가입
const handleSubmit = async () => {
  try {
    const payload = {
      email: user.email,
      pwd: user.password,
      name: user.name,
    };
    const res = await axios.post(
      "http://222.117.237.119:8111/auth/signup",
      payload
    );
    if (res.data) {
      alert("회원 가입 성공");
    } else {
      alert("회원 가입 실패");
    }
  } catch (err) {
    console.error(err);
    alert("가입 실패! 서버 오류 발생!");
  }
};
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
