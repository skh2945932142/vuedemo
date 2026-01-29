<script setup>
//1.导入函数
import { ref } from 'vue'
//2.执行函数，传入参数【简单类型=对象类型】

const state = ref(0)
const setCount = () => {
  //脚本区域修改ref产生的响应式对象数据必须通过.value属性
  state.value++
}
</script>
<template>
  <div>
    <button @click="setCount">{{ state }}</button>
  </div>
</template>