<template>
  <div>
    <pre
      v-for="(datum, index) in data"
      :key="index"
      @click="$emit('selected', index)"
    >{{ datum }}</pre>
  </div>
</template>

<script lang="js">
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
</style>
