<template>
    <div>
        <span>home</span>
    </div>
</template>

<script setup>
import useStore from '@store'

const store = useStore()

console.log(store.someState, 'storestore')

</script>

<style scoped lang="scss">
    div {
        font-weight: 800;
        span {
            color: red;
        }
    }
</style>
