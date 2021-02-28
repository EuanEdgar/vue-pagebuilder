<template>
  <div>
    <label>
      {{ label }}
      <slot />
    </label>
  </div>
</template>

<script lang="js">
export default {
  props: ['_key', 'name'],
  computed: {
    label() {
      const {
        _key: key,
        name,
      } = this
      return name || key
    }
  }
}
</script>

<style lang="scss" scoped>
label > * {
  display: block;
}
</style>
