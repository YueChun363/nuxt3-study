<template>
 <div>
    <h1>test header</h1>
    <slot />
 </div>
</template>

<script setup lang='ts'>
import { ref, toRefs, reactive, onMounted } from 'vue';
const data = reactive({})
onMounted(() => {
})
// let { } = { ...toRefs(data) } 
defineExpose({
 ...toRefs(data)
})

</script>
<style scoped lang='less'>
</style>