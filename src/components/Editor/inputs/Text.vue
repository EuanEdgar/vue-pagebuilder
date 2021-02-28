<template>
  <textarea :value="data" @change="onChange" />
</template>

<script lang="js">
export default {
  name: 'TextInput',
  wrapInput: true,
  initialValue: '',
  props: ['_key', 'data'],
  methods: {
    onChange(event) {
      const { target } = event
      this.$emit('change', target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
