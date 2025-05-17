<template>
  <!-- 로그인 문제 -->
  <div class="login-problem">
    <i class="fa-solid fa-headphones"></i>
    <a href="#">
      <span>계정 만들기에 문제가 있나요?</span>
    </a>
  </div>
</template>

<style scoped>
.login-problem {
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
}
.login-problem a {
  color: currentColor;
  text-decoration: underline;
  text-underline-offset: 1px;
}
</style>
