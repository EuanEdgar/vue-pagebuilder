<template>
  <pre>{{ formattedData }}</pre>
</template>

<script lang="js">
export default {
  props: ['data'],
  computed: {
    formattedData() {
      return this.data.toJS()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
