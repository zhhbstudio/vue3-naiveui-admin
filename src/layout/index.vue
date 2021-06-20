<template>
  <n-layout position="absolute">
    <n-layout-header style="height: 64px; padding: 24px;" bordered>Vue3-Naive-Admin</n-layout-header>
    <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px;">
      <n-layout-sider bordered>
        <vna-sidebar />
      </n-layout-sider>
      <n-layout content-style="padding: 24px;">
        <router-view />
      </n-layout>
    </n-layout>
    <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px; text-align: center;">
      copyright zhhbstudio
    </n-layout-footer>
  </n-layout>
</template>
<script setup>
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter } from 'naive-ui'
import VnaSidebar from './components/Sidebar.vue'

</script>