<script setup>
import { createMessage, closeMessageAll } from 'lost-ui'

const open = () => {
  createMessage({ message: 'hello world1', duration: 0 })
  createMessage({ message: 'hello world2', duration: 0 })
  createMessage({ message: 'hello world3', duration: 0 })
}
const close = () => {
  closeMessageAll()
}
</script>
<template>
  <div class="basic block">
    <l-button @click="open" style="margin-right: 8px"> 创建三条消息 </l-button>
    <l-button @click="close"> 全部关闭 </l-button>
  </div>
</template>
