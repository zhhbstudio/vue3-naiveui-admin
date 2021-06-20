<template>
    <n-menu v-model:value="activeMenu" :options="menuOptions" />
</template>
<script setup>
import {h,ref} from 'vue'
import { NMenu, NIcon } from 'naive-ui'

import { creatMenuOption } from "../../utils/index.js";

import routes from "../../routes.js"

let activeMenu = ref('home')

const menuOptions = creatMenuOption(routes)
</script>