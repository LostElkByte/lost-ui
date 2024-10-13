<script setup>
import { h, ref } from 'vue'
import LDropdown from '@/components/Dropdown/Dropdown.vue'
import LButton from '@/components/Button/Button.vue'
const options = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const tooltipRef = ref()
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
</script>
<template>
  <div class="basic block">
    <l-dropdown placement="bottom" :menu-options="options" trigger="click" manual ref="tooltipRef">
      <l-button> 菜单容器 </l-button>
    </l-dropdown>
    <br /><br />
    <l-button type="primary" @click="open" style="margin-right: 8px"> 点击手动触发显示 </l-button>
    <l-button type="danger" @click="close"> 点击手动触发隐藏 </l-button>
  </div>
</template>
