<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 1260px;
  min-height: 550px;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
