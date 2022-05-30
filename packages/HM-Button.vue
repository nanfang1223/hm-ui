<template>
  <button><slot>888</slot></button>
</template>
<script setup>
import { ref, reactive, defineExpose, nextTick } from "vue";
</script>
<style scoped lang="less" name="button"></style>
