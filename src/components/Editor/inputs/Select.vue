<template>
  <div>
    <h2>{{ _key }}</h2>
    <select
      :value="data"
      @change="onChange"
    >
      <option
        v-for="option in selectOptions"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script lang="js">
const placeholderValue = '__PLACEHOLDER__'

export default {
  name: 'Select',
  props: [
    '_key',
    'data',
    'options',
    'placeholder',
  ],
  computed: {
    selectOptions() {
      const {
        options,
        placeholder,
        disablePlaceholder,
      } = this

      const selectOptions = options.map(this.formatOption)

      if(placeholder) {
        const placeholder = this.formatOption(placeholder)

        selectOptions.unshift({
          ...placeholder,
          disabled: disablePlaceholder,
          value: placeholderValue,
        })
      }

      return selectOptions
    }
  },
  methods: {
    onChange(event) {
      const optionValue = event.target.selectedOptions[0].value

      if(optionValue === placeholderValue) {
        this.$emit('change', undefined)
      } else {
        const option = this.selectOptions.find(({ value }) => (
          value.toString() === optionValue
        ))

        this.$emit('change', option.value)
      }
    },
    formatOption(option) {
      if(option instanceof Array) {
        const [value, text] = option
        return {
          value,
          text,
        }
      } else if(typeof option === 'object') {
        return option
      } else {
        return {
          text: option,
          value: option,
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
