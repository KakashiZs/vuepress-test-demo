<template>
  <div>
      <button @click="handleClick" class="button">这是 Button 组件</button>
  </div>
</template>

<script>
export default {
    name: 'mButton',
    methods: {
        handleClick() {
            alert(111);
        }
    }
}
</script>

<style>
.button {
    color: red;
}
</style>