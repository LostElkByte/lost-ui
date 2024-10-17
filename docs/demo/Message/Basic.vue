<script setup>
import { h } from 'vue'
import { createMessage } from 'lost-ui'

const open = () => {
  createMessage({ message: 'hello world' })
}
const open2 = () => {
  createMessage({ message: h('b', 'this is bold') })
}
</script>
<template>
  <div class="basic block">
    <l-button type="primary" @click="open" style="margin-right: 8px"> 创建一条消息 </l-button>
    <l-button @click="open2"> 创建支持 VNode 的消息 </l-button>
  </div>
</template>
