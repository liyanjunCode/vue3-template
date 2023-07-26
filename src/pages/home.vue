<template>
    <div>
        home
        <el-button type="warning">22</el-button>
    </div>
</template>

<script setup>
    import useStore from '@store'
    import { ElButton } from 'element-plus'

    const store = useStore()
    const a = true
    if (a) {
        console.log(9)
    } else {
        console.log(567, '1')
    }
    const b = '2'

    console.log(b === '2')

    const c = { a: 1 }

    const d = a => {
        return a + b
    }
    // const arr = [
    //     {
    //         a: 1,
    //         b: 2
    //     },
    //     {
    //         a: 2,
    //         b: 3
    //     }
    // ]

    d(1, 2, '22')

    console.log(store.someState, 'storestore', c)
</script>

<style scoped lang="scss">
    div {
        font-weight: 800;
        span {
            color: red;
        }
    }
    .aa {
        width: 500px;
        height: 500px;
        border: 1px solid red;
    }
</style>
