<template>
  <div class="yc">
    yc's first nuxt3 project.
  </div>
  <div>it's home right now.</div>
  <nuxt-link to="/about">
    去看 about
  </nuxt-link>
</template>

<script setup lang='ts'>
import { toRefs, reactive, onMounted } from 'vue'
const data = reactive({})
onMounted(() => {
})
// let { } = { ...toRefs(data) }
defineExpose({
  ...toRefs(data)
})
const runtimeConfig = useRuntimeConfig()
</script>
<style scoped lang='less'>
</style>
