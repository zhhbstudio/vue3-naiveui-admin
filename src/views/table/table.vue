<template>
  <n-form inline label-placement="left" :model="formValue" ref="formRef">
    <n-form-item label="姓名" path="user.name">
      <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
    </n-form-item>
    <n-form-item label="年龄" path="user.age">
      <n-input placeholder="输入年龄" v-model:value="formValue.user.age" />
    </n-form-item>
    <n-form-item label="地址" path="user.address">
      <n-input placeholder="输入地址" v-model:value="formValue.phone" />
    </n-form-item>
    <n-form-item>
      <n-button @click="handleValidateClick" attr-type="button">搜 索</n-button>
    </n-form-item>
  </n-form>

  <n-data-table
    ref="table"
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :locale="zhCN"
  />
</template>

<script setup>
import { ref, reactive } from "vue";
import { useMessage, NForm, NFormItem, NInput, NButton, NDataTable, zhCN } from 'naive-ui'

const formRef = ref(null)
const message = useMessage()
const formValue = ref({
  user: {
    name: '',
    age: '',
    address: ''
  }
})
function handleValidateClick(e) {
  formRef.value.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    } else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}
const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]
const data = Array.apply(null, { length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index + 1}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))

let pagination = reactive({
  page: 1,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [5, 10, 20],
  onChange: (page) => {
    pagination.page = page
  },
  onPageSizeChange: (pageSize) => {
    pagination.pageSize = pageSize
    pagination.page = 1
  }
})
</script>

<style scoped>
</style>