<template>
  <select
    :value="selectValue"
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
</template>

<script lang="js">
const placeholderValue = '__PLACEHOLDER__'

export default {
  name: 'Select',
  wrapInput: true,
  props: [
    '_key',
    'data',
    'options',
    'placeholder',
    'disablePlaceholder',
  ],
  computed: {
    selectValue() {
      const {
        data,
        placeholder,
      } = this

      if(data) {
        return data
      } else if(placeholder) {
        return placeholderValue
      }
      return undefined
    },
    selectOptions() {
      const {
        options,
        placeholder,
        disablePlaceholder,
      } = this

      const selectOptions = options.map(this.formatOption)

      if(placeholder) {
        const placeholderOption = this.formatOption(placeholder)

        selectOptions.unshift({
          ...placeholderOption,
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
