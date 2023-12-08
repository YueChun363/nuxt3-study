<template>
  <div class="red-text">
    this is about.
  </div>
  <span class="text-orange-500">测试tailwindcss文本</span>
  <a-button type="link" block>
    <nuxt-link to="/">
      返回 home
    </nuxt-link>
  </a-button>
</template>

<script setup lang='ts'>
import { ref, toRefs, reactive, onMounted } from 'vue'
const data = reactive({})
const color = ref('red')
onMounted(() => {
})
// let { } = { ...toRefs(data) }
defineExpose({
  ...toRefs(data)
})
const route = useRoute()
const router = useRouter()

</script>
<style scoped lang='less'>
.red-text {
    color: v-bind(color)
}
</style>
