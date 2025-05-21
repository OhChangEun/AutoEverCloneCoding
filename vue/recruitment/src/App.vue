<template>
  <router-view />
  <BaseModal />
</template>

<script setup>
import BaseModal from "./base/BaseModal.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
:root {
  --main-logo-color: #002c5f;
  --background-color: #fafafa;
  --footer-color: #e9f1fe;
  --header-height: 72px;
}
html,
body,
#app {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
}
</style>
