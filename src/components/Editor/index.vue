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
import inputs from './inputs'
import createComponent from './createComponent'
import mapInputsToComponents from './mapInputsToComponents'

export default {
  props: [
    'data',
    'path',
    'components',
  ],
  computed: {
    componentList() {
      return mapInputsToComponents(this.components, inputs)
    },
    componentData() {
      return this.data[this.path]
    },
    componentDefinition() {
      const { type } = this.componentData
      return this.componentList.find(({ name }) => name === type)
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
    addComponent(type, index = null) {
      const componentDefinition = this.componentList.find(({ name }) => name === type)

      const component = createComponent(componentDefinition)

      const { data } = this

      const newData = [...data]
      if(index) {
        newData.splice(index, 0, component)

        this.$emit('replace', {
          path: index,
          data: newData,
        })
      } else {
        newData.push(component)
        this.$emit('replace', {
          path: newData.length - 1,
          data: newData,
        })
      }
    },
  },
  components: {
    Input,
  },
}
</script>

<style lang="scss" scoped>
</style>
