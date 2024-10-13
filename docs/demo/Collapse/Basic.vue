<script setup>
import { ref } from 'vue'
import LCollapse from '@/components/Collapse/Collapse.vue'
import LCollapseItem from '@/components/Collapse/CollapseItem.vue'
const openedValue = ref(['a'])
</script>
<template>
  <div class="basic block">
    <l-collapse v-model="openedValue">
      <l-collapse-item name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </l-collapse-item>
      <l-collapse-item name="b" title="Title B">
        <div>this is bbbbb test</div>
      </l-collapse-item>
      <l-collapse-item name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </l-collapse-item>
    </l-collapse>
  </div>
</template>
