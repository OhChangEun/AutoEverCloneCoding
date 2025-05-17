<template>
  <div class="signup-header">
    <div class="signup-title">지원 계정 만들기</div>
    <div class="is-exist-account">
      <p>이전에 생성한 지원 계정이 있으신가요?</p>
      <a href="#">로그인</a>
    </div>
    <ul class="signup-header-desc">
      <li>
        아래 내용은 향후 전형 진행에 있어 필수적인 항목이므로 잘 확인해 주세요.
      </li>
      <li>인증 메일이 도착하지 않는다면 스팸 메일함을 확인해 주세요.</li>
    </ul>
  </div>
</template>

<style scoped>
.signup-header {
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 8px;
}
.signup-header .signup-title {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.6em;
  color: rgba(0, 0, 0, 0.85);
}
.signup-header .is-exist-account {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}
.is-exist-account p {
  font-weight: 400;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
}
.is-exist-account a {
  font-size: 13px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  text-decoration: underline;
}
.signup-header .signup-header-desc {
  width: 100%;
  margin-top: 16px;
  padding: 12px 12px 12px 24px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-color: rgba(0, 0, 0, 0.02);
  text-align: left;
}
.signup-header .signup-header-desc li {
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
