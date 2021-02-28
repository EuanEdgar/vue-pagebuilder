<template>
  <div>
    <h2>{{ _key }}</h2>
    <textarea :value="data" @change="onChange" />
  </div>
</template>

<script lang="js">
export default {
  name: 'TextInput',
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
