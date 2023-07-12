<template>
    <Router-view></Router-view>
</template>

<script setup>
    const calc = (a, b) => {
        return a - b
    }
    console.log(99, '22')
    console.log(calc(1024, 28))
    const a = 1
    console.log(a === 1)

    // const col = a => {
    //     console.log(a, 'aa')
    // }
</script>

<style scoped>
</style>
