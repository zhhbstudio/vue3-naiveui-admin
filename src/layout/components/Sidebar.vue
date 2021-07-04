<template>
    <n-menu v-model:value="activeMenu" :options="menuOptions" :render-label="renderMenuLabel" />
</template>
<script setup>
import { h, ref } from 'vue'
import { NMenu, NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'

import { creatMenuOption } from "../../utils/index.js"

import routes from "../../routes.js"

let activeMenu = ref('home')

const menuOptions = creatMenuOption(routes)

function renderMenuLabel(option) {
    if (option.name) {
        return h(RouterLink, { to: { name: option.name } }, { default: () => option.label })
    } else {
        return option.label
    }
}
</script>