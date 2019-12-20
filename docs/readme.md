## 下面这个官网 demo 可以正常渲染并显示出代码块
::: demo
<template>
    <button @click="onClick">Click!</button>
</template>

<script>
export default {
    methods: {
        onClick: () => { window.alert(1) },
    },
}
</script>

<style>
button {
    color: blue;
}
</style>
:::

## 下面这个组件可以正常渲染，但是不能显示出代码块 
:::
<MButton />
:::