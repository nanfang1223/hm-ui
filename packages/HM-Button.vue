<template>
  <button><slot>测试按钮0.1.5</slot></button>
</template>
<script setup>
import { ref, reactive, defineExpose, nextTick } from "vue";
</script>
<style scoped lang="less" name="button"></style>
