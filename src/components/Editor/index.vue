<template>
  <div>
    <h1>{{ componentDefinition.name }}</h1>

    <div>
      <Input
        v-for="input in inputs"
        :key="input.key"
        :input="input"
        :data="componentData[input.key]"
        :component="componentDefinition"
        :component-data="componentData"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script lang="js">
import Input from './Input'

export default {
  props: [
    'data',
    'path',
    'components',
  ],
  computed: {
    componentData() {
      return this.data.get(this.path).toJS()
    },
    componentDefinition() {
      const { type } = this.componentData
      return this.components.find(({ name }) => name === type)
    },
    inputs() {
      return this.componentDefinition.inputs
    },
  },
  methods: {
    onChange(data) {
      this.$emit('change', {
        path: this.path,
        data,
      })
    },
  },
  components: {
    Input,
  },
}
</script>

<style lang="scss" scoped>
</style>
