<template>
 <div class="red-text">this is about.</div>
 <nuxt-link to="/">返回 home</nuxt-link>
</template>

<script setup lang='ts'>
import { ref, toRefs, reactive, onMounted } from 'vue';
const data = reactive({})
const color = ref('red')
onMounted(() => {
})
// let { } = { ...toRefs(data) } 
defineExpose({
 ...toRefs(data)
})

</script>
<style scoped lang='less'>
.red-text {
    color: v-bind(color)
}
</style>