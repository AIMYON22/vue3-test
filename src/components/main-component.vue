<template>
    <div>
        <div>{{content}}</div>
        <div>{{meseta.name}}</div>
        <el-button type="primary" plain @click="numPlus">更新</el-button>
    </div>
</template>

<script>
    import {ref, reactive, onUpdated} from 'vue'
    import { ElMessage } from 'element-plus'
    export default {
        name: "main-component",
        props: {
            title: String
        },
        setup(props, context) {
            const content = ref('0');
            const meseta = reactive({name: 'Meseta'});
            const numPlus = (() => content.value++)

            onUpdated(() => ElMessage({
                message: '更新了',
                type: 'success'
            }))

            console.log(props, context)
            return {
                content,
                meseta,
                numPlus
            }
        }
    }
</script>

<style scoped>

</style>