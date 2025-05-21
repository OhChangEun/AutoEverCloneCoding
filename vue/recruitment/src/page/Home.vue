<template>
  <div class="flex flex-col items-center justify-center min-h-screen space-y-6">
    <h1 class="text-2xl font-bold">🏠 홈 화면</h1>

    <!-- 로그인된 사용자 정보 -->
    <div
      v-if="user.isLoggedIn"
      class="flex flex-col items-center gap-10 text-center"
    >
      <div>
        <p><strong>이름:</strong> {{ user.name }}</p>
        <p><strong>이메일:</strong> {{ user.email }}</p>
      </div>

      <BaseButton
        type="button"
        @click="logout"
        width="w-20"
        customClass="bg-main-logo text-white"
        label="로그아웃"
      />
    </div>

    <!-- 로그인 안된 경우 -->
    <div v-else class="flex flex-col items-center space-y-2">
      <router-link to="/signup" class="text-blue-500 underline">
        회원가입
      </router-link>
      <router-link to="/login" class="text-blue-500 underline">
        로그인
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { computed } from "vue";
import BaseButton from "../base/BaseButton.vue";

const authStore = useAuthStore();
const user = computed(() => {
  return authStore.user;
});

const logout = () => {
  authStore.logout();
};
</script>
