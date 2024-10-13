<script setup>
import { h } from 'vue'
import LDropdown from '@/components/Dropdown/Dropdown.vue'
import LButton from '@/components/Button/Button.vue'
const options = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
</script>
<template>
  <div class="basic block">
    <l-dropdown placement="bottom" :menu-options="options">
      <l-button type="primary"> Hover 下拉菜单 </l-button>
    </l-dropdown>
  </div>
</template>
<style>
.vp-doc .vitepress-demo-preview-preview ul,
.vp-doc .vitepress-demo-preview-preview ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
