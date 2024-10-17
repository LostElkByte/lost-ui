<script setup>
import { ref } from 'vue'

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
    <l-tooltip content="hello tooltip" ref="tooltipRef" manual>
      <l-button> 手动容器 </l-button>
    </l-tooltip>

    <br /><br />
    <l-button type="primary" @click="open" style="margin-right: 8px"> 点击手动触发显示 </l-button>
    <l-button type="danger" @click="close"> 点击手动触发隐藏 </l-button>
  </div>
</template>
