<template>
  <div class="id-text">
    {{ paramsId }}
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
const route = useRoute()
const paramsId = ref(route.params.id)

onMounted(() => {
})
definePageMeta({
  title: 'my about page',
  validate (route) {
    return Number.isInteger(Number(route.params.id))
  }
})
</script>
<style scoped lang='less'>
.id-text{
    color: @theme-color;
}
</style>
